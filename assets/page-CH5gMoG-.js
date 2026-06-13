import{r as T,j as i}from"./index-BQk0NrRP.js";import{d as w,l as H,m as un,b as he}from"./button-BDYDdio0.js";import{S as Me}from"./index-B4g9YTQJ.js";const hn=w.div`
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
`,xn=w.h2`
  text-align: center;
  color: #fff;
  margin: 0;
  padding: 4px 0;
  font-size: 14px;
  opacity: 0.8;
`,pn=w.button`
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
`,gn=w.div`
  width: 100%;
  max-width: 900px;
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
`,mn=w.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 0.8rem;
`,yn=w.div`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
`,$=w.div`
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
`,R=w.div`
  font-weight: 600;
  color: #fdd835;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`,jn=T.memo(function({onStartGame:n}){return i.jsxs(hn,{children:[i.jsx(xn,{children:"🀄 乐清麻将"}),i.jsx(pn,{onClick:n,children:"开始游戏"}),i.jsxs(gn,{children:[i.jsx(mn,{children:"📖 乐清麻将规则"}),i.jsxs(yn,{children:[i.jsx(R,{children:"基础设定"}),i.jsx($,{children:"4人对战，使用136张标准麻将牌（筒、条、万、东南西北中发白）"}),i.jsx($,{children:"胡牌条件：n组面子（顺子/刻子/碰/杠）+ 1对将牌"}),i.jsx($,{children:"七对禁止胡牌"}),i.jsx($,{children:"吃牌仅限上家，碰牌不限任意玩家"}),i.jsx(R,{children:"花牌规则"}),i.jsxs($,{children:[i.jsx("strong",{children:"红中、白板"}),"为固定花牌，摸到必须立刻杠牌补牌"]}),i.jsx($,{children:"若红中/白板为本局财神，则由发财替代充当花牌"}),i.jsx(R,{children:"财神规则"}),i.jsx($,{children:"全员摸完手牌后，从牌山末尾取一张为本局财神"}),i.jsx($,{children:"财神取出后不回归牌山，本局最多流通3张财神"}),i.jsx($,{children:"财神归位仅全顺子牌型生效，带刻子、碰牌不判定归位"}),i.jsxs($,{children:[i.jsx("strong",{children:"核心铁规"}),"：手牌只要带财神，一律为软牌"]}),i.jsx(R,{children:"开局摸牌"}),i.jsx($,{children:"庄家先掷骰子，指向的玩家再掷第二次"}),i.jsx($,{children:"两次点数相加，从第一次指向玩家的牌山左侧向右数对应对数"}),i.jsx($,{children:"庄家从下一对开始摸牌，每次摸2对（4张）"}),i.jsx($,{children:"四家各摸满8对（16张），庄家额外多摸1张：庄家17张、闲家16张"}),i.jsx($,{children:"所有杠牌、花牌补杠，统一从牌山末尾补牌"}),i.jsx(R,{children:"吃碰杠规则"}),i.jsxs($,{children:[i.jsx("strong",{children:"吃牌"}),"：仅限上家打出的牌"]}),i.jsxs($,{children:[i.jsx("strong",{children:"碰牌"}),"：所有玩家打出均可碰"]}),i.jsxs($,{children:[i.jsx("strong",{children:"普通杠"}),"：不计台数"]}),i.jsx($,{children:"支持抢杠胡、杠上开花（均单独加台）"}),i.jsx(R,{children:"流局规则"}),i.jsx($,{children:"牌山剩余8对牌时，直接荒庄流局"}),i.jsx(R,{children:"庄家连庄"}),i.jsx($,{children:"庄家输牌，下家接任庄家"}),i.jsx($,{children:"连庄无次数上限，连庄台数持续累积叠加，底分不翻倍"}),i.jsx($,{children:"结算无自摸、点炮区别：庄家对三家闲家台数统一一致"}),i.jsx(R,{children:"软硬牌判定"}),i.jsxs($,{children:[i.jsx("strong",{children:"硬牌（基础1台）"}),"：手牌无财神即为硬牌"]}),i.jsxs($,{children:[i.jsx("strong",{children:"软牌（基础0.5台）"}),"：只要手牌带有财神，全部判定为软牌"]}),i.jsx($,{children:"财神归位不纳入硬牌判定"}),i.jsx(R,{children:"基础台数"}),i.jsx($,{children:"基础硬牌：1台 | 基础软牌：0.5台"}),i.jsx($,{children:"碰碰胡：有财神3台 / 无财神4台"}),i.jsx($,{children:"混一色：3台 | 清一色：4台"}),i.jsx(R,{children:"通用加台（可累加）"}),i.jsx($,{children:"单张花牌：+1台/张 | 杠上开花：+1台 | 抢杠胡：+1台"}),i.jsx($,{children:"自家风位碰/刻/杠：+1台 | 发财碰/刻/杠：+1台"}),i.jsx(R,{children:"财神专属加台"}),i.jsx($,{children:"双财神：+1台 | 财神归位：+1台（仅限全顺子）"}),i.jsx($,{children:"双财神归位：+6台 | 三财神归位：+50台"}),i.jsx($,{children:"双财神做将：+6台 | 三财神做刻：+15台"}),i.jsx(R,{children:"终极结算规则"}),i.jsxs($,{children:[i.jsx("strong",{children:"小数补整"}),"：0.5台直接进1补整为1台"]}),i.jsxs($,{children:[i.jsx("strong",{children:"庄家加成"}),"：庄家胡牌，总台数额外+1台"]}),i.jsxs($,{children:[i.jsx("strong",{children:"闲家胡牌"}),"：闲家胡牌自身台数+1台；仅与庄家抵扣台数差，其余闲家正常输庄家、输胡牌闲家"]}),i.jsxs($,{children:[i.jsx("strong",{children:"高台翻倍"}),"：总台数≥6台，整体台数直接翻倍（如7台→结算14台）"]})]})]})]})});var j=(e=>(e.Tong="tong",e.Tiao="tiao",e.Wan="wan",e.Feng="feng",e))(j||{}),B=(e=>(e.East="east",e.South="south",e.West="west",e.North="north",e))(B||{}),y=(e=>(e.East="dong",e.South="nan",e.West="xi",e.North="bei",e.Zhong="zhong",e.Fa="fa",e.Bai="bai",e))(y||{}),C=(e=>(e.Sequence="sequence",e.Triplet="triplet",e.Pong="pong",e.ExposedKong="exposed_kong",e.ConcealedKong="concealed_kong",e.AddedKong="added_kong",e))(C||{}),m=(e=>(e.Draw="draw",e.Discard="discard",e.Chow="chow",e.Pong="pong",e.Kong="kong",e.ConcealedKong="concealed_kong",e.AddedKong="added_kong",e.Win="win",e.RobKong="rob_kong",e.Pass="pass",e.FlowerKong="flower_kong",e))(m||{});const bn={[B.East]:y.East,[B.South]:y.South,[B.West]:y.West,[B.North]:y.North};function wn(e,n){return e.suit===n.suit&&e.value===n.value}function xe(e,n){return n?wn(e,n):!1}function Be(e,n){return[...e.melds.flatMap(r=>r.tiles),...n.melds.flatMap(r=>r.tiles),...n.pair]}function kn(e){return[...e.player.melds,...e.decomposition.melds].every(r=>r.type!==C.Sequence)}function Tn(e){const n=Be(e.player,e.decomposition),r=new Set(n.filter(l=>l.suit!==j.Feng).map(l=>l.suit)),o=n.some(l=>l.suit===j.Feng);return r.size===1&&o}function vn(e){const n=Be(e.player,e.decomposition),r=new Set(n.map(o=>o.suit));return r.size===1&&!r.has(j.Feng)}function Oe(e){return[...e.player.melds,...e.decomposition.melds]}function $n(e){const n=bn[e.player.wind];return Oe(e).filter(r=>r.type!==C.Sequence&&r.tiles.length>0&&r.tiles[0].suit===j.Feng&&r.tiles[0].value===n).length}function Sn(e){return Oe(e).filter(n=>n.type!==C.Sequence&&n.tiles.length>0&&n.tiles[0].suit===j.Feng&&n.tiles[0].value===y.Fa).length}function Cn(e){const n=e.player.hand.filter(l=>xe(l,e.jokerTile)).length,o=e.decomposition.isAllSequence&&e.player.melds.every(l=>l.type===C.Sequence)?n:0;return n>=3?(e.decomposition.melds.some(s=>s.type===C.Triplet&&s.tiles.length<=0)||n>=3?15:0)+(o>=3?50:0):n===2?1+(e.decomposition.pair.filter(s=>xe(s,e.jokerTile)).length===2||e.decomposition.pair.length===0&&n>=2?6:0)+(o>=2?6:0):n===1&&o>=1?1:0}function Dn(e){const n=[],r=e.player.hand.filter(s=>xe(s,e.jokerTile)).length,l=e.decomposition.isAllSequence&&e.player.melds.every(s=>s.type===C.Sequence)?r:0;return r>=3?((e.decomposition.melds.some(t=>t.type===C.Triplet&&t.tiles.length<=0)||r>=3)&&n.push("三财神做刻: +15台"),l>=3&&n.push("三财神归位: +50台")):r===2?(n.push("双财神: +1台"),(e.decomposition.pair.filter(t=>xe(t,e.jokerTile)).length===2||e.decomposition.pair.length===0&&r>=2)&&n.push("双财神做将: +6台"),l>=2&&n.push("双财神归位: +6台")):r===1&&l>=1&&n.push("财神归位: +1台"),n}const Le=[{id:"pure_onesuit",name:"清一色",priority:100,group:"base_pattern",detect:e=>vn(e)?e.isHard?4:3:0},{id:"pong_pong",name:"碰碰胡",priority:90,group:"base_pattern",detect:e=>kn(e)?e.isHard?4:3:0},{id:"mixed_onesuit",name:"混一色",priority:80,group:"base_pattern",detect:e=>Tn(e)?e.isHard?3:2:0},{id:"regular_hand",name:"普通牌",priority:10,group:"base_pattern",detect:e=>e.isHard?1:.5},{id:"flower",name:"花牌",priority:70,group:"bonus",detect:e=>e.player.flowers.length},{id:"kong_bloom",name:"杠上开花",priority:60,group:"bonus",detect:e=>e.state.isKongBloom?1:0},{id:"rob_kong",name:"抢杠胡",priority:55,group:"bonus",detect:e=>e.isRobKong?1:0},{id:"wind",name:"风位",priority:50,group:"bonus",detect:$n},{id:"fa",name:"发财",priority:45,group:"bonus",detect:Sn},{id:"joker",name:"财神",priority:40,group:"joker",detect:Cn,describe:Dn},{id:"dealer_streak",name:"连庄",priority:30,group:"bonus",detect:e=>e.state.dealerStreakCount},{id:"dealer_bonus",name:"庄闲加成",priority:20,group:"bonus",detect:()=>1,describe:e=>[e.player.isDealer?"庄家胡: +1台":"闲家胡: +1台"]}];Le.sort((e,n)=>n.priority-e.priority);function In(e){return e.sort((n,r)=>r.priority-n.priority),e}function Pn(e){return e.suit===j.Feng?{[y.East]:27,[y.South]:28,[y.West]:29,[y.North]:30,[y.Zhong]:31,[y.Fa]:32,[y.Bai]:33}[e.value]??-1:(e.suit===j.Wan?0:e.suit===j.Tiao?9:18)+e.value-1}function we(e,n){let r=!1;if(e>=1e4&&(r=!0,e=e-1e4),e>=27){const a=[y.East,y.South,y.West,y.North,y.Zhong,y.Fa,y.Bai][e-27],f={[y.East]:"东",[y.South]:"南",[y.West]:"西",[y.North]:"北",[y.Zhong]:"红中",[y.Fa]:"发财",[y.Bai]:"白板"};return{id:n,suit:j.Feng,value:a,label:f[a]}}const o=e<9?j.Wan:e<18?j.Tiao:j.Tong,l=e%9+1,s={[j.Wan]:["","一万","二万","三万","四万","五万","六万","七万","八万","九万"],[j.Tiao]:["","一条","二条","三条","四条","五条","六条","七条","八条","九条"],[j.Tong]:["","一筒","二筒","三筒","四筒","五筒","六筒","七筒","八筒","九筒"],[j.Feng]:[]};return{id:n,suit:o,value:l,jokerMock:r,label:s[o][l]}}function ye(e,n){const r=new Array(34).fill(0);let o=0;for(const l of e)if(F(l,n))o++;else{const s=Pn(l);s>=0&&r[s]++}return{counts:r,wildCount:o}}function ee(e,n,r=!0){let o=0;for(;o<34&&e[o]===0;)o++;if(o===34)return n<=0&&!r;let l=0;for(let t=o;t<34;t++)l+=e[t];const s=n*3+(r?2:0);if(l<s||r&&(l-2)%3!==0||!r&&l%3!==0)return!1;if(r&&e[o]>=2){if(e[o]-=2,ee(e,n,!1))return e[o]+=2,!0;e[o]+=2}if(e[o]>=3){if(e[o]-=3,ee(e,n-1,r))return e[o]+=3,!0;e[o]+=3}if(o<27&&o%9<=6&&e[o+1]>=1&&e[o+2]>=1){if(e[o]--,e[o+1]--,e[o+2]--,ee(e,n-1,r))return e[o]++,e[o+1]++,e[o+2]++,!0;e[o]++,e[o+1]++,e[o+2]++}return!1}function*je(e,n){if(n===0){yield[];return}for(let r=0;r<e.length;r++)for(const o of je(e.slice(r),n-1))yield[e[r],...o]}function ze(e){const n=new Set;for(let r=0;r<34;r++)e[r]>0&&(n.add(r),r<27&&(r%9>0&&n.add(r-1),r%9<8&&n.add(r+1),r%9>1&&n.add(r-2),r%9<7&&n.add(r+2)));return Array.from(n).sort((r,o)=>r-o)}function He(e,n,r){let o=n;for(let s=0;s<34;s++)o+=e[s];if(o<r*3+2||(o-2)%3!==0)return!1;if(n===0)return ee(e.slice(),r);const l=ze(e);for(const s of je(l,n)){const t=e.slice();for(const a of s)t[a]++;if(ee(t,r))return!0}return!1}function ke(e,n){return e.map(r=>{const o=n.indexOf(r);return~o?(n.splice(o,1),1e4+r):r})}function ne(e,n,r,o,l,s){let t=0;for(;t<34&&e[t]===0;)t++;if(t===34){if(!n){const a=r.every(u=>u.type===C.Sequence),f=o?ke(o,s).map((u,g)=>we(u,9e3+g)):[];l.push({melds:r.map(u=>({...u,tiles:ke(u.tiles,s).map((g,p)=>we(g,9e3+p))})),pair:f,isAllSequence:a})}return}n&&e[t]>=2&&(e[t]-=2,ne(e,!1,r,[t,t],l,s),e[t]+=2),e[t]>=3&&(e[t]-=3,r.push({type:C.Triplet,tiles:[t,t,t]}),ne(e,n,r,o,l,s),r.pop(),e[t]+=3),t<27&&t%9<=6&&e[t+1]>=1&&e[t+2]>=1&&(e[t]--,e[t+1]--,e[t+2]--,r.push({type:C.Sequence,tiles:[t,t+1,t+2]}),ne(e,n,r,o,l,s),r.pop(),e[t]++,e[t+1]++,e[t+2]++)}function _n(e,n){let r=n;for(let s=0;s<34;s++)r+=e[s];if((r-2)%3!==0)return[];if(n===0){const s=[];return ne(e.slice(),!0,[],null,s,[]),s}const o=ze(e),l=[];for(const s of je(o,n)){const t=e.slice();for(const a of s)t[a]++;ne(t,!0,[],null,l,s)}return l}function Wn(e,n,r){const{counts:o,wildCount:l}=ye(r||e.hand,n);return He(o,l,0)}function An(e,n,r){const o=[...e.hand,n],{counts:l,wildCount:s}=ye(o,r);return He(l,s,0)}function Rn(e,n,r){const o=[...e.hand,n],{counts:l,wildCount:s}=ye(o,r);return _n(l,s)}const En={[j.Tong]:["","一筒","二筒","三筒","四筒","五筒","六筒","七筒","八筒","九筒"],[j.Tiao]:["","一条","二条","三条","四条","五条","六条","七条","八条","九条"],[j.Wan]:["","一万","二万","三万","四万","五万","六万","七万","八万","九万"],[j.Feng]:[]},Ne={[y.East]:"东",[y.South]:"南",[y.West]:"西",[y.North]:"北",[y.Zhong]:"红中",[y.Fa]:"发财",[y.Bai]:"白板"},Kn=[B.East,B.South,B.West,B.North];function Fn(){const e=[];let n=0;const r=[j.Tong,j.Tiao,j.Wan];for(const l of r)for(let s=1;s<=9;s++)for(let t=0;t<4;t++)e.push({id:n++,suit:l,value:s,label:En[l][s]});const o=[y.East,y.South,y.West,y.North,y.Zhong,y.Fa,y.Bai];for(const l of o)for(let s=0;s<4;s++)e.push({id:n++,suit:j.Feng,value:l,label:Ne[l]});return e}function Mn(e){const n=[...e];for(let r=n.length-1;r>0;r--){const o=Math.floor(Math.random()*(r+1));[n[r],n[o]]=[n[o],n[r]]}return n}const Te=new Set([y.Zhong,y.Bai]);function re(e,n){if(e.suit!==j.Feng)return!1;const r=e.value;return n&&E(e,n)?!1:Te.has(r)?!0:n&&Te.has(n.value)?r===y.Fa:!1}function F(e,n){return n?E(e,n):!1}function E(e,n){return e.suit===n.suit&&e.value===n.value}const Bn={[j.Wan]:0,[j.Tong]:1,[j.Tiao]:2,[j.Feng]:3},On={[y.East]:0,[y.South]:1,[y.West]:2,[y.North]:3,[y.Zhong]:4,[y.Fa]:5,[y.Bai]:6};function ve(e){const n=Bn[e.suit]*100;return e.suit===j.Feng?n+On[e.value]:n+e.value}function te(e){return[...e].sort((n,r)=>ve(n)-ve(r))}function $e(){return[Math.ceil(Math.random()*6),Math.ceil(Math.random()*6)]}function Ln(e,n){const r=Mn(Fn()),o=$e(),l=$e(),s=o[0]+o[1]+l[0]+l[1],t=n===0&&e===0?Math.floor(Math.random()*4):e,a=Array.from({length:4},(g,p)=>{const b=(p-t+4)%4,v=Kn[b];return{index:p,name:p===0?"你":`电脑${p}`,hand:[],lastDrawnTile:null,melds:[],flowers:[],discards:[],wind:v,isAI:p!==0,isDealer:p===t}}),f=[...r];for(let g=0;g<4;g++)for(let p=0;p<4;p++){const b=(t+p)%4,v=f.splice(0,4);a[b].hand.push(...v)}a[t].hand.push(f.shift());const u=f.pop();for(const g of a)zn(g,f,u);for(const g of a)g.hand=te(g.hand);return{wall:f,players:a,discardPool:[],currentPlayerIndex:t,dealerIndex:t,jokerTile:u,dealerStreakCount:n,phase:"playing",pendingActions:[],lastDiscardedTile:null,lastDiscardPlayerIndex:-1,isKongBloom:!1,diceResult:[s,0]}}function zn(e,n,r){let o=!0;for(;o;){o=!1;for(let l=e.hand.length-1;l>=0;l--)re(e.hand[l],r)&&(e.flowers.push(e.hand.splice(l,1)[0]),n.length>0&&e.hand.push(n.pop()),o=!0)}}function Hn(e,n){if(e.wall.length<=16)return null;const r=e.wall.shift(),o=e.players[n];return re(r,e.jokerTile)?(o.flowers.push(r),Ge(e,n)):(o.lastDrawnTile=r,r)}function Nn(e,n){if(e.wall.length<=16)return null;const r=e.wall.pop(),o=e.players[n];return re(r,e.jokerTile)?(o.flowers.push(r),Ge(e,n)):(o.lastDrawnTile=r,r)}function Ge(e,n){const r=e.players[n];for(;e.wall.length>16;){const o=e.wall.pop();if(re(o,e.jokerTile)){r.flowers.push(o);continue}return r.lastDrawnTile=o,o}return null}function ce(e,n){var o;if(((o=e.lastDrawnTile)==null?void 0:o.id)===n.id){e.discards.push(n),e.lastDrawnTile=null;return}const r=e.hand.findIndex(l=>l.id===n.id);r!==-1&&(e.hand.splice(r,1),e.discards.push(n),e.lastDrawnTile&&(e.hand.push(e.lastDrawnTile),e.hand=te(e.hand),e.lastDrawnTile=null))}function Se(e,n,r){const l=e.hand.filter(s=>E(s,n)).slice(0,2);for(const s of l){const t=e.hand.findIndex(a=>a.id===s.id);t!==-1&&e.hand.splice(t,1)}e.melds.push({type:C.Pong,tiles:[...l,n],fromPlayer:r,claimedTileId:n.id})}function Ce(e,n,r,o){for(const s of r){const t=e.hand.findIndex(a=>a.id===s.id);t!==-1&&e.hand.splice(t,1)}const l=te([...r,n]);e.melds.push({type:C.Sequence,tiles:l,fromPlayer:o,claimedTileId:n.id})}function De(e,n,r,o){const s=e.hand.filter(a=>E(a,n)).slice(0,3);for(const a of s){const f=e.hand.findIndex(u=>u.id===a.id);f!==-1&&e.hand.splice(f,1)}if(e.melds.push({type:C.ExposedKong,tiles:[...s,n],fromPlayer:r,claimedTileId:n.id}),o.length<=16)return null;const t=o.pop();return e.hand.push(t),t}function Ie(e,n,r){const o=e.hand.filter(s=>E(s,n));if(o.length<4)return null;for(const s of o.slice(0,4)){const t=e.hand.findIndex(a=>a.id===s.id);t!==-1&&e.hand.splice(t,1)}if(e.melds.push({type:C.ConcealedKong,tiles:o.slice(0,4)}),r.length<=16)return null;const l=r.pop();return e.hand.push(l),l}function Pe(e,n,r){const o=e.melds.findIndex(a=>a.type===C.Pong&&E(a.tiles[0],n));if(o===-1)return null;const l=e.hand.findIndex(a=>E(a,n));if(l===-1)return null;const s=e.hand.splice(l,1)[0];if(e.melds[o].type=C.AddedKong,e.melds[o].tiles.push(s),r.length<=16)return null;const t=r.pop();return e.hand.push(t),t}function Gn(e,n,r){const o=[];for(let l=0;l<4;l++){if(l===r)continue;const s=e.players[l],t=[],a={};An(s,n,e.jokerTile)&&t.push(m.Win);const f=s.hand.filter(u=>E(u,n));if(f.length>=2&&t.push(m.Pong),f.length>=3&&t.push(m.Kong),l===(r+1)%4&&n.suit!==j.Feng){const u=qn(s,n,e);u.length>0&&(t.push(m.Chow),a[m.Chow]=u)}t.length>0&&o.push({playerIndex:l,actions:t,options:a,triggerTile:n})}return o}function U(e,n,r){const o=e.players[n],l=[],s=o.lastDrawnTile?[...o.hand,o.lastDrawnTile]:o.hand;Wn(o,e.jokerTile,s)&&l.push(m.Win);const t=Vn(s);for(const[,a]of t.entries())if(a>=4){l.push(m.ConcealedKong);break}for(const a of o.melds)if(a.type===C.Pong&&s.some(f=>E(f,a.tiles[0]))){l.push(m.AddedKong);break}return l}function qn(e,n,r){if(n.suit===j.Feng)return[];const o=n.value,l=e.hand.filter(v=>v.suit===n.suit&&typeof v.value=="number"&&!F(v,r.jokerTile)),s=[],t=l.find(v=>v.value===o+1),a=l.find(v=>v.value===o+2);t&&a&&s.push([t,a]);const f=l.find(v=>v.value===o-1),u=l.find(v=>v.value===o+1);f&&u&&s.push([f,u]);const g=l.find(v=>v.value===o-2),p=l.find(v=>v.value===o-1);g&&p&&s.push([g,p]);const b=new Set;return s.filter(v=>{const _=v.map(P=>`${P.suit}-${P.value}`).sort().join("|");return b.has(_)?!1:(b.add(_),!0)})}function Jn(e){return`${e.suit}-${e.value}`}function Vn(e){const n=new Map;for(const r of e){const o=Jn(r);n.set(o,(n.get(o)||0)+1)}return n}let Yn=In([...Le]);function Un(e,n,r){return n.describe?n.describe(e,r):n.id==="regular_hand"?[e.isHard?"硬牌: 1台":"软牌: 0.5台"]:n.id==="flower"?[`花牌x${r}: +${r}台`]:n.group==="base_pattern"?[`${n.name}: ${r}台`]:[`${n.name}: +${r}台`]}function Zn(e,n,r,o,l){var J,V,oe,se,le,ae,d,c,x;const s=e.players[n],t=e.jokerTile,f=s.hand.filter(h=>F(h,t)).length+r.pair.filter(h=>F(h,t)).length+r.melds.flatMap(h=>h.tiles).filter(h=>F(h,t)).length===0,u={player:s,decomposition:r,state:e,isHard:f,jokerTile:t,isRobKong:o,isSelfDraw:l},g=new Set,p=[];for(const h of Yn){if(h.group==="base_pattern"&&g.has(h.group))continue;const k=h.detect(u);k<=0||(p.push({id:h.id,name:h.name,tai:k,details:Un(u,h,k)}),h.group==="base_pattern"&&g.add(h.group))}const b=((J=p.find(h=>h.id==="regular_hand"))==null?void 0:J.tai)??0,v=p.filter(h=>["pure_onesuit","pong_pong","mixed_onesuit"].includes(h.id)).reduce((h,k)=>h+k.tai,0),_=((V=p.find(h=>h.id==="flower"))==null?void 0:V.tai)??0,P=((oe=p.find(h=>h.id==="kong_bloom"))==null?void 0:oe.tai)??0,I=((se=p.find(h=>h.id==="rob_kong"))==null?void 0:se.tai)??0,M=((le=p.find(h=>h.id==="wind"))==null?void 0:le.tai)??0,Q=((ae=p.find(h=>h.id==="fa"))==null?void 0:ae.tai)??0,L=((d=p.find(h=>h.id==="joker"))==null?void 0:d.tai)??0,W=((c=p.find(h=>h.id==="dealer_streak"))==null?void 0:c.tai)??0,q=((x=p.find(h=>h.id==="dealer_bonus"))==null?void 0:x.tai)??0,K=b+v+_+P+I+M+Q+L+W+q,A=Math.ceil(K),G=A>=6?A*2:A,ie=p.sort((h,k)=>k.tai-h.tai).flatMap(h=>h.details);return A>=6&&ie.push(`高台翻倍(${A}→${G})`),{baseTai:b,isHard:f,patternTai:v,flowerTai:_,kongBloomTai:P,robKongTai:I,windTai:M,faTai:Q,jokerTai:L,dealerStreakTai:W,dealerBonusTai:q,rawTotal:K,roundedTotal:A,finalTotal:G,details:ie}}function Qn(e,n,r,o){const l=[0,0,0,0],s=n===e.dealerIndex,t=o.finalTotal;if(s)for(let a=0;a<4;a++)a===n?l[a]=t*3:l[a]=-t;else{const a=e.dealerIndex;for(let f=0;f<4;f++)if(f!==n)if(f===a){const u=Math.max(t,0);l[f]=-u,l[n]+=u}else l[f]=-t,l[n]+=t}return l}function Xn(e){return e.wall.length<=16}function _e(e){return(e+1)%4}function X(e){if(e.suit===j.Feng)return Ne[e.value]||"?";const n={[j.Wan]:"万",[j.Tong]:"筒",[j.Tiao]:"条"}[e.suit]||"";return`${e.value}${n}`}const qe=[{id:"no_joker_discard",name:"财神不可打出",validate:(e,n,r)=>r.jokerTile?!F(e,r.jokerTile):!0,errorMessage:"财神不能打出"},{id:"no_chow_tile_discard",name:"吃牌后不可打出吃的那张牌",validate:(e,n,r)=>{const o=n.melds[n.melds.length-1];if(!o||o.type!==C.Sequence)return!0;if(o.claimedTileId!==void 0){const l=r.discardPool.find(s=>s.id===o.claimedTileId);if(l&&e.suit===l.suit&&e.value===l.value)return!1}return!0},errorMessage:"刚吃的牌不能立即打出"}];function Je(e,n,r,o){for(const l of o)if(!l.validate(e,n,r))return{valid:!1,message:l.errorMessage};return{valid:!0}}function pe(e,n){const r=te(e.hand),o=n.jokerTile,l=r.filter(t=>Je(t,e,n,qe).valid);if(l.length===0)return r[r.length-1];const s=l.map(t=>({tile:t,score:er(t,r,o)}));return s.sort((t,a)=>t.score-a.score),s[0].tile}function er(e,n,r){let o=0;const l=n.filter(t=>t.id!==e.id),s=l.filter(t=>E(t,e)).length;if(o+=s*20,e.suit!==j.Feng&&typeof e.value=="number"){const t=e.value,a=l.some(p=>p.suit===e.suit&&p.value===t-1),f=l.some(p=>p.suit===e.suit&&p.value===t+1),u=l.some(p=>p.suit===e.suit&&p.value===t-2),g=l.some(p=>p.suit===e.suit&&p.value===t+2);a&&f?o+=15:(a||f)&&(o+=10),u&&(o+=5),g&&(o+=5)}return F(e,r)&&(o+=100),e.suit===j.Feng&&s===0&&(o-=5),o}function We(e,n,r){return n.includes(m.Win)?m.Win:n.includes(m.RobKong)?m.RobKong:n.includes(m.ConcealedKong)?m.ConcealedKong:n.includes(m.AddedKong)?m.AddedKong:n.includes(m.Kong)?m.Kong:n.includes(m.Pong)?m.Pong:n.includes(m.Chow)&&Math.random()<.7?m.Chow:m.Pass}function nr(e){return e[0]||[]}function Ae(e,n){const r=new Map;for(const o of e.hand){if(F(o,n))continue;const l=`${o.suit}-${o.value}`,s=r.get(l);s?s.count++:r.set(l,{tile:o,count:1})}for(const[,o]of r)if(o.count>=4)return o.tile;return null}function Re(e){for(const n of e.melds)if(n.type===C.Pong){const r=e.hand.find(o=>E(o,n.tiles[0]));if(r)return r}return null}const rr={[j.Wan]:"#d32f2f",[j.Tong]:"#1565c0",[j.Tiao]:"#2e7d32",[j.Feng]:"#37474f"},me="#ff6f00";function tr(e,n){return F(e,n)?me:rr[e.suit]||"#333"}const be=36,Ve=50,Ye=28,Ue=38;function ir(e,n,r,o,l,s,t){if(e===1)return or(r,o,l,s,t);const a=sr(e,r,o,l,s,t),f=e<=4?4.2*l:3.8*l;return a.map((u,g)=>i.jsxs("g",{children:[i.jsx("circle",{cx:u.x,cy:u.y,r:f,fill:"none",stroke:n,strokeWidth:1.3*l}),i.jsx("circle",{cx:u.x,cy:u.y,r:f*.45,fill:n})]},g))}function or(e,n,r,o,l){const t=Math.min(o,l)*.35,a=t*.5,f=[];for(let u=0;u<8;u++){const g=u*360/8*Math.PI/180,p=e+Math.cos(g)*t*.65,b=n+Math.sin(g)*t*.65;f.push(i.jsx("ellipse",{cx:p,cy:b,rx:t*.28,ry:t*.16,fill:"#1565c0",transform:`rotate(${u*360/8} ${p} ${b})`},`petal-${u}`))}return[...f,i.jsx("circle",{cx:e,cy:n,r:t,fill:"none",stroke:"#1565c0",strokeWidth:1.5*r},"outer"),i.jsx("circle",{cx:e,cy:n,r:a,fill:"#1565c0"},"inner")]}function sr(e,n,r,o,l,s){const t=l*.8,a=s*.8;return({2:[{x:0,y:-a*.25},{x:0,y:a*.25}],3:[{x:t*.3,y:-a*.35},{x:0,y:0},{x:-t*.3,y:a*.35}],4:[{x:-t*.25,y:-a*.25},{x:t*.25,y:-a*.25},{x:-t*.25,y:a*.25},{x:t*.25,y:a*.25}],5:[{x:-t*.25,y:-a*.25},{x:t*.25,y:-a*.25},{x:0,y:0},{x:-t*.25,y:a*.25},{x:t*.25,y:a*.25}],6:[{x:-t*.25,y:-a*.35},{x:t*.25,y:-a*.35},{x:-t*.25,y:0},{x:t*.25,y:0},{x:-t*.25,y:a*.35},{x:t*.25,y:a*.35}],7:[{x:t*.35,y:-a*.35},{x:0,y:-a*.25},{x:-t*.35,y:-a*.15},{x:-t*.25,y:a*.15},{x:t*.25,y:a*.15},{x:-t*.25,y:a*.4},{x:t*.25,y:a*.4}],8:[{x:-t*.25,y:-a*.35},{x:t*.25,y:-a*.35},{x:-t*.25,y:-a*.12},{x:t*.25,y:-a*.12},{x:-t*.25,y:a*.12},{x:t*.25,y:a*.12},{x:-t*.25,y:a*.35},{x:t*.25,y:a*.35}],9:[{x:-t*.35,y:-a*.35},{x:0,y:-a*.35},{x:t*.35,y:-a*.35},{x:-t*.35,y:0},{x:0,y:0},{x:t*.35,y:0},{x:-t*.35,y:a*.35},{x:0,y:a*.35},{x:t*.35,y:a*.35}]}[e]||[]).map(u=>({x:n+u.x,y:r+u.y}))}function lr(e,n,r,o,l,s,t){if(e===1)return cr(r,o,l,s,t);if(e===8)return ar(n,r,o,l,s,t);const a=dr(e,r,o,l,s,t),f=2*l,u=9*l;return a.map((g,p)=>{const b=g.y-u/2,v=g.y,_=g.y+u/2;return i.jsxs("g",{children:[i.jsx("line",{x1:g.x,y1:b,x2:g.x,y2:_,stroke:n,strokeWidth:2.5*l,strokeLinecap:"round"}),i.jsx("circle",{cx:g.x,cy:b,r:f,fill:n}),i.jsx("circle",{cx:g.x,cy:v,r:f,fill:n}),i.jsx("circle",{cx:g.x,cy:_,r:f,fill:n})]},p)})}function ar(e,n,r,o,l,s){const t=l*.7,a=s*.7,f=2*o,u=v=>n-t/2+v/6*t,g=v=>r-a/2+v/5*a,p=[[[0,1],[1,1],[2,1]],[[0,5],[1,5],[2,5]],[[0,3],[1,2],[2,1]],[[0,3],[1,4],[2,5]],[[3,1],[4,1],[5,1]],[[3,5],[4,5],[5,5]],[[3,1],[4,2],[5,3]],[[3,5],[4,4],[5,3]]],b=[];return p.forEach((v,_)=>{const P=v.map(([I,M])=>({x:u(M),y:g(I)}));for(let I=0;I<P.length-1;I++)b.push(i.jsx("line",{x1:P[I].x,y1:P[I].y,x2:P[I+1].x,y2:P[I+1].y,stroke:e,strokeWidth:2.5*o,strokeLinecap:"round"},`line-${_}-${I}`));P.forEach((I,M)=>{b.push(i.jsx("circle",{cx:I.x,cy:I.y,r:f,fill:e},`node-${_}-${M}`))})}),b}function dr(e,n,r,o,l,s){const t=l*.8,a=s*.8;return({2:[{x:0,y:-a*.2},{x:0,y:a*.2}],3:[{x:0,y:-a*.25},{x:-t*.35,y:a*.25},{x:t*.35,y:a*.25}],4:[{x:-t*.25,y:-a*.2},{x:t*.25,y:-a*.2},{x:-t*.25,y:a*.2},{x:t*.25,y:a*.2}],5:[{x:-t*.25,y:-a*.3},{x:t*.25,y:-a*.3},{x:0,y:0},{x:-t*.25,y:a*.3},{x:t*.25,y:a*.3}],6:[{x:-t*.3,y:-a*.25},{x:0,y:-a*.25},{x:t*.3,y:-a*.25},{x:-t*.3,y:a*.25},{x:0,y:a*.25},{x:t*.3,y:a*.25}],7:[{x:0,y:-a*.35},{x:-t*.3,y:0},{x:0,y:0},{x:t*.3,y:0},{x:-t*.3,y:a*.35},{x:0,y:a*.35},{x:t*.3,y:a*.35}],8:[{x:-t*.35,y:-a*.3},{x:-t*.12,y:-a*.15},{x:t*.12,y:-a*.15},{x:t*.35,y:-a*.3},{x:-t*.35,y:a*.3},{x:-t*.12,y:a*.15},{x:t*.12,y:a*.15},{x:t*.35,y:a*.3}],9:[{x:-t*.35,y:-a*.35},{x:0,y:-a*.35},{x:t*.35,y:-a*.35},{x:-t*.35,y:0},{x:0,y:0},{x:t*.35,y:0},{x:-t*.35,y:a*.35},{x:0,y:a*.35},{x:t*.35,y:a*.35}]}[e]||[]).map(u=>({x:n+u.x,y:r+u.y}))}function cr(e,n,r,o,l){const s=Math.min(o,l)*.8;return[i.jsx("ellipse",{cx:e,cy:n+s*.15,rx:s*.3,ry:s*.35,fill:"#2e7d32"},"body"),i.jsx("circle",{cx:e,cy:n-s*.25,r:s*.18,fill:"#2e7d32"},"head"),i.jsx("path",{d:`M ${e-s*.1} ${n-s*.4} 
      Q ${e-s*.15} ${n-s*.55} ${e-s*.07} ${n-s*.5}
      Q ${e} ${n-s*.6} ${e+s*.07} ${n-s*.5}
      Q ${e+s*.15} ${n-s*.55} ${e+s*.1} ${n-s*.4} Z`,fill:"#d32f2f"},"comb"),i.jsx("circle",{cx:e+s*.06,cy:n-s*.28,r:s*.06,fill:"#fff"},"eye-white"),i.jsx("circle",{cx:e+s*.06,cy:n-s*.28,r:s*.03,fill:"#000"},"eye-black"),i.jsx("path",{d:`M ${e+s*.15} ${n-s*.25} 
      L ${e+s*.25} ${n-s*.22} 
      L ${e+s*.15} ${n-s*.19} Z`,fill:"#ff8f00"},"beak"),i.jsx("path",{d:`M ${e-s*.15} ${n+s*.35} 
      Q ${e-s*.35} ${n+s*.2} ${e-s*.28} ${n+s*.5}
      Q ${e-s*.2} ${n+s*.4} ${e-s*.15} ${n+s*.35} Z`,fill:"#1b5e20"},"tail"),i.jsx("line",{x1:e-s*.08,y1:n+s*.4,x2:e-s*.12,y2:n+s*.55,stroke:"#ff6f00",strokeWidth:s*.06},"leg1"),i.jsx("line",{x1:e+s*.08,y1:n+s*.4,x2:e+s*.12,y2:n+s*.55,stroke:"#ff6f00",strokeWidth:s*.06},"leg2")]}function fr(e,n,r,o,l,s){const t=["一","二","三","四","五","六","七","八","九"],a=s*.32;return[i.jsx("text",{x:n,y:r-s*.18,textAnchor:"middle",dominantBaseline:"middle",fontSize:a,fontWeight:700,fill:"#333",children:t[e-1]},"num"),i.jsx("text",{x:n,y:r+s*.22,textAnchor:"middle",dominantBaseline:"middle",fontSize:a,fontWeight:700,fill:"#d32f2f",children:"萬"},"wan")]}const ur={dong:{char:"東",color:"#333"},nan:{char:"南",color:"#333"},xi:{char:"西",color:"#333"},bei:{char:"北",color:"#333"},zhong:{char:"中",color:"#d32f2f"},fa:{char:"發",color:"#2e7d32"},bai:{char:"白",color:"#78909c"}};function hr(e,n,r,o,l){const s=o*.7,t=l*.7,a=s*.7,f=t*.7,u=Math.min(s,t)*.12;return[i.jsx("rect",{x:e-s/2,y:n-t/2,width:s,height:t,rx:2*r,fill:"none",stroke:"#78909c",strokeWidth:1.5*r},"outer"),i.jsx("rect",{x:e-a/2,y:n-f/2,width:a,height:f,rx:1.5*r,fill:"none",stroke:"#78909c",strokeWidth:1.2*r},"inner"),i.jsx("line",{x1:e-s/2,y1:n-t/2+u,x2:e-a/2,y2:n-f/2,stroke:"#78909c",strokeWidth:1*r},"tl1"),i.jsx("line",{x1:e-s/2+u,y1:n-t/2,x2:e-a/2,y2:n-f/2,stroke:"#78909c",strokeWidth:1*r},"tl2"),i.jsx("line",{x1:e+s/2,y1:n-t/2+u,x2:e+a/2,y2:n-f/2,stroke:"#78909c",strokeWidth:1*r},"tr1"),i.jsx("line",{x1:e+s/2-u,y1:n-t/2,x2:e+a/2,y2:n-f/2,stroke:"#78909c",strokeWidth:1*r},"tr2"),i.jsx("line",{x1:e-s/2,y1:n+t/2-u,x2:e-a/2,y2:n+f/2,stroke:"#78909c",strokeWidth:1*r},"bl1"),i.jsx("line",{x1:e-s/2+u,y1:n+t/2,x2:e-a/2,y2:n+f/2,stroke:"#78909c",strokeWidth:1*r},"bl2"),i.jsx("line",{x1:e+s/2,y1:n+t/2-u,x2:e+a/2,y2:n+f/2,stroke:"#78909c",strokeWidth:1*r},"br1"),i.jsx("line",{x1:e+s/2-u,y1:n+t/2,x2:e+a/2,y2:n+f/2,stroke:"#78909c",strokeWidth:1*r},"br2")]}function xr(e,n,r,o,l,s){const t=ur[e]||{char:"?",color:"#333"};if(e==="bai")return hr(n,r,o,l,s);const a=s*.45;return[i.jsx("text",{x:n,y:r,textAnchor:"middle",dominantBaseline:"middle",fontSize:a,fontWeight:800,fill:t.color,children:t.char},"char")]}function pr(e,n,r,o){const l=r/2,s=o/2,t=r/be,a=tr(e,n);let f=[];if(e.suit===j.Feng)f=xr(e.value,l,s,t,r,o);else{const u=e.value;switch(e.suit){case j.Tong:f=ir(u,a,l,s,t,r,o);break;case j.Tiao:f=lr(u,a,l,s,t,r,o);break;case j.Wan:f=fr(u,l,s,t,r,o);break}}return i.jsx(i.Fragment,{children:f})}const Ze="3.6rem",Qe="5rem",Xe="2.8rem",en="3.8rem",nn=un`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,gr=w.div`
  display: inline-flex;
  cursor: ${e=>e.$disabled?"default":"pointer"};
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
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.15) 100%);
    border-radius: 0 0 4px 4px;
    z-index: -2;
  }

  &::before {
    ${e=>e.$jokerMock&&'content: "";'}
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: coral;
    border-radius: 0.4rem;
    opacity: 0.3;
  }

  ${e=>e.$selected&&H`
      transform: translateY(-0.8rem);
      filter: drop-shadow(0 0.6rem 0.8rem rgba(251, 192, 45, 0.5));
    `}

  ${e=>e.$highlight&&H`
      filter: drop-shadow(0 0 0.6rem rgba(255, 143, 0, 0.75));

      svg rect:first-of-type {
        stroke: #ff8f00;
        stroke-width: 2;
      }
    `}

  &:hover {
    ${e=>!e.$disabled&&!e.$selected&&H`
        transform: translateY(-4px);
        filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.2));
      `}
  }

  &:active {
    ${e=>!e.$disabled&&H`
        transform: translateY(-1px) scale(0.98);
        transition: all 0.05s;
      `}
  }
`,mr=w.div`
  display: flex;
  gap: 0.2rem;
  flex-wrap: nowrap;
  align-items: flex-end;
  min-height: 5.6rem;
  overflow: visible;
`,yr=w.div`
  display: flex;
  gap: 0.4rem;
  align-items: flex-end;
  justify-content: center;
  min-height: 4.2rem;
`,jr=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`,Ee=w.div`
  display: flex;
  gap: 0.4rem;
  align-items: flex-end;
  flex-shrink: 0;
