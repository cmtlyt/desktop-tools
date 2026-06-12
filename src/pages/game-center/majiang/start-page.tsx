import { memo } from 'react';
import styled from 'styled-components';

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
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  color: #fff;
  margin: 0;
  padding: 4px 0;
  font-size: 14px;
  opacity: 0.8;
`;

const StartButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 32px;
  border-radius: 8px;
  border: none;
  background: linear-gradient(135deg, #fdd835, #f9a825);
  color: #1b5e20;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.04);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const RulesSection = styled.div`
  width: 100%;
  max-width: 900px;
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
`;

const RulesTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 0.8rem;
`;

const RulesContent = styled.div`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
`;

const RuleItem = styled.div`
  margin-bottom: 1rem;
  padding-left: 1rem;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #fdd835;
    font-weight: bold;
  }
`;

const RuleSubtitle = styled.div`
  font-weight: 600;
  color: #fdd835;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;

// ============================================================
// 开始页面组件（静态）
// ============================================================

interface StartPageProps {
  onStartGame: () => void;
}

export const StartPage = memo(function StartPage({ onStartGame }: StartPageProps) {
  return (
    <PageWrapper>
      <Title>🀄 乐清麻将</Title>
      <StartButton onClick={onStartGame}>开始游戏</StartButton>

      <RulesSection>
        <RulesTitle>📖 乐清麻将规则</RulesTitle>
        <RulesContent>
          <RuleSubtitle>基础设定</RuleSubtitle>
          <RuleItem>4人对战，使用136张标准麻将牌（筒、条、万、东南西北中发白）</RuleItem>
          <RuleItem>胡牌条件：n组面子（顺子/刻子/碰/杠）+ 1对将牌</RuleItem>
          <RuleItem>七对禁止胡牌</RuleItem>
          <RuleItem>吃牌仅限上家，碰牌不限任意玩家</RuleItem>

          <RuleSubtitle>花牌规则</RuleSubtitle>
          <RuleItem>
            <strong>红中、白板</strong>为固定花牌，摸到必须立刻杠牌补牌
          </RuleItem>
          <RuleItem>若红中/白板为本局财神，则由发财替代充当花牌</RuleItem>

          <RuleSubtitle>财神规则</RuleSubtitle>
          <RuleItem>全员摸完手牌后，从牌山末尾取一张为本局财神</RuleItem>
          <RuleItem>财神取出后不回归牌山，本局最多流通3张财神</RuleItem>
          <RuleItem>财神归位仅全顺子牌型生效，带刻子、碰牌不判定归位</RuleItem>
          <RuleItem>
            <strong>核心铁规</strong>：手牌只要带财神，一律为软牌
          </RuleItem>

          <RuleSubtitle>开局摸牌</RuleSubtitle>
          <RuleItem>庄家先掷骰子，指向的玩家再掷第二次</RuleItem>
          <RuleItem>两次点数相加，从第一次指向玩家的牌山左侧向右数对应对数</RuleItem>
          <RuleItem>庄家从下一对开始摸牌，每次摸2对（4张）</RuleItem>
          <RuleItem>四家各摸满8对（16张），庄家额外多摸1张：庄家17张、闲家16张</RuleItem>
          <RuleItem>所有杠牌、花牌补杠，统一从牌山末尾补牌</RuleItem>

          <RuleSubtitle>吃碰杠规则</RuleSubtitle>
          <RuleItem>
            <strong>吃牌</strong>：仅限上家打出的牌
          </RuleItem>
          <RuleItem>
            <strong>碰牌</strong>：所有玩家打出均可碰
          </RuleItem>
          <RuleItem>
            <strong>普通杠</strong>：不计台数
          </RuleItem>
          <RuleItem>支持抢杠胡、杠上开花（均单独加台）</RuleItem>

          <RuleSubtitle>流局规则</RuleSubtitle>
          <RuleItem>牌山剩余8对牌时，直接荒庄流局</RuleItem>

          <RuleSubtitle>庄家连庄</RuleSubtitle>
          <RuleItem>庄家输牌，下家接任庄家</RuleItem>
          <RuleItem>连庄无次数上限，连庄台数持续累积叠加，底分不翻倍</RuleItem>
          <RuleItem>结算无自摸、点炮区别：庄家对三家闲家台数统一一致</RuleItem>

          <RuleSubtitle>软硬牌判定</RuleSubtitle>
          <RuleItem>
            <strong>硬牌（基础1台）</strong>：手牌无财神即为硬牌
          </RuleItem>
          <RuleItem>
            <strong>软牌（基础0.5台）</strong>：只要手牌带有财神，全部判定为软牌
          </RuleItem>
          <RuleItem>财神归位不纳入硬牌判定</RuleItem>

          <RuleSubtitle>基础台数</RuleSubtitle>
          <RuleItem>基础硬牌：1台 | 基础软牌：0.5台</RuleItem>
          <RuleItem>碰碰胡：有财神3台 / 无财神4台</RuleItem>
          <RuleItem>混一色：3台 | 清一色：4台</RuleItem>

          <RuleSubtitle>通用加台（可累加）</RuleSubtitle>
          <RuleItem>单张花牌：+1台/张 | 杠上开花：+1台 | 抢杠胡：+1台</RuleItem>
          <RuleItem>自家风位碰/刻/杠：+1台 | 发财碰/刻/杠：+1台</RuleItem>

          <RuleSubtitle>财神专属加台</RuleSubtitle>
          <RuleItem>双财神：+1台 | 财神归位：+1台（仅限全顺子）</RuleItem>
          <RuleItem>双财神归位：+6台 | 三财神归位：+50台</RuleItem>
          <RuleItem>双财神做将：+6台 | 三财神做刻：+15台</RuleItem>

          <RuleSubtitle>终极结算规则</RuleSubtitle>
          <RuleItem>
            <strong>小数补整</strong>：0.5台直接进1补整为1台
          </RuleItem>
          <RuleItem>
            <strong>庄家加成</strong>：庄家胡牌，总台数额外+1台
          </RuleItem>
          <RuleItem>
            <strong>闲家胡牌</strong>：闲家胡牌自身台数+1台；仅与庄家抵扣台数差，其余闲家正常输庄家、输胡牌闲家
          </RuleItem>
          <RuleItem>
            <strong>高台翻倍</strong>：总台数≥6台，整体台数直接翻倍（如7台→结算14台）
          </RuleItem>
        </RulesContent>
      </RulesSection>
    </PageWrapper>
  );
});
