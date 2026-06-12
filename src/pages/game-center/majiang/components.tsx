import { memo, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Tile, Player, ActionType, GameState, WinResult } from './type';
import { isJokerTile, sortTiles } from './util';
import { renderTileContent, TILE_W, TILE_H, TILE_W_SM, TILE_H_SM, JOKER_COLOR } from './tile-renderer';

const TILE_W_REM = '3.6rem';
const TILE_H_REM = '5rem';
const TILE_W_SM_REM = '2.8rem';
const TILE_H_SM_REM = '3.8rem';

// ============================================================
// 样式组件
// ============================================================

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const TileWrapper = styled.div<{ $selected?: boolean; $disabled?: boolean; $small?: boolean; $highlight?: boolean }>`
  display: inline-flex;
  cursor: ${(p) => (p.$disabled ? 'default' : 'pointer')};
  user-select: none;
  transition: all 0.15s;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 2px;
    right: 2px;
    height: 4px;
    background: linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 100%);
    border-radius: 0 0 4px 4px;
    z-index: -2;
  }

  ${(p) => p.$selected && css`
    transform: translateY(-0.8rem);
    filter: drop-shadow(0 0.6rem 0.8rem rgba(251,192,45,0.5));
  `}

  ${(p) => p.$highlight && css`
    filter: drop-shadow(0 0 0.6rem rgba(255, 143, 0, 0.75));

    svg rect:first-of-type {
      stroke: #ff8f00;
      stroke-width: 2;
    }
  `}

  &:hover {
    ${(p) => !p.$disabled && !p.$selected && css`
      transform: translateY(-4px);
      filter: drop-shadow(0 3px 6px rgba(0,0,0,0.2));
    `}
  }

  &:active {
    ${(p) => !p.$disabled && css`
      transform: translateY(-1px) scale(0.98);
      transition: all 0.05s;
    `}
  }
`;

const HandArea = styled.div`
  display: flex;
  gap: 0.2rem;
  flex-wrap: nowrap;
  align-items: flex-end;
  min-height: 5.6rem;
  overflow: visible;
`;

const MeldRow = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: flex-end;
  justify-content: center;
  min-height: 4.2rem;
`;

const PlayerTiles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`;

const MeldArea = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: flex-end;
  flex-shrink: 0;
`;

const MeldGroup = styled.div`
  display: flex;
  gap: 0.1rem;
  padding: 0.2rem 0.4rem;
  background: rgba(0,0,0,0.04);
  border-radius: 0.4rem;
`;

export type TablePosition = 'bottom' | 'top' | 'left' | 'right';

const POSITION_ROTATE: Record<TablePosition, number> = {
  bottom: 0,
  right: -90,
  top: 180,
  left: 90,
};

/**
 * 玩家容器: 所有方位的内部布局完全一致(水平手牌),
 * 整个容器绕自身中心旋转到正确朝向
 */
const PlayerSection = styled.div<{ $isActive?: boolean; $position?: TablePosition }>`
  padding: 6px 8px;
  border-radius: 8px;
  background: ${(p) => (p.$isActive ? 'rgba(255,235,59,0.12)' : 'rgba(255,255,255,0.05)')};
  border: 1.5px solid ${(p) => (p.$isActive ? '#fdd835' : 'transparent')};
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  transform: rotate(${(p) => POSITION_ROTATE[p.$position || 'bottom']}deg);
  transform-origin: center center;
  white-space: nowrap;
`;

const PlayerName = styled.div<{ $isDealer?: boolean }>`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #37474f;
  display: flex;
  align-items: center;
  gap: 4px;

  ${(p) => p.$isDealer && css`
    &::after {
      content: '庄';
      font-size: 10px;
      background: #d32f2f;
      color: #fff;
      padding: 0 4px;
      border-radius: 3px;
    }
  `}
`;

const JokerBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: linear-gradient(135deg, #ff8f00, #ff6f00);
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
`;

const DiscardArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  max-width: 320px;
  min-height: 30px;