`,Ke=w.div`
  display: flex;
  gap: 0.1rem;
  padding: 0.2rem 0.4rem;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 0.4rem;
`,br={bottom:0,right:-90,top:180,left:90},wr=w.div`
  padding: 6px 8px;
  border-radius: 8px;
  background: ${e=>e.$isActive?"rgba(255,235,59,0.12)":"rgba(255,255,255,0.05)"};
  border: 1.5px solid ${e=>e.$isActive?"#fdd835":"transparent"};
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  transform: rotate(${e=>br[e.$position||"bottom"]}deg);
  transform-origin: center center;
  white-space: nowrap;
`,kr=w.div`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #37474f;
  display: flex;
  align-items: center;
  gap: 4px;

  ${e=>e.$isDealer&&H`
      &::after {
        content: '庄';
        font-size: 10px;
        background: #d32f2f;
        color: #fff;
        padding: 0 4px;
        border-radius: 3px;
      }
    `}
`,Tr=w.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: linear-gradient(135deg, #ff8f00, #ff6f00);
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
`,vr=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  max-width: 320px;
  min-height: 30px;
`,$r=w.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;
  animation: ${nn} 0.2s ease;
`,Sr=w.button`
  padding: 6px 16px;
  border-radius: 6px;
  border: none;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;

  ${e=>{switch(e.$variant){case"primary":return H`
          background: #1565c0;
          color: #fff;
          &:hover {
            background: #0d47a1;
          }
        `;case"danger":return H`
          background: #d32f2f;
          color: #fff;
          &:hover {
            background: #b71c1c;
          }
        `;default:return H`
          background: #eceff1;
          color: #37474f;
          &:hover {
            background: #cfd8dc;
          }
        `}}}
`;w.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  max-width: 680px;
  margin: 0 auto;
