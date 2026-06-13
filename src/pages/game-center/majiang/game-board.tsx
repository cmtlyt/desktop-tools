import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Tile, GameState, ActionType, PendingAction, WinResult } from './type';
import {
  initGame,
  drawTile,
  drawFromEnd,
  discardTile,
  performPong,
  performChow,
  performExposedKong,
  performConcealedKong,
  performAddedKong,
  detectActions,
  detectSelfActions,
  isFlowerTile,
  nextPlayerIndex,
  isDrawGame,
  getWinDecompositions,
  calculateScore,
  settleScores,
  getTileShortLabel,
  validateDiscard,
  DEFAULT_DISCARD_RULES,
} from './util';
import {
  aiChooseDiscard,
  aiDecideAction,
  aiChooseChowOption,
  aiChooseConcealedKongTile,
  aiChooseAddedKongTile,
} from './ai';
import {
  TileView,
  PlayerHandView,
  ActionBarView,
  MessageBox,
  JokerBadge,
  SettlementPanel,
  DrawGamePanel,
} from './components';

const AI_DELAY = 2000;

function recordDiscard(state: GameState, tile: Tile): void {
  state.discardPool.push(tile);
}

function removeClaimedDiscard(state: GameState, tile: Tile): void {
  state.discardPool = state.discardPool.filter((discardedTile) => discardedTile.id !== tile.id);
  for (const player of state.players) {
    player.discards = player.discards.filter((discardedTile) => discardedTile.id !== tile.id);
  }
}

// ============================================================
// 样式组件
// ============================================================

const PageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 6.4rem);
  max-height: calc(100vh - 6.4rem);
  background: linear-gradient(145deg, #1b5e20, #2e7d32);
  padding: 2.4rem;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  perspective: 120rem;
`;

const TableLayout = styled.div`
  width: min(calc(100vmin - 4.8rem), calc(100vh - 18rem), 100%);
  max-height: calc(100vh - 18rem);
  aspect-ratio: 1;
  flex: 0 1 auto;
  display: grid;
  grid-template-columns: minmax(6.4rem, 1fr) minmax(0, 2fr) minmax(6.4rem, 1fr);
  grid-template-rows: minmax(6.4rem, 1fr) minmax(0, 2fr) minmax(6.4rem, 1fr);
  grid-template-areas:
    '. top .'
    'left center right'
    '. bottom .';
  gap: 0;
  min-height: 0;
  overflow: visible;
  position: relative;
  transform: rotateX(40deg) translateY(-20%);
  transform-origin: center center;
`;

const TopSeat = styled.div`
  grid-area: top;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 4px 0;
  overflow: visible;
`;

const BottomSeat = styled.div`
  grid-area: bottom;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 0;
  overflow: visible;
`;

const LeftSeat = styled.div`
  grid-area: left;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
`;

const RightSeat = styled.div`
  grid-area: right;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
`;

const CenterArea = styled.div`
  grid-area: center;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 2px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  margin: 8px;
  overflow: auto;
  min-height: 0;
  max-height: 100%;
  z-index: 10;
`;

const DiscardLabel = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
`;

const ChowOptionWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 4px 0;
`;

const ChowOptionGroup = styled.div`
  display: flex;
  gap: 1px;
  padding: 4px;
  border: 1.5px solid #90caf9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s;
  background: rgba(255, 255, 255, 0.9);
  &:hover {
    border-color: #1565c0;
    background: #e3f2fd;
  }
`;

const TopBar = styled.div`
  width: 100%;
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1.2rem;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.2rem;
`;

const BottomActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`;

// ============================================================
// 游戏主体组件（动态）
// ============================================================

interface GameBoardProps {
  onExit: () => void;
}

export function GameBoard({ onExit }: GameBoardProps) {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [selectedTile, setSelectedTile] = useState<Tile | null>(null);
  const [playerActions, setPlayerActions] = useState<ActionType[]>([]);
  const [chowOptions, setChowOptions] = useState<Tile[][]>([]);
  const [showChowPicker, setShowChowPicker] = useState(false);
  const [message, setMessage] = useState('');
  const [winResult, setWinResult] = useState<WinResult | null>(null);
  const [dealerIndex, setDealerIndex] = useState(0);
  const [dealerStreak, setDealerStreak] = useState(0);

  const gameStateRef = useRef(gameState);
  gameStateRef.current = gameState;
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  // @ts-expect-error ignore
  window.gameStateRef = gameStateRef;

  // 清理定时器
  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  // ========== 开始游戏 ==========
  const startGame = useCallback(() => {
    const state = initGame(dealerIndex, dealerStreak);
    setGameState(state);
    setSelectedTile(null);
    setPlayerActions([]);
    setChowOptions([]);
    setShowChowPicker(false);
    setWinResult(null);
    setMessage('游戏开始！');

    // 如果庄家是 AI，延迟执行 AI 回合
    if (state.players[state.dealerIndex].isAI) {
      timerRef.current = setTimeout(() => handleAITurn(state, state.dealerIndex), AI_DELAY);
    } else {
      // 玩家庄家: 检测自摸操作
      const selfActions = detectSelfActions(state, state.dealerIndex);
      if (selfActions.length > 0) {
        setPlayerActions([...selfActions, ActionType.Pass]);
      }
    }
  }, [dealerIndex, dealerStreak]);

  // 初始化游戏
  useEffect(() => {
    startGame();
  }, []);

  // ========== 处理花牌补牌 ==========
  const handleFlowerDraw = useCallback((state: GameState, playerIndex: number): boolean => {
    const player = state.players[playerIndex];
    let hasFlower = true;
    let processed = false;
    while (hasFlower) {
      hasFlower = false;
      for (let i = player.hand.length - 1; i >= 0; i--) {
        if (isFlowerTile(player.hand[i], state.jokerTile)) {
          player.flowers.push(player.hand.splice(i, 1)[0]);
          const drawn = drawFromEnd(state, playerIndex);
          if (!drawn) return processed;
          hasFlower = true;
          processed = true;
        }
      }
    }
    return processed;
  }, []);

  // ========== AI 回合 ==========
  const handleAITurn = useCallback((state: GameState, playerIndex: number) => {
    const player = state.players[playerIndex];

    // 检测自摸动作
    const selfActions = detectSelfActions(state, playerIndex);
    const decision = aiDecideAction(player, selfActions, state);

    if (decision === ActionType.Win) {
      handleWin(state, playerIndex, true);
      return;
    }

    if (decision === ActionType.ConcealedKong) {
      const kongTile = aiChooseConcealedKongTile(player, state.jokerTile);
      if (kongTile) {
        const drawn = performConcealedKong(player, kongTile, state.wall);
        if (drawn) {
          handleFlowerDraw(state, playerIndex);
          state.isKongBloom = true;
          setGameState({ ...state });
          timerRef.current = setTimeout(() => handleAITurn(state, playerIndex), AI_DELAY);
          return;
        }
      }
    }

    if (decision === ActionType.AddedKong) {
      const kongTile = aiChooseAddedKongTile(player);
      if (kongTile) {
        const drawn = performAddedKong(player, kongTile, state.wall);
        if (drawn) {
          handleFlowerDraw(state, playerIndex);
          state.isKongBloom = true;
          setGameState({ ...state });
          timerRef.current = setTimeout(() => handleAITurn(state, playerIndex), AI_DELAY);
          return;
        }
      }
    }

    // 出牌
    const tile = aiChooseDiscard(player, state);
    discardTile(player, tile);
    recordDiscard(state, tile);
    state.lastDiscardedTile = tile;
    state.lastDiscardPlayerIndex = playerIndex;
    state.isKongBloom = false;
    setMessage(`${player.name} 打出 ${getTileShortLabel(tile)}`);
    setGameState({ ...state });

    // 延迟200ms后再检测吃碰杠，让玩家看到牌进入牌河
    setTimeout(() => afterDiscard(state, tile, playerIndex), 200);
  }, []);

  // ========== 弃牌后检测 ==========
  const afterDiscard = useCallback((state: GameState, tile: Tile, discardPlayerIdx: number) => {
    const pending = detectActions(state, tile, discardPlayerIdx);

    // 检查是否有人类玩家有操作
    const humanPending = pending.find((p) => !state.players[p.playerIndex].isAI);
    if (humanPending) {
      const actions = [...humanPending.actions, ActionType.Pass];
      setPlayerActions(actions);
      if (humanPending.options[ActionType.Chow]) {
        setChowOptions(humanPending.options[ActionType.Chow]!);
      }
      return;
    }

    // 只有 AI 有操作
    const aiPending = pending.find((p) => state.players[p.playerIndex].isAI);
    if (aiPending) {
      timerRef.current = setTimeout(() => {
        handleAIResponse(state, aiPending);
      }, AI_DELAY);
      return;
    }

    // 无人有操作, 下家摸牌
    proceedToNextPlayer(state, discardPlayerIdx);
  }, []);

  // ========== AI 响应弃牌操作 ==========
  const handleAIResponse = useCallback((state: GameState, pending: PendingAction) => {
    const player = state.players[pending.playerIndex];
    const decision = aiDecideAction(player, pending.actions, state);

    if (decision === ActionType.Win || decision === ActionType.RobKong) {
      handleWin(state, pending.playerIndex, false);
      return;
    }

    if (decision === ActionType.Kong) {
      const drawn = performExposedKong(player, pending.triggerTile, state.lastDiscardPlayerIndex, state.wall);
      if (!drawn) {
        state.phase = 'draw_game';
        setMessage('荒庄流局！');
        setGameState({ ...state });
        return;
      }
      removeClaimedDiscard(state, pending.triggerTile);
      handleFlowerDraw(state, pending.playerIndex);
      state.isKongBloom = true;
      state.currentPlayerIndex = pending.playerIndex;
      setMessage(`${player.name} 杠！`);
      setGameState({ ...state });
      timerRef.current = setTimeout(() => handleAITurn(state, pending.playerIndex), AI_DELAY);
      return;
    }

    if (decision === ActionType.Pong) {
      performPong(player, pending.triggerTile, state.lastDiscardPlayerIndex);
      removeClaimedDiscard(state, pending.triggerTile);
      state.currentPlayerIndex = pending.playerIndex;
      setMessage(`${player.name} 碰！`);
      setGameState({ ...state });
      // 碰后 AI 出牌
      timerRef.current = setTimeout(() => {
        const discTile = aiChooseDiscard(player, state);
        discardTile(player, discTile);
        recordDiscard(state, discTile);
        state.lastDiscardedTile = discTile;
        state.lastDiscardPlayerIndex = pending.playerIndex;
        state.isKongBloom = false;
        setMessage(`${player.name} 打出 ${getTileShortLabel(discTile)}`);
        setGameState({ ...state });
        afterDiscard(state, discTile, pending.playerIndex);
      }, AI_DELAY);
      return;
    }

    if (decision === ActionType.Chow) {
      const options = pending.options[ActionType.Chow] || [];
      const chosen = aiChooseChowOption(options);
      if (chosen.length > 0) {
        performChow(player, pending.triggerTile, chosen, state.lastDiscardPlayerIndex);
        removeClaimedDiscard(state, pending.triggerTile);
        state.currentPlayerIndex = pending.playerIndex;
        setMessage(`${player.name} 吃！`);
        setGameState({ ...state });
        timerRef.current = setTimeout(() => {
          const discTile = aiChooseDiscard(player, state);
          discardTile(player, discTile);
          recordDiscard(state, discTile);
          state.lastDiscardedTile = discTile;
          state.lastDiscardPlayerIndex = pending.playerIndex;
          state.isKongBloom = false;
          setMessage(`${player.name} 打出 ${getTileShortLabel(discTile)}`);
          setGameState({ ...state });
          afterDiscard(state, discTile, pending.playerIndex);
        }, AI_DELAY);
        return;
      }
    }

    // Pass: 下家摸牌
    proceedToNextPlayer(state, state.lastDiscardPlayerIndex);
  }, []);

  // ========== 下一玩家摸牌 ==========
  const proceedToNextPlayer = useCallback((state: GameState, currentIdx: number) => {
    const nextIdx = nextPlayerIndex(currentIdx);

    if (isDrawGame(state)) {
      state.phase = 'draw_game';
      setMessage('荒庄流局！');
      setGameState({ ...state });
      return;
    }

    const drawn = drawTile(state, nextIdx);
    if (!drawn) {
      state.phase = 'draw_game';
      setMessage('荒庄流局！');
      setGameState({ ...state });
      return;
    }

    state.currentPlayerIndex = nextIdx;
    handleFlowerDraw(state, nextIdx);
    setGameState({ ...state });

    if (state.players[nextIdx].isAI) {
      timerRef.current = setTimeout(() => handleAITurn(state, nextIdx), AI_DELAY);
    } else {
      setMessage(`你摸了一张 ${getTileShortLabel(drawn)}`);
      const selfActions = detectSelfActions(state, nextIdx);
      if (selfActions.length > 0) {
        setPlayerActions([...selfActions, ActionType.Pass]);
      } else {
        setPlayerActions([]);
      }
    }
  }, []);

  // ========== 胡牌处理 ==========
  const handleWin = useCallback((state: GameState, winnerIdx: number, isSelfDraw: boolean) => {
    const player = state.players[winnerIdx];
    const lastTile = isSelfDraw ? player.lastDrawnTile : state.lastDiscardedTile;
    if (!lastTile) {
      console.debug('ERROR: 无牌可胡！', player, state);
      setMessage('ERROR: 无牌可胡！');
      return;
    }
    const decompositions = getWinDecompositions(player, lastTile, state.jokerTile);
    if (decompositions.length === 0) return;

    const { decomposition, scoreDetail } = decompositions
      .map((decomposition) => ({
        decomposition,
        scoreDetail: calculateScore(state, winnerIdx, decomposition, false, isSelfDraw),
      }))
      .sort((a, b) => b.scoreDetail.finalTotal - a.scoreDetail.finalTotal)[0];
    const settlements = settleScores(state, winnerIdx, state.lastDiscardPlayerIndex, scoreDetail);

    state.phase = 'win';
    setGameState({ ...state });
    setPlayerActions([]);
    setMessage(`${player.name} ${isSelfDraw ? '自摸' : '胡牌'}！`);
    setWinResult({
      winnerIndex: winnerIdx,
      loserIndex: state.lastDiscardPlayerIndex,
      scoreDetail,
      settlements,
      decomposition,
    });

    // 更新庄家
    if (winnerIdx === state.dealerIndex) {
      setDealerStreak((prev) => prev + 1);
    } else {
      setDealerStreak(0);
      setDealerIndex(nextPlayerIndex(state.dealerIndex));
    }
  }, []);

  // ========== 玩家操作 ==========
  const handlePlayerAction = useCallback((action: ActionType) => {
    const state = gameStateRef.current;
    if (!state) return;

    const playerIdx = 0; // 玩家固定 index=0
    const player = state.players[playerIdx];

    switch (action) {
      case ActionType.Win: {
        handleWin(state, playerIdx, state.currentPlayerIndex === playerIdx);
        break;
      }

      case ActionType.Pong: {
        if (!state.lastDiscardedTile) break;
        performPong(player, state.lastDiscardedTile, state.lastDiscardPlayerIndex);
        removeClaimedDiscard(state, state.lastDiscardedTile);
        state.currentPlayerIndex = playerIdx;
        setMessage('你碰了！请出牌');
        setPlayerActions([]);
        setGameState({ ...state });
        break;
      }

      case ActionType.Kong: {
        if (!state.lastDiscardedTile) break;
        performExposedKong(player, state.lastDiscardedTile, state.lastDiscardPlayerIndex, state.wall);
        removeClaimedDiscard(state, state.lastDiscardedTile);
        handleFlowerDraw(state, playerIdx);
        state.currentPlayerIndex = playerIdx;
        state.isKongBloom = true;
        setMessage('你杠了！');
        setPlayerActions([]);
        setGameState({ ...state });
        // 杠后检测自摸操作
        const selfActs = detectSelfActions(state, playerIdx);
        if (selfActs.length > 0) {
          setPlayerActions([...selfActs, ActionType.Pass]);
        }
        break;
      }

      case ActionType.Chow: {
        setShowChowPicker(true);
        break;
      }

      case ActionType.ConcealedKong: {
        const kongTile = aiChooseConcealedKongTile(player, state.jokerTile);
        if (kongTile) {
          performConcealedKong(player, kongTile, state.wall);
          handleFlowerDraw(state, playerIdx);
          state.isKongBloom = true;
          setMessage('你暗杠了！');
          setPlayerActions([]);
          setGameState({ ...state });
          const selfActs = detectSelfActions(state, playerIdx);
          if (selfActs.length > 0) {
            setPlayerActions([...selfActs, ActionType.Pass]);
          }
        }
        break;
      }

      case ActionType.AddedKong: {
        const addTile = aiChooseAddedKongTile(player);
        if (addTile) {
          performAddedKong(player, addTile, state.wall);
          handleFlowerDraw(state, playerIdx);
          state.isKongBloom = true;
          setMessage('你补杠了！');
          setPlayerActions([]);
          setGameState({ ...state });
          const selfActs = detectSelfActions(state, playerIdx);
          if (selfActs.length > 0) {
            setPlayerActions([...selfActs, ActionType.Pass]);
          }
        }
        break;
      }

      case ActionType.Pass: {
        setPlayerActions([]);
        setShowChowPicker(false);
        // 如果是对弃牌的 pass, 继续流程
        if (state.lastDiscardedTile && state.currentPlayerIndex !== playerIdx) {
          proceedToNextPlayer(state, state.lastDiscardPlayerIndex);
        }
        break;
      }
    }
  }, []);

  // ========== 吃牌选择 ==========
  const handleChowSelect = useCallback((option: Tile[]) => {
    const state = gameStateRef.current;
    if (!state || !state.lastDiscardedTile) return;
    const player = state.players[0];
    performChow(player, state.lastDiscardedTile, option, state.lastDiscardPlayerIndex);
    removeClaimedDiscard(state, state.lastDiscardedTile);
    state.currentPlayerIndex = 0;
    setShowChowPicker(false);
    setChowOptions([]);
    setPlayerActions([]);
    setMessage('你吃了！请出牌');
    setGameState({ ...state });
  }, []);

  // ========== 玩家出牌 ==========
  const handleTileClick = useCallback(
    (tile: Tile) => {
      const state = gameStateRef.current;
      if (!state || state.phase !== 'playing') return;
      if (state.currentPlayerIndex !== 0) return;

      if (selectedTile?.id === tile.id) {
        // 出牌前校验
        const validation = validateDiscard(tile, state.players[0], state, DEFAULT_DISCARD_RULES);
        if (!validation.valid) {
          setMessage(validation.message || '不能打出这张牌');
          setSelectedTile(null);
          return;
        }

        // 双击确认出牌 - 即使有自摸操作也允许出牌
        discardTile(state.players[0], tile);
        recordDiscard(state, tile);
        state.lastDiscardedTile = tile;
        state.lastDiscardPlayerIndex = 0;
        state.isKongBloom = false;
        setSelectedTile(null);
        setPlayerActions([]);
        setChowOptions([]);
        setMessage(`你打出 ${getTileShortLabel(tile)}`);
        setGameState({ ...state });
        // 延迟200ms后再检测吃碰杠，让玩家看到牌进入牌河
        setTimeout(() => afterDiscard(state, tile, 0), 200);
      } else {
        setSelectedTile(tile);
      }
    },
    [selectedTile],
  );

  if (!gameState) {
    return null;
  }

  const humanPlayer = gameState.players[0];

  return (
    <PageWrapper>
      <TopBar>
        <span>剩余: {gameState.wall.length}张</span>
        {gameState.jokerTile && (
          <JokerBadge>
            财神: <TileView tile={gameState.jokerTile} jokerTile={gameState.jokerTile} small disabled />
          </JokerBadge>
        )}
        <MessageBox>{message}</MessageBox>
        <span>连庄: {gameState.dealerStreakCount}</span>
      </TopBar>

      <TableLayout>
        {/* 对面(玩家2) */}
        <TopSeat>
          <PlayerHandView
            player={gameState.players[2]}
            jokerTile={gameState.jokerTile}
            isActive={gameState.currentPlayerIndex === 2}
            selectedTile={null}
            showHand={gameState.phase === 'win' || gameState.phase === 'draw_game'}
            position="top"
          />
        </TopSeat>

        {/* 上家(玩家3) - 左侧 */}
        <LeftSeat>
          <PlayerHandView
            player={gameState.players[3]}
            jokerTile={gameState.jokerTile}
            isActive={gameState.currentPlayerIndex === 3}
            selectedTile={null}
            showHand={gameState.phase === 'win' || gameState.phase === 'draw_game'}
            position="left"
          />
        </LeftSeat>

        {/* 中央牌海: 所有玩家弃牌统一展示 */}
        <CenterArea>
          {gameState.discardPool.map((tile) => (
            <TileView key={tile.id} tile={tile} jokerTile={gameState.jokerTile} small disabled />
          ))}
        </CenterArea>

        {/* 下家(玩家1) - 右侧 */}
        <RightSeat>
          <PlayerHandView
            player={gameState.players[1]}
            jokerTile={gameState.jokerTile}
            isActive={gameState.currentPlayerIndex === 1}
            selectedTile={null}
            showHand={gameState.phase === 'win' || gameState.phase === 'draw_game'}
            position="right"
          />
        </RightSeat>

        {/* 自己(玩家0) - 底部 */}
        <BottomSeat>
          <PlayerHandView
            player={humanPlayer}
            jokerTile={gameState.jokerTile}
            isActive={gameState.currentPlayerIndex === 0}
            selectedTile={selectedTile}
            onTileClick={handleTileClick}
            showHand
            position="bottom"
          />

          {/* 操作按钮 */}
          <BottomActions>
            {playerActions.length > 0 && gameState.phase === 'playing' && (
              <ActionBarView actions={playerActions} onAction={handlePlayerAction} />
            )}

            {/* 吃牌选择 */}
            {showChowPicker && chowOptions.length > 0 && (
              <div>
                <DiscardLabel>选择吃牌组合:</DiscardLabel>
                <ChowOptionWrap>
                  {chowOptions.map((option, idx) => (
                    <ChowOptionGroup key={idx} onClick={() => handleChowSelect(option)}>
                      {option.map((tile) => (
                        <TileView key={tile.id} tile={tile} jokerTile={gameState.jokerTile} small disabled />
                      ))}
                    </ChowOptionGroup>
                  ))}
                </ChowOptionWrap>
              </div>
            )}
          </BottomActions>
        </BottomSeat>
      </TableLayout>

      {/* 结算面板 */}
      {winResult && <SettlementPanel state={gameState} winResult={winResult} onContinue={startGame} onExit={onExit} />}

      {/* 流局面板 */}
      {gameState.phase === 'draw_game' && !winResult && (
        <DrawGamePanel state={gameState} onContinue={startGame} onExit={onExit} />
      )}
    </PageWrapper>
  );
}