`;

const ActionBar = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;
  animation: ${fadeIn} 0.2s ease;
`;

const ActionButton = styled.button<{ $variant?: 'primary' | 'danger' | 'default' }>`
  padding: 6px 16px;
  border-radius: 6px;
  border: none;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;

  ${(p) => {
    switch (p.$variant) {
      case 'primary':
        return css`
          background: #1565c0;
          color: #fff;
          &:hover { background: #0d47a1; }
        `;
      case 'danger':
        return css`
          background: #d32f2f;
          color: #fff;
          &:hover { background: #b71c1c; }
        `;
      default:
        return css`
          background: #eceff1;
          color: #37474f;
          &:hover { background: #cfd8dc; }
        `;
    }
  }}
`;

const GameBoard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  max-width: 680px;
  margin: 0 auto;
`;

const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  background: #eceff1;
  border-radius: 6px;
  font-size: 12px;
  color: #546e7a;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px dashed #cfd8dc;
  margin: 4px 0;
`;

const MessageBox = styled.div`
  text-align: center;
  padding: 1.2rem 2rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, rgba(21, 101, 192, 0.9), rgba(13, 71, 161, 0.9));
  border: 0.2rem solid rgba(255, 255, 255, 0.3);
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 1.6rem rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.4s ease;
  margin: 0.8rem 0;
`;

const ScoreBoard = styled.div`
  background: #fff8e1;
  border: 1px solid #ffe082;
  border-radius: 8px;
  padding: 12px;
  font-size: 13px;

  .score-title {
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 8px;
    color: #e65100;
  }

  .score-detail {
    margin: 2px 0;
    color: #4e342e;
  }

  .score-total {
    margin-top: 8px;
    font-weight: 700;
    font-size: 16px;
    color: #d32f2f;
  }

  .settlement-item {
    display: flex;
    justify-content: space-between;
    padding: 2px 0;
  }
`;

const SettlementOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem;
  background: rgba(0, 0, 0, 0.45);

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const SettlementCard = styled.div`
  width: min(56rem, 100%);
  max-height: calc(100vh - 4.8rem);
  overflow: auto;
  background: #fff8e1;
  border: 0.1rem solid #ffe082;
  border-radius: 1.2rem;
  padding: 2rem;
  box-shadow: 0 1.6rem 4rem rgba(0, 0, 0, 0.28);
  font-size: 1.4rem;

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    max-height: none;
    border-radius: 0;
    box-shadow: none;
  }
`;

const SettlementTitle = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #e65100;
  margin-bottom: 1.2rem;
`;

const SettlementDetail = styled.div`
  margin: 0.4rem 0;
  color: #4e342e;
`;

const SettlementTotal = styled.div`
  margin-top: 1.2rem;
  font-size: 1.8rem;
  font-weight: 800;
  color: #d32f2f;
`;

const SettlementItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
`;

const SettlementActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  margin-top: 1.6rem;
  flex-wrap: wrap;
`;

const SettlementButton = styled.button<{ $variant?: 'primary' | 'default' }>`
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  color: ${(p) => (p.$variant === 'primary' ? '#1b5e20' : '#37474f')};
  background: ${(p) => (p.$variant === 'primary' ? 'linear-gradient(135deg, #fdd835, #f9a825)' : '#eceff1')};
`;

// ============================================================
// 单张牌组件 (SVG)
// ============================================================

interface TileViewProps {
  tile: Tile;
  jokerTile?: Tile | null;
  selected?: boolean;
  disabled?: boolean;
  small?: boolean;
  highlight?: boolean;
  onClick?: (tile: Tile) => void;
  style?: React.CSSProperties;
}

export const TileView = memo(function TileView({
  tile, jokerTile, selected, disabled, small, highlight, onClick, style,
}: TileViewProps) {
  const isJoker = jokerTile ? isJokerTile(tile, jokerTile) : false;
  const width = small ? TILE_W_SM : TILE_W;
  const height = small ? TILE_H_SM : TILE_H;
  const borderColor = selected ? '#fbc02d' : isJoker ? JOKER_COLOR : '#d0d0d0';

  const handleClick = useCallback(() => {
    if (!disabled && onClick) onClick(tile);
  }, [tile, disabled, onClick]);

  return (
    <TileWrapper $selected={selected} $disabled={disabled} $small={small} $highlight={highlight || isJoker} onClick={handleClick} style={style}>
      <svg width={small ? TILE_W_SM_REM : TILE_W_REM} height={small ? TILE_H_SM_REM : TILE_H_REM} viewBox={`0 0 ${width} ${height}`}>
        {/* 渐变定义 */}
        <defs>
          <linearGradient id={`tileBg-${tile.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={selected ? '#fffde7' : '#ffffff'} />
            <stop offset="100%" stopColor={selected ? '#fff9c4' : '#f5f0e0'} />
          </linearGradient>
          <linearGradient id={`tileHighlight-${tile.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity={0.9} />
            <stop offset="100%" stopColor="#fff" stopOpacity={0} />
          </linearGradient>
          <filter id={`tileShadow-${tile.id}`}>
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.5" />
            <feOffset dx="0" dy="1" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* 牌体主背景（带渐变） */}
        <rect x={1} y={1} width={width - 2} height={height - 2} rx={4} ry={4}
          fill={`url(#tileBg-${tile.id})`} stroke={borderColor} strokeWidth={1} />
        
        {/* 顶部高光 */}
        <rect x={2.5} y={2} width={width - 5} height={height * 0.4} rx={3} ry={3}
          fill={`url(#tileHighlight-${tile.id})`} opacity={0.6} />
        
        {/* 底部厚度阴影 */}
        <rect x={1.5} y={height - 3} width={width - 3} height={2} rx={1} ry={1}
          fill="#000" opacity={0.15} />
        
        {/* 内边框（增强立体感） */}
        <rect x={2} y={2} width={width - 4} height={height - 4} rx={3} ry={3}
          fill="none" stroke="#fff" strokeWidth={0.5} opacity={0.5} />
        
        {/* 财神光晕 */}
        {isJoker && (
          <rect x={1.5} y={1.5} width={width - 3} height={height - 3} rx={3.5} ry={3.5}
            fill="none" stroke={JOKER_COLOR} strokeWidth={1.2} opacity={0.6} />
        )}
        
        {/* 牌面内容 */}
        {renderTileContent(tile, jokerTile ?? null, width, height)}
      </svg>
    </TileWrapper>
  );
});

/** 牌背面 (SVG) */
export const TileBackView = memo(function TileBackView({ small, style }: { small?: boolean; style?: React.CSSProperties }) {
  const width = small ? TILE_W_SM : TILE_W;
  const height = small ? TILE_H_SM : TILE_H;
  const patternSize = 6;

  return (
    <div style={style}>
      <svg width={small ? TILE_W_SM_REM : TILE_W_REM} height={small ? TILE_H_SM_REM : TILE_H_REM} viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <pattern id="backPattern" x={0} y={0} width={patternSize} height={patternSize} patternUnits="userSpaceOnUse">
            <rect width={patternSize} height={patternSize} fill="#0d47a1" />
            <circle cx={patternSize / 2} cy={patternSize / 2} r={1} fill="#1565c0" />
          </pattern>
          <linearGradient id="backGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1976d2" />
            <stop offset="100%" stopColor="#0d47a1" />
          </linearGradient>
        </defs>
        <rect x={0.75} y={0.75} width={width - 1.5} height={height - 1.5} rx={3} ry={3}
          fill="url(#backGrad)" stroke="#0d47a1" strokeWidth={1.5} />
        <rect x={3} y={3} width={width - 6} height={height - 6} rx={1.5} ry={1.5}
          fill="url(#backPattern)" opacity={0.4} />
        <rect x={3} y={3} width={width - 6} height={height - 6} rx={1.5} ry={1.5}
          fill="none" stroke="#64b5f6" strokeWidth={0.5} opacity={0.4} />
      </svg>
    </div>
  );
});

// ============================================================
// 玩家区域组件
// ============================================================

interface PlayerHandProps {
  player: Player;
  jokerTile: Tile | null;
  isActive: boolean;
  selectedTile: Tile | null;
  onTileClick?: (tile: Tile) => void;
  showHand: boolean;
  position?: TablePosition;
}

export const PlayerHandView = memo(function PlayerHandView({
  player, jokerTile, isActive, selectedTile, onTileClick, showHand, position = 'bottom',
}: PlayerHandProps) {
  const windLabels: Record<string, string> = {
    east: '东', south: '南', west: '西', north: '北',
  };
  const useSmallTiles = position !== 'bottom';

  return (
    <PlayerSection $isActive={isActive} $position={position}>
      <PlayerName $isDealer={player.isDealer}>
        {player.name} ({windLabels[player.wind]})
      </PlayerName>

      <PlayerTiles>
        <MeldRow>
          {player.flowers.length > 0 && (
            <MeldArea>
              <MeldGroup>
                {player.flowers.map((tile) => (
                  <TileView key={tile.id} tile={tile} jokerTile={jokerTile} small disabled />
                ))}
              </MeldGroup>
            </MeldArea>
          )}

          {player.melds.length > 0 && (
            <MeldArea>
              {player.melds.map((meld, idx) => (
                <MeldGroup key={idx}>
                  {meld.tiles.map((tile) => (
                    <TileView
                      key={tile.id}
                      tile={tile}
                      jokerTile={jokerTile}
                      small
                      disabled
                      highlight={tile.id === meld.claimedTileId}
                    />
                  ))}
                </MeldGroup>
              ))}
            </MeldArea>
          )}
        </MeldRow>

        <HandArea>
          {showHand ? (
            <>
              {sortTiles(player.hand).map((tile) => (
                <TileView
                  key={tile.id}
                  tile={tile}
                  jokerTile={jokerTile}
                  selected={selectedTile?.id === tile.id}
                  small={useSmallTiles}
                  onClick={onTileClick}
                />
              ))}
              {player.lastDrawnTile && (
                <TileView
                  key={player.lastDrawnTile.id}
                  tile={player.lastDrawnTile}
                  jokerTile={jokerTile}
                  selected={selectedTile?.id === player.lastDrawnTile.id}
                  small={useSmallTiles}
                  onClick={onTileClick}
                  style={{ marginLeft: '1rem' }}
                />
              )}
            </>
          ) : (
            <>
              {player.hand.map((_, idx) => <TileBackView key={idx} small={useSmallTiles} />)}
              {player.lastDrawnTile && <TileBackView key="last" small={useSmallTiles} style={{ marginLeft: '1rem' }} />}
            </>
          )}
        </HandArea>
      </PlayerTiles>
    </PlayerSection>
  );
});

// ============================================================
// 弃牌区
// ============================================================

interface DiscardPoolProps {
  player: Player;
  jokerTile: Tile | null;
  lastDiscarded?: Tile | null;
}

export const DiscardPoolView = memo(function DiscardPoolView({
  player, jokerTile,
}: DiscardPoolProps) {
  if (player.discards.length === 0) return null;
  return (
    <DiscardArea>
      {player.discards.map((tile) => (
        <TileView
          key={tile.id}
          tile={tile}
          jokerTile={jokerTile}
          small
          disabled
        />
      ))}
    </DiscardArea>
  );
});

// ============================================================
// 操作按钮栏
// ============================================================

interface ActionBarProps {
  actions: ActionType[];
  onAction: (action: ActionType) => void;
}

const ACTION_LABELS: Partial<Record<ActionType, { label: string; variant: 'primary' | 'danger' | 'default' }>> = {
  [ActionType.Win]: { label: '胡', variant: 'danger' },
  [ActionType.RobKong]: { label: '抢杠胡', variant: 'danger' },
  [ActionType.Pong]: { label: '碰', variant: 'primary' },
  [ActionType.Kong]: { label: '杠', variant: 'primary' },
  [ActionType.Chow]: { label: '吃', variant: 'primary' },
  [ActionType.ConcealedKong]: { label: '暗杠', variant: 'primary' },
  [ActionType.AddedKong]: { label: '补杠', variant: 'primary' },
  [ActionType.Discard]: { label: '出牌', variant: 'primary' },
  [ActionType.Pass]: { label: '跳过', variant: 'default' },
};

export const ActionBarView = memo(function ActionBarView({ actions, onAction }: ActionBarProps) {
  return (
    <ActionBar>
      {actions.map((action) => {
        const config = ACTION_LABELS[action];
        if (!config) return null;
        return (
          <ActionButton
            key={action}
            $variant={config.variant}
            onClick={() => onAction(action)}
          >
            {config.label}
          </ActionButton>
        );
      })}
    </ActionBar>
  );
});

// ============================================================
// 结算面板
// ============================================================

interface SettlementPanelProps {
  state: GameState;
  winResult: WinResult;
  onViewTable: () => void;
  onContinue: () => void;
  onExit: () => void;
}

export const SettlementPanel = memo(function SettlementPanel({
  state, winResult, onViewTable, onContinue, onExit,
}: SettlementPanelProps) {
  const winner = state.players[winResult.winnerIndex];

  return (
    <SettlementOverlay>
      <SettlementCard>
        <SettlementTitle>{winner.name} 胡牌！</SettlementTitle>
        {winResult.scoreDetail.details.map((detail, idx) => (
          <SettlementDetail key={idx}>• {detail}</SettlementDetail>
        ))}
        <SettlementTotal>总计: {winResult.scoreDetail.finalTotal} 台</SettlementTotal>
        <Divider />
        {winResult.settlements.map((score, idx) => (
          <SettlementItem key={idx}>
            <span>{state.players[idx].name}</span>
            <span style={{ color: score >= 0 ? '#2e7d32' : '#d32f2f', fontWeight: 700 }}>
              {score >= 0 ? '+' : ''}{score} 台
            </span>
          </SettlementItem>
        ))}
        <SettlementActions>
          <SettlementButton onClick={onViewTable}>查看牌桌</SettlementButton>
          <SettlementButton $variant="primary" onClick={onContinue}>继续</SettlementButton>
          <SettlementButton onClick={onExit}>退出</SettlementButton>
        </SettlementActions>
      </SettlementCard>
    </SettlementOverlay>
  );
});

// ============================================================
// 流局面板
// ============================================================

interface DrawGamePanelProps {
  state: GameState;
  onViewTable: () => void;
  onContinue: () => void;
  onExit: () => void;
}

export const DrawGamePanel = memo(function DrawGamePanel({
  state, onViewTable, onContinue, onExit,
}: DrawGamePanelProps) {
  return (
    <SettlementOverlay>
      <SettlementCard>
        <SettlementTitle>荒庄流局</SettlementTitle>
        <SettlementDetail>牌山已空，本局无人胡牌</SettlementDetail>
        <Divider />
        {state.players.map((player, idx) => (
          <SettlementItem key={idx}>
            <span>{player.name}</span>
            <span style={{ color: '#78909c', fontWeight: 700 }}>0 台</span>
          </SettlementItem>
        ))}
        <SettlementActions>
          <SettlementButton onClick={onViewTable}>查看牌桌</SettlementButton>
          <SettlementButton $variant="primary" onClick={onContinue}>继续</SettlementButton>
          <SettlementButton onClick={onExit}>退出</SettlementButton>
        </SettlementActions>
      </SettlementCard>
    </SettlementOverlay>
  );
});

// ============================================================
// 导出样式组件
// ============================================================

export {
  GameBoard, InfoBar, Divider, MessageBox, ScoreBoard,
  JokerBadge, ActionBar as ActionBarContainer,
};