`;w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  background: #eceff1;
  border-radius: 6px;
  font-size: 12px;
  color: #546e7a;
`;const rn=w.hr`
  border: none;
  border-top: 1px dashed #cfd8dc;
  margin: 4px 0;
`,Cr=w.div`
  text-align: center;
  padding: 1.2rem 2rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, rgba(21, 101, 192, 0.9), rgba(13, 71, 161, 0.9));
  border: 0.2rem solid rgba(255, 255, 255, 0.3);
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 1.6rem rgba(0, 0, 0, 0.3);
  animation: ${nn} 0.4s ease;
  margin: 0.8rem 0;
`;w.div`
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
`;const tn=w.div`
  position: fixed;
  inset: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem;
  background: ${e=>e.$viewTable?"transparent":"rgba(0, 0, 0, 0.45)"};

  @media (max-width: 600px) {
    padding: 0;
  }
`,on=w.div`
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
`,sn=w.div`
  font-size: 2rem;
  font-weight: 800;
  color: #e65100;
  margin-bottom: 1.2rem;
`,ln=w.div`
  margin: 0.4rem 0;
  color: #4e342e;
`,Dr=w.div`
  margin-top: 1.2rem;
  font-size: 1.8rem;
  font-weight: 800;
  color: #d32f2f;
`,an=w.div`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
`,dn=w.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  margin-top: 1.6rem;
  flex-wrap: wrap;
`,N=w.button`
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  color: ${e=>e.$variant==="primary"?"#1b5e20":"#37474f"};
  background: ${e=>e.$variant==="primary"?"linear-gradient(135deg, #fdd835, #f9a825)":"#eceff1"};
`,O=T.memo(function({tile:n,jokerTile:r,selected:o,disabled:l,small:s,highlight:t,onClick:a,style:f}){const u=r?F(n,r):!1,g=s?Ye:be,p=s?Ue:Ve,b=o?"#fbc02d":u?me:"#d0d0d0",v=T.useCallback(()=>{!l&&a&&a(n)},[n,l,a]);return i.jsx(gr,{$jokerMock:n.jokerMock,$selected:o,$disabled:l,$small:s,$highlight:t||u,onClick:v,style:f,children:i.jsxs("svg",{width:s?Xe:Ze,height:s?en:Qe,viewBox:`0 0 ${g} ${p}`,children:[i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:`tileBg-${n.id}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[i.jsx("stop",{offset:"0%",stopColor:o?"#fffde7":"#ffffff"}),i.jsx("stop",{offset:"100%",stopColor:o?"#fff9c4":"#f5f0e0"})]}),i.jsxs("linearGradient",{id:`tileHighlight-${n.id}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[i.jsx("stop",{offset:"0%",stopColor:"#fff",stopOpacity:.9}),i.jsx("stop",{offset:"100%",stopColor:"#fff",stopOpacity:0})]}),i.jsxs("filter",{id:`tileShadow-${n.id}`,children:[i.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"0.5"}),i.jsx("feOffset",{dx:"0",dy:"1",result:"offsetblur"}),i.jsx("feComponentTransfer",{children:i.jsx("feFuncA",{type:"linear",slope:"0.3"})}),i.jsxs("feMerge",{children:[i.jsx("feMergeNode",{}),i.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),i.jsx("rect",{x:1,y:1,width:g-2,height:p-2,rx:4,ry:4,fill:`url(#tileBg-${n.id})`,stroke:b,strokeWidth:1}),i.jsx("rect",{x:2.5,y:2,width:g-5,height:p*.4,rx:3,ry:3,fill:`url(#tileHighlight-${n.id})`,opacity:.6}),i.jsx("rect",{x:1.5,y:p-3,width:g-3,height:2,rx:1,ry:1,fill:"#000",opacity:.15}),i.jsx("rect",{x:2,y:2,width:g-4,height:p-4,rx:3,ry:3,fill:"none",stroke:"#fff",strokeWidth:.5,opacity:.5}),u&&i.jsx("rect",{x:1.5,y:1.5,width:g-3,height:p-3,rx:3.5,ry:3.5,fill:"none",stroke:me,strokeWidth:1.2,opacity:.6}),pr(n,r??null,g,p)]})})}),Fe=T.memo(function({small:n,style:r}){const o=n?Ye:be,l=n?Ue:Ve,s=6;return i.jsx("div",{style:r,children:i.jsxs("svg",{width:n?Xe:Ze,height:n?en:Qe,viewBox:`0 0 ${o} ${l}`,children:[i.jsxs("defs",{children:[i.jsxs("pattern",{id:"backPattern",x:0,y:0,width:s,height:s,patternUnits:"userSpaceOnUse",children:[i.jsx("rect",{width:s,height:s,fill:"#0d47a1"}),i.jsx("circle",{cx:s/2,cy:s/2,r:1,fill:"#1565c0"})]}),i.jsxs("linearGradient",{id:"backGrad",x1:"0",y1:"0",x2:"1",y2:"1",children:[i.jsx("stop",{offset:"0%",stopColor:"#1976d2"}),i.jsx("stop",{offset:"100%",stopColor:"#0d47a1"})]})]}),i.jsx("rect",{x:.75,y:.75,width:o-1.5,height:l-1.5,rx:3,ry:3,fill:"url(#backGrad)",stroke:"#0d47a1",strokeWidth:1.5}),i.jsx("rect",{x:3,y:3,width:o-6,height:l-6,rx:1.5,ry:1.5,fill:"url(#backPattern)",opacity:.4}),i.jsx("rect",{x:3,y:3,width:o-6,height:l-6,rx:1.5,ry:1.5,fill:"none",stroke:"#64b5f6",strokeWidth:.5,opacity:.4})]})})}),fe=T.memo(function({player:n,jokerTile:r,isActive:o,selectedTile:l,onTileClick:s,showHand:t,position:a="bottom"}){const f={east:"东",south:"南",west:"西",north:"北"},u=a!=="bottom";return i.jsxs(wr,{$isActive:o,$position:a,children:[i.jsxs(kr,{$isDealer:n.isDealer,children:[n.name," (",f[n.wind],")"]}),i.jsxs(jr,{children:[i.jsxs(yr,{children:[n.flowers.length>0&&i.jsx(Ee,{children:i.jsx(Ke,{children:n.flowers.map(g=>i.jsx(O,{tile:g,jokerTile:r,small:!0,disabled:!0},g.id))})}),n.melds.length>0&&i.jsx(Ee,{children:n.melds.map((g,p)=>i.jsx(Ke,{children:g.tiles.map(b=>i.jsx(O,{tile:b,jokerTile:r,small:!0,disabled:!0,highlight:b.id===g.claimedTileId},b.id))},p))})]}),i.jsx(mr,{children:t?i.jsxs(i.Fragment,{children:[te(n.hand).map(g=>i.jsx(O,{tile:g,jokerTile:r,selected:(l==null?void 0:l.id)===g.id,small:u,onClick:s},g.id)),n.lastDrawnTile&&i.jsx(O,{tile:n.lastDrawnTile,jokerTile:r,selected:(l==null?void 0:l.id)===n.lastDrawnTile.id,small:u,onClick:s,style:{marginLeft:"1rem"}},n.lastDrawnTile.id)]}):i.jsxs(i.Fragment,{children:[n.hand.map((g,p)=>i.jsx(Fe,{small:u},p)),n.lastDrawnTile&&i.jsx(Fe,{small:u,style:{marginLeft:"1rem"}},"last")]})})]})]})});T.memo(function({player:n,jokerTile:r}){return n.discards.length===0?null:i.jsx(vr,{children:n.discards.map(o=>i.jsx(O,{tile:o,jokerTile:r,small:!0,disabled:!0},o.id))})});const Ir={[m.Win]:{label:"胡",variant:"danger"},[m.RobKong]:{label:"抢杠胡",variant:"danger"},[m.Pong]:{label:"碰",variant:"primary"},[m.Kong]:{label:"杠",variant:"primary"},[m.Chow]:{label:"吃",variant:"primary"},[m.ConcealedKong]:{label:"暗杠",variant:"primary"},[m.AddedKong]:{label:"补杠",variant:"primary"},[m.Discard]:{label:"出牌",variant:"primary"},[m.Pass]:{label:"跳过",variant:"default"}},Pr=T.memo(function({actions:n,onAction:r}){return i.jsx($r,{children:n.map(o=>{const l=Ir[o];return l?i.jsx(Sr,{$variant:l.variant,onClick:()=>r(o),children:l.label},o):null})})}),ge=T.memo(function({meld:n}){return i.jsx(he,{$gap:"0.2rem",children:n.tiles.map(r=>i.jsx(O,{tile:r,small:!0,disabled:!0}))})}),_r=T.memo(function(n){const{decomposition:r,player:o}=n,l=T.useMemo(()=>[{type:C.Triplet,tiles:o.flowers},...o.melds],[]);return i.jsxs(he,{$gap:"0.5rem",$direction:"column",children:[i.jsx(he,{$gap:"1rem",children:l.map((s,t)=>i.jsx(ge,{meld:s},t))}),i.jsxs(he,{$gap:"1rem",children:[r.melds.map((s,t)=>i.jsx(ge,{meld:s},t)),i.jsx(ge,{meld:{type:C.Triplet,tiles:r.pair}})]})]})}),Wr=T.memo(function({state:n,winResult:r,onContinue:o,onExit:l}){const[s,t]=T.useState(!1),a=n.players[r.winnerIndex];return i.jsx(tn,{$viewTable:s,children:i.jsx(Me,{when:s,fullback:i.jsxs(on,{children:[i.jsxs(sn,{children:[a.name," 胡牌！"]}),i.jsx(_r,{decomposition:r.decomposition,player:a}),r.scoreDetail.details.map((f,u)=>i.jsxs(ln,{children:["• ",f]},u)),i.jsxs(Dr,{children:["总计: ",r.scoreDetail.finalTotal," 台"]}),i.jsx(rn,{}),r.settlements.map((f,u)=>i.jsxs(an,{children:[i.jsx("span",{children:n.players[u].name}),i.jsxs("span",{style:{color:f>=0?"#2e7d32":"#d32f2f",fontWeight:700},children:[f>=0?"+":"",f," 台"]})]},u)),i.jsxs(dn,{children:[i.jsx(N,{onClick:()=>t(!0),children:"查看牌桌"}),i.jsx(N,{$variant:"primary",onClick:o,children:"继续"}),i.jsx(N,{onClick:l,children:"退出"})]})]}),children:()=>i.jsx(N,{onClick:()=>t(!1),children:"查看结算面板"})})})}),Ar=T.memo(function({state:n,onContinue:r,onExit:o}){const[l,s]=T.useState(!1);return i.jsx(tn,{$viewTable:l,children:i.jsx(Me,{when:l,fullback:i.jsxs(on,{children:[i.jsx(sn,{children:"荒庄流局"}),i.jsx(ln,{children:"牌山已空，本局无人胡牌"}),i.jsx(rn,{}),n.players.map((t,a)=>i.jsxs(an,{children:[i.jsx("span",{children:t.name}),i.jsx("span",{style:{color:"#78909c",fontWeight:700},children:"0 台"})]},a)),i.jsxs(dn,{children:[i.jsx(N,{onClick:()=>s(!0),children:"查看牌桌"}),i.jsx(N,{$variant:"primary",onClick:r,children:"继续"}),i.jsx(N,{onClick:o,children:"退出"})]})]}),children:()=>i.jsx(N,{onClick:()=>s(!1),children:"查看结算面板"})})})}),z=2e3;function ue(e,n){e.discardPool.push(n)}function Z(e,n){e.discardPool=e.discardPool.filter(r=>r.id!==n.id);for(const r of e.players)r.discards=r.discards.filter(o=>o.id!==n.id)}const Rr=w.div`
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
`,Er=w.div`
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
`,Kr=w.div`
  grid-area: top;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 4px 0;
  overflow: visible;
`,Fr=w.div`
  grid-area: bottom;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 0;
  overflow: visible;
`,Mr=w.div`
  grid-area: left;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
`,Br=w.div`
  grid-area: right;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
`,Or=w.div`
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
`,Lr=w.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
`,zr=w.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 4px 0;
`,Hr=w.div`
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
`,Nr=w.div`
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
`,Gr=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`;function qr({onExit:e}){const[n,r]=T.useState(null),[o,l]=T.useState(null),[s,t]=T.useState([]),[a,f]=T.useState([]),[u,g]=T.useState(!1),[p,b]=T.useState(""),[v,_]=T.useState(null),[P,I]=T.useState(0),[M,Q]=T.useState(0),L=T.useRef(n);L.current=n;const W=T.useRef();window.gameStateRef=L,T.useEffect(()=>()=>{W.current&&clearTimeout(W.current)},[]);const q=T.useCallback(()=>{const d=Ln(P,M);if(r(d),l(null),t([]),f([]),g(!1),_(null),b("游戏开始！"),d.players[d.dealerIndex].isAI)W.current=setTimeout(()=>A(d,d.dealerIndex),z);else{const c=U(d,d.dealerIndex);c.length>0&&t([...c,m.Pass])}},[P,M]);T.useEffect(()=>{q()},[]);const K=T.useCallback((d,c)=>{const x=d.players[c];let h=!0,k=!1;for(;h;){h=!1;for(let S=x.hand.length-1;S>=0;S--)if(re(x.hand[S],d.jokerTile)){if(x.flowers.push(x.hand.splice(S,1)[0]),!Nn(d,c))return k;h=!0,k=!0}}return k},[]),A=T.useCallback((d,c)=>{const x=d.players[c],h=U(d,c),k=We(x,h);if(k===m.Win){V(d,c,!0);return}if(k===m.ConcealedKong){const D=Ae(x,d.jokerTile);if(D&&Ie(x,D,d.wall)){K(d,c),d.isKongBloom=!0,r({...d}),W.current=setTimeout(()=>A(d,c),z);return}}if(k===m.AddedKong){const D=Re(x);if(D&&Pe(x,D,d.wall)){K(d,c),d.isKongBloom=!0,r({...d}),W.current=setTimeout(()=>A(d,c),z);return}}const S=pe(x,d);ce(x,S),ue(d,S),d.lastDiscardedTile=S,d.lastDiscardPlayerIndex=c,d.isKongBloom=!1,b(`${x.name} 打出 ${X(S)}`),r({...d}),setTimeout(()=>G(d,S,c),200)},[]),G=T.useCallback((d,c,x)=>{const h=Gn(d,c,x),k=h.find(D=>!d.players[D.playerIndex].isAI);if(k){const D=[...k.actions,m.Pass];t(D),k.options[m.Chow]&&f(k.options[m.Chow]);return}const S=h.find(D=>d.players[D.playerIndex].isAI);if(S){W.current=setTimeout(()=>{ie(d,S)},z);return}J(d,x)},[]),ie=T.useCallback((d,c)=>{const x=d.players[c.playerIndex],h=We(x,c.actions);if(h===m.Win||h===m.RobKong){V(d,c.playerIndex,!1);return}if(h===m.Kong){if(!De(x,c.triggerTile,d.lastDiscardPlayerIndex,d.wall)){d.phase="draw_game",b("荒庄流局！"),r({...d});return}Z(d,c.triggerTile),K(d,c.playerIndex),d.isKongBloom=!0,d.currentPlayerIndex=c.playerIndex,b(`${x.name} 杠！`),r({...d}),W.current=setTimeout(()=>A(d,c.playerIndex),z);return}if(h===m.Pong){Se(x,c.triggerTile,d.lastDiscardPlayerIndex),Z(d,c.triggerTile),d.currentPlayerIndex=c.playerIndex,b(`${x.name} 碰！`),r({...d}),W.current=setTimeout(()=>{const k=pe(x,d);ce(x,k),ue(d,k),d.lastDiscardedTile=k,d.lastDiscardPlayerIndex=c.playerIndex,d.isKongBloom=!1,b(`${x.name} 打出 ${X(k)}`),r({...d}),G(d,k,c.playerIndex)},z);return}if(h===m.Chow){const k=c.options[m.Chow]||[],S=nr(k);if(S.length>0){Ce(x,c.triggerTile,S,d.lastDiscardPlayerIndex),Z(d,c.triggerTile),d.currentPlayerIndex=c.playerIndex,b(`${x.name} 吃！`),r({...d}),W.current=setTimeout(()=>{const D=pe(x,d);ce(x,D),ue(d,D),d.lastDiscardedTile=D,d.lastDiscardPlayerIndex=c.playerIndex,d.isKongBloom=!1,b(`${x.name} 打出 ${X(D)}`),r({...d}),G(d,D,c.playerIndex)},z);return}}J(d,d.lastDiscardPlayerIndex)},[]),J=T.useCallback((d,c)=>{const x=_e(c);if(Xn(d)){d.phase="draw_game",b("荒庄流局！"),r({...d});return}const h=Hn(d,x);if(!h){d.phase="draw_game",b("荒庄流局！"),r({...d});return}if(d.currentPlayerIndex=x,K(d,x),r({...d}),d.players[x].isAI)W.current=setTimeout(()=>A(d,x),z);else{b(`你摸了一张 ${X(h)}`);const k=U(d,x);k.length>0?t([...k,m.Pass]):t([])}},[]),V=T.useCallback((d,c,x)=>{const h=d.players[c],k=x?h.lastDrawnTile:d.lastDiscardedTile;if(!k){console.debug("ERROR: 无牌可胡！",h,d),b("ERROR: 无牌可胡！");return}const S=Rn(h,k,d.jokerTile);if(S.length===0)return;const{decomposition:D,scoreDetail:de}=S.map(Y=>({decomposition:Y,scoreDetail:Zn(d,c,Y,!1,x)})).sort((Y,fn)=>fn.scoreDetail.finalTotal-Y.scoreDetail.finalTotal)[0],cn=Qn(d,c,d.lastDiscardPlayerIndex,de);d.phase="win",r({...d}),t([]),b(`${h.name} ${x?"自摸":"胡牌"}！`),_({winnerIndex:c,loserIndex:d.lastDiscardPlayerIndex,scoreDetail:de,settlements:cn,decomposition:D}),c===d.dealerIndex?Q(Y=>Y+1):(Q(0),I(_e(d.dealerIndex)))},[]),oe=T.useCallback(d=>{const c=L.current;if(!c)return;const x=0,h=c.players[x];switch(d){case m.Win:{V(c,x,c.currentPlayerIndex===x);break}case m.Pong:{if(!c.lastDiscardedTile)break;Se(h,c.lastDiscardedTile,c.lastDiscardPlayerIndex),Z(c,c.lastDiscardedTile),c.currentPlayerIndex=x,b("你碰了！请出牌"),t([]),r({...c});break}case m.Kong:{if(!c.lastDiscardedTile)break;De(h,c.lastDiscardedTile,c.lastDiscardPlayerIndex,c.wall),Z(c,c.lastDiscardedTile),K(c,x),c.currentPlayerIndex=x,c.isKongBloom=!0,b("你杠了！"),t([]),r({...c});const k=U(c,x);k.length>0&&t([...k,m.Pass]);break}case m.Chow:{g(!0);break}case m.ConcealedKong:{const k=Ae(h,c.jokerTile);if(k){Ie(h,k,c.wall),K(c,x),c.isKongBloom=!0,b("你暗杠了！"),t([]),r({...c});const S=U(c,x);S.length>0&&t([...S,m.Pass])}break}case m.AddedKong:{const k=Re(h);if(k){Pe(h,k,c.wall),K(c,x),c.isKongBloom=!0,b("你补杠了！"),t([]),r({...c});const S=U(c,x);S.length>0&&t([...S,m.Pass])}break}case m.Pass:{t([]),g(!1),c.lastDiscardedTile&&c.currentPlayerIndex!==x&&J(c,c.lastDiscardPlayerIndex);break}}},[]),se=T.useCallback(d=>{const c=L.current;if(!c||!c.lastDiscardedTile)return;const x=c.players[0];Ce(x,c.lastDiscardedTile,d,c.lastDiscardPlayerIndex),Z(c,c.lastDiscardedTile),c.currentPlayerIndex=0,g(!1),f([]),t([]),b("你吃了！请出牌"),r({...c})},[]),le=T.useCallback(d=>{const c=L.current;if(!(!c||c.phase!=="playing")&&c.currentPlayerIndex===0)if((o==null?void 0:o.id)===d.id){const x=Je(d,c.players[0],c,qe);if(!x.valid){b(x.message||"不能打出这张牌"),l(null);return}ce(c.players[0],d),ue(c,d),c.lastDiscardedTile=d,c.lastDiscardPlayerIndex=0,c.isKongBloom=!1,l(null),t([]),f([]),b(`你打出 ${X(d)}`),r({...c}),setTimeout(()=>G(c,d,0),200)}else l(d)},[o]);if(!n)return null;const ae=n.players[0];return i.jsxs(Rr,{children:[i.jsxs(Nr,{children:[i.jsxs("span",{children:["剩余: ",n.wall.length,"张"]}),n.jokerTile&&i.jsxs(Tr,{children:["财神: ",i.jsx(O,{tile:n.jokerTile,jokerTile:n.jokerTile,small:!0,disabled:!0})]}),i.jsx(Cr,{children:p}),i.jsxs("span",{children:["连庄: ",n.dealerStreakCount]})]}),i.jsxs(Er,{children:[i.jsx(Kr,{children:i.jsx(fe,{player:n.players[2],jokerTile:n.jokerTile,isActive:n.currentPlayerIndex===2,selectedTile:null,showHand:n.phase==="win"||n.phase==="draw_game",position:"top"})}),i.jsx(Mr,{children:i.jsx(fe,{player:n.players[3],jokerTile:n.jokerTile,isActive:n.currentPlayerIndex===3,selectedTile:null,showHand:n.phase==="win"||n.phase==="draw_game",position:"left"})}),i.jsx(Or,{children:n.discardPool.map(d=>i.jsx(O,{tile:d,jokerTile:n.jokerTile,small:!0,disabled:!0},d.id))}),i.jsx(Br,{children:i.jsx(fe,{player:n.players[1],jokerTile:n.jokerTile,isActive:n.currentPlayerIndex===1,selectedTile:null,showHand:n.phase==="win"||n.phase==="draw_game",position:"right"})}),i.jsxs(Fr,{children:[i.jsx(fe,{player:ae,jokerTile:n.jokerTile,isActive:n.currentPlayerIndex===0,selectedTile:o,onTileClick:le,showHand:!0,position:"bottom"}),i.jsxs(Gr,{children:[s.length>0&&n.phase==="playing"&&i.jsx(Pr,{actions:s,onAction:oe}),u&&a.length>0&&i.jsxs("div",{children:[i.jsx(Lr,{children:"选择吃牌组合:"}),i.jsx(zr,{children:a.map((d,c)=>i.jsx(Hr,{onClick:()=>se(d),children:d.map(x=>i.jsx(O,{tile:x,jokerTile:n.jokerTile,small:!0,disabled:!0},x.id))},c))})]})]})]})]}),v&&i.jsx(Wr,{state:n,winResult:v,onContinue:q,onExit:e}),n.phase==="draw_game"&&!v&&i.jsx(Ar,{state:n,onContinue:q,onExit:e})]})}function Jr(){const[e,n]=T.useState(!1),r=T.useCallback(()=>{n(!0)},[]),o=T.useCallback(()=>{n(!1)},[]);return e?i.jsx(qr,{onExit:o}):i.jsx(jn,{onStartGame:r})}function Zr(){return i.jsx(Jr,{})}const Qr={title:"乐清麻将",needBackIcon:!0};export{Zr as Component,Qr as handle};
