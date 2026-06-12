import{r as v,j as o}from"./index-Bt_SosG2.js";import{d as w,l as L,m as on}from"./styled-components.browser.esm-C0OZs9VM.js";const sn=w.div`
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
`,ln=w.h2`
  text-align: center;
  color: #fff;
  margin: 0;
  padding: 4px 0;
  font-size: 14px;
  opacity: 0.8;
`,an=w.button`
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
`,dn=w.div`
  width: 100%;
  max-width: 900px;
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
`,cn=w.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 0.8rem;
`,fn=w.div`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
`,T=w.div`
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
`,E=w.div`
  font-weight: 600;
  color: #fdd835;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`,un=v.memo(function({onStartGame:n}){return o.jsxs(sn,{children:[o.jsx(ln,{children:"🀄 乐清麻将"}),o.jsx(an,{onClick:n,children:"开始游戏"}),o.jsxs(dn,{children:[o.jsx(cn,{children:"📖 乐清麻将规则"}),o.jsxs(fn,{children:[o.jsx(E,{children:"基础设定"}),o.jsx(T,{children:"4人对战，使用136张标准麻将牌（筒、条、万、东南西北中发白）"}),o.jsx(T,{children:"胡牌条件：n组面子（顺子/刻子/碰/杠）+ 1对将牌"}),o.jsx(T,{children:"七对禁止胡牌"}),o.jsx(T,{children:"吃牌仅限上家，碰牌不限任意玩家"}),o.jsx(E,{children:"花牌规则"}),o.jsxs(T,{children:[o.jsx("strong",{children:"红中、白板"}),"为固定花牌，摸到必须立刻杠牌补牌"]}),o.jsx(T,{children:"若红中/白板为本局财神，则由发财替代充当花牌"}),o.jsx(E,{children:"财神规则"}),o.jsx(T,{children:"全员摸完手牌后，从牌山末尾取一张为本局财神"}),o.jsx(T,{children:"财神取出后不回归牌山，本局最多流通3张财神"}),o.jsx(T,{children:"财神归位仅全顺子牌型生效，带刻子、碰牌不判定归位"}),o.jsxs(T,{children:[o.jsx("strong",{children:"核心铁规"}),"：手牌只要带财神，一律为软牌"]}),o.jsx(E,{children:"开局摸牌"}),o.jsx(T,{children:"庄家先掷骰子，指向的玩家再掷第二次"}),o.jsx(T,{children:"两次点数相加，从第一次指向玩家的牌山左侧向右数对应对数"}),o.jsx(T,{children:"庄家从下一对开始摸牌，每次摸2对（4张）"}),o.jsx(T,{children:"四家各摸满8对（16张），庄家额外多摸1张：庄家17张、闲家16张"}),o.jsx(T,{children:"所有杠牌、花牌补杠，统一从牌山末尾补牌"}),o.jsx(E,{children:"吃碰杠规则"}),o.jsxs(T,{children:[o.jsx("strong",{children:"吃牌"}),"：仅限上家打出的牌"]}),o.jsxs(T,{children:[o.jsx("strong",{children:"碰牌"}),"：所有玩家打出均可碰"]}),o.jsxs(T,{children:[o.jsx("strong",{children:"普通杠"}),"：不计台数"]}),o.jsx(T,{children:"支持抢杠胡、杠上开花（均单独加台）"}),o.jsx(E,{children:"流局规则"}),o.jsx(T,{children:"牌山剩余8对牌时，直接荒庄流局"}),o.jsx(E,{children:"庄家连庄"}),o.jsx(T,{children:"庄家输牌，下家接任庄家"}),o.jsx(T,{children:"连庄无次数上限，连庄台数持续累积叠加，底分不翻倍"}),o.jsx(T,{children:"结算无自摸、点炮区别：庄家对三家闲家台数统一一致"}),o.jsx(E,{children:"软硬牌判定"}),o.jsxs(T,{children:[o.jsx("strong",{children:"硬牌（基础1台）"}),"：手牌无财神即为硬牌"]}),o.jsxs(T,{children:[o.jsx("strong",{children:"软牌（基础0.5台）"}),"：只要手牌带有财神，全部判定为软牌"]}),o.jsx(T,{children:"财神归位不纳入硬牌判定"}),o.jsx(E,{children:"基础台数"}),o.jsx(T,{children:"基础硬牌：1台 | 基础软牌：0.5台"}),o.jsx(T,{children:"碰碰胡：有财神3台 / 无财神4台"}),o.jsx(T,{children:"混一色：3台 | 清一色：4台"}),o.jsx(E,{children:"通用加台（可累加）"}),o.jsx(T,{children:"单张花牌：+1台/张 | 杠上开花：+1台 | 抢杠胡：+1台"}),o.jsx(T,{children:"自家风位碰/刻/杠：+1台 | 发财碰/刻/杠：+1台"}),o.jsx(E,{children:"财神专属加台"}),o.jsx(T,{children:"双财神：+1台 | 财神归位：+1台（仅限全顺子）"}),o.jsx(T,{children:"双财神归位：+6台 | 三财神归位：+50台"}),o.jsx(T,{children:"双财神做将：+6台 | 三财神做刻：+15台"}),o.jsx(E,{children:"终极结算规则"}),o.jsxs(T,{children:[o.jsx("strong",{children:"小数补整"}),"：0.5台直接进1补整为1台"]}),o.jsxs(T,{children:[o.jsx("strong",{children:"庄家加成"}),"：庄家胡牌，总台数额外+1台"]}),o.jsxs(T,{children:[o.jsx("strong",{children:"闲家胡牌"}),"：闲家胡牌自身台数+1台；仅与庄家抵扣台数差，其余闲家正常输庄家、输胡牌闲家"]}),o.jsxs(T,{children:[o.jsx("strong",{children:"高台翻倍"}),"：总台数≥6台，整体台数直接翻倍（如7台→结算14台）"]})]})]})]})});var b=(e=>(e.Tong="tong",e.Tiao="tiao",e.Wan="wan",e.Feng="feng",e))(b||{}),M=(e=>(e.East="east",e.South="south",e.West="west",e.North="north",e))(M||{}),j=(e=>(e.East="dong",e.South="nan",e.West="xi",e.North="bei",e.Zhong="zhong",e.Fa="fa",e.Bai="bai",e))(j||{}),D=(e=>(e.Sequence="sequence",e.Triplet="triplet",e.Pong="pong",e.ExposedKong="exposed_kong",e.ConcealedKong="concealed_kong",e.AddedKong="added_kong",e))(D||{}),y=(e=>(e.Draw="draw",e.Discard="discard",e.Chow="chow",e.Pong="pong",e.Kong="kong",e.ConcealedKong="concealed_kong",e.AddedKong="added_kong",e.Win="win",e.RobKong="rob_kong",e.Pass="pass",e.FlowerKong="flower_kong",e))(y||{});const hn={[M.East]:j.East,[M.South]:j.South,[M.West]:j.West,[M.North]:j.North};function xn(e,n){return e.suit===n.suit&&e.value===n.value}function fe(e,n){return n?xn(e,n):!1}function Ae(e,n){return[...e.melds.flatMap(r=>r.tiles),...n.melds.flatMap(r=>r.tiles),...n.pair]}function pn(e){return[...e.player.melds,...e.decomposition.melds].every(r=>r.type!==D.Sequence)}function gn(e){const n=Ae(e.player,e.decomposition),r=new Set(n.filter(a=>a.suit!==b.Feng).map(a=>a.suit)),i=n.some(a=>a.suit===b.Feng);return r.size===1&&i}function mn(e){const n=Ae(e.player,e.decomposition),r=new Set(n.map(i=>i.suit));return r.size===1&&!r.has(b.Feng)}function Ee(e){return[...e.player.melds,...e.decomposition.melds]}function yn(e){const n=hn[e.player.wind];return Ee(e).filter(r=>r.type!==D.Sequence&&r.tiles.length>0&&r.tiles[0].suit===b.Feng&&r.tiles[0].value===n).length}function jn(e){return Ee(e).filter(n=>n.type!==D.Sequence&&n.tiles.length>0&&n.tiles[0].suit===b.Feng&&n.tiles[0].value===j.Fa).length}function bn(e){const n=e.player.hand.filter(a=>fe(a,e.jokerTile)).length,i=e.decomposition.isAllSequence&&e.player.melds.every(a=>a.type===D.Sequence)?n:0;return n>=3?(e.decomposition.melds.some(s=>s.type===D.Triplet&&s.tiles.length<=0)||n>=3?15:0)+(i>=3?50:0):n===2?1+(e.decomposition.pair.filter(s=>fe(s,e.jokerTile)).length===2||e.decomposition.pair.length===0&&n>=2?6:0)+(i>=2?6:0):n===1&&i>=1?1:0}function wn(e){const n=[],r=e.player.hand.filter(s=>fe(s,e.jokerTile)).length,a=e.decomposition.isAllSequence&&e.player.melds.every(s=>s.type===D.Sequence)?r:0;return r>=3?((e.decomposition.melds.some(t=>t.type===D.Triplet&&t.tiles.length<=0)||r>=3)&&n.push("三财神做刻: +15台"),a>=3&&n.push("三财神归位: +50台")):r===2?(n.push("双财神: +1台"),(e.decomposition.pair.filter(t=>fe(t,e.jokerTile)).length===2||e.decomposition.pair.length===0&&r>=2)&&n.push("双财神做将: +6台"),a>=2&&n.push("双财神归位: +6台")):r===1&&a>=1&&n.push("财神归位: +1台"),n}const Ke=[{id:"pure_onesuit",name:"清一色",priority:100,group:"base_pattern",detect:e=>mn(e)?e.isHard?4:3:0},{id:"pong_pong",name:"碰碰胡",priority:90,group:"base_pattern",detect:e=>pn(e)?e.isHard?4:3:0},{id:"mixed_onesuit",name:"混一色",priority:80,group:"base_pattern",detect:e=>gn(e)?e.isHard?3:2:0},{id:"regular_hand",name:"普通牌",priority:10,group:"base_pattern",detect:e=>e.isHard?1:.5},{id:"flower",name:"花牌",priority:70,group:"bonus",detect:e=>e.player.flowers.length},{id:"kong_bloom",name:"杠上开花",priority:60,group:"bonus",detect:e=>e.state.isKongBloom?1:0},{id:"rob_kong",name:"抢杠胡",priority:55,group:"bonus",detect:e=>e.isRobKong?1:0},{id:"wind",name:"风位",priority:50,group:"bonus",detect:yn},{id:"fa",name:"发财",priority:45,group:"bonus",detect:jn},{id:"joker",name:"财神",priority:40,group:"joker",detect:bn,describe:wn},{id:"dealer_streak",name:"连庄",priority:30,group:"bonus",detect:e=>e.state.dealerStreakCount},{id:"dealer_bonus",name:"庄闲加成",priority:20,group:"bonus",detect:()=>1,describe:e=>[e.player.isDealer?"庄家胡: +1台":"闲家胡: +1台"]}];Ke.sort((e,n)=>n.priority-e.priority);function kn(e){return e.sort((n,r)=>r.priority-n.priority),e}function Tn(e){return e.suit===b.Feng?{[j.East]:27,[j.South]:28,[j.West]:29,[j.North]:30,[j.Zhong]:31,[j.Fa]:32,[j.Bai]:33}[e.value]??-1:(e.suit===b.Wan?0:e.suit===b.Tiao?9:18)+e.value-1}function vn(e,n){if(e>=27){const t=[j.East,j.South,j.West,j.North,j.Zhong,j.Fa,j.Bai][e-27],l={[j.East]:"东",[j.South]:"南",[j.West]:"西",[j.North]:"北",[j.Zhong]:"红中",[j.Fa]:"发财",[j.Bai]:"白板"};return{id:n,suit:b.Feng,value:t,label:l[t]}}const r=e<9?b.Wan:e<18?b.Tiao:b.Tong,i=e%9+1,a={[b.Wan]:["","一万","二万","三万","四万","五万","六万","七万","八万","九万"],[b.Tiao]:["","一条","二条","三条","四条","五条","六条","七条","八条","九条"],[b.Tong]:["","一筒","二筒","三筒","四筒","五筒","六筒","七筒","八筒","九筒"],[b.Feng]:[]};return{id:n,suit:r,value:i,label:a[r][i]}}function pe(e,n){const r=new Array(34).fill(0);let i=0;for(const a of e)if(F(a,n))i++;else{const s=Tn(a);s>=0&&r[s]++}return{counts:r,wildCount:i}}function X(e,n,r=!0){let i=0;for(;i<34&&e[i]===0;)i++;if(i===34)return n<=0&&!r;let a=0;for(let t=i;t<34;t++)a+=e[t];const s=n*3+(r?2:0);if(a<s||r&&(a-2)%3!==0||!r&&a%3!==0)return!1;if(r&&e[i]>=2){if(e[i]-=2,X(e,n,!1))return e[i]+=2,!0;e[i]+=2}if(e[i]>=3){if(e[i]-=3,X(e,n-1,r))return e[i]+=3,!0;e[i]+=3}if(i<27&&i%9<=6&&e[i+1]>=1&&e[i+2]>=1){if(e[i]--,e[i+1]--,e[i+2]--,X(e,n-1,r))return e[i]++,e[i+1]++,e[i+2]++,!0;e[i]++,e[i+1]++,e[i+2]++}return!1}function*ge(e,n){if(n===0){yield[];return}for(let r=0;r<e.length;r++)for(const i of ge(e.slice(r),n-1))yield[e[r],...i]}function Re(e){const n=new Set;for(let r=0;r<34;r++)e[r]>0&&(n.add(r),r<27&&(r%9>0&&n.add(r-1),r%9<8&&n.add(r+1),r%9>1&&n.add(r-2),r%9<7&&n.add(r+2)));return Array.from(n).sort((r,i)=>r-i)}function Fe(e,n,r){let i=n;for(let s=0;s<34;s++)i+=e[s];if(i<r*3+2||(i-2)%3!==0)return!1;if(n===0)return X(e.slice(),r);const a=Re(e);for(const s of ge(a,n)){const t=e.slice();for(const l of s)t[l]++;if(X(t,r))return!0}return!1}function ee(e,n,r,i,a,s){let t=0;for(;t<34&&e[t]===0;)t++;if(t===34){if(n===0&&!r){const f=i.every(p=>p.type===D.Sequence),h=a?a.map((p,g)=>vn(p,9e3+g)):[];s.push({melds:[...i],pair:h,isAllSequence:f})}return}let l=0;for(let f=t;f<34;f++)l+=e[f];l===n*3+(r?2:0)&&(r&&e[t]>=2&&(e[t]-=2,ee(e,n,!1,i,[t,t],s),e[t]+=2),e[t]>=3&&(e[t]-=3,i.push({type:D.Triplet,tiles:[]}),ee(e,n-1,r,i,a,s),i.pop(),e[t]+=3),t<27&&t%9<=6&&e[t+1]>=1&&e[t+2]>=1&&(e[t]--,e[t+1]--,e[t+2]--,i.push({type:D.Sequence,tiles:[]}),ee(e,n-1,r,i,a,s),i.pop(),e[t]++,e[t+1]++,e[t+2]++))}function Sn(e,n,r){let i=n;for(let t=0;t<34;t++)i+=e[t];if(i!==r*3+2)return[];if(n===0){const t=[];return ee(e.slice(),r,!0,[],null,t),t}const a=Re(e),s=[];for(const t of ge(a,n)){const l=e.slice();for(const f of t)l[f]++;ee(l,r,!0,[],null,s)}return s}function $n(e,n){const{counts:r,wildCount:i}=pe(e.hand,n);return Fe(r,i,0)}function Cn(e,n,r){const i=[...e.hand,n],{counts:a,wildCount:s}=pe(i,r);return Fe(a,s,0)}function Dn(e,n,r){const i=4-n.length,{counts:a,wildCount:s}=pe(e,r);return Sn(a,s,i)}const In={[b.Tong]:["","一筒","二筒","三筒","四筒","五筒","六筒","七筒","八筒","九筒"],[b.Tiao]:["","一条","二条","三条","四条","五条","六条","七条","八条","九条"],[b.Wan]:["","一万","二万","三万","四万","五万","六万","七万","八万","九万"],[b.Feng]:[]},Be={[j.East]:"东",[j.South]:"南",[j.West]:"西",[j.North]:"北",[j.Zhong]:"红中",[j.Fa]:"发财",[j.Bai]:"白板"},Pn=[M.East,M.South,M.West,M.North];function _n(){const e=[];let n=0;const r=[b.Tong,b.Tiao,b.Wan];for(const a of r)for(let s=1;s<=9;s++)for(let t=0;t<4;t++)e.push({id:n++,suit:a,value:s,label:In[a][s]});const i=[j.East,j.South,j.West,j.North,j.Zhong,j.Fa,j.Bai];for(const a of i)for(let s=0;s<4;s++)e.push({id:n++,suit:b.Feng,value:a,label:Be[a]});return e}function Wn(e){const n=[...e];for(let r=n.length-1;r>0;r--){const i=Math.floor(Math.random()*(r+1));[n[r],n[i]]=[n[i],n[r]]}return n}const ye=new Set([j.Zhong,j.Bai]);function ne(e,n){if(e.suit!==b.Feng)return!1;const r=e.value;return n&&K(e,n)?!1:ye.has(r)?!0:n&&ye.has(n.value)?r===j.Fa:!1}function F(e,n){return n?K(e,n):!1}function K(e,n){return e.suit===n.suit&&e.value===n.value}const An={[b.Wan]:0,[b.Tong]:1,[b.Tiao]:2,[b.Feng]:3},En={[j.East]:0,[j.South]:1,[j.West]:2,[j.North]:3,[j.Zhong]:4,[j.Fa]:5,[j.Bai]:6};function je(e){const n=An[e.suit]*100;return e.suit===b.Feng?n+En[e.value]:n+e.value}function re(e){return[...e].sort((n,r)=>je(n)-je(r))}function be(){return[Math.ceil(Math.random()*6),Math.ceil(Math.random()*6)]}function Kn(e,n){const r=Wn(_n()),i=be(),a=be(),s=i[0]+i[1]+a[0]+a[1],t=n===0&&e===0?Math.floor(Math.random()*4):e,l=Array.from({length:4},(p,g)=>{const m=(g-t+4)%4,$=Pn[m];return{index:g,name:g===0?"你":`电脑${g}`,hand:[],lastDrawnTile:null,melds:[],flowers:[],discards:[],wind:$,isAI:g!==0,isDealer:g===t}}),f=[...r];for(let p=0;p<4;p++)for(let g=0;g<4;g++){const m=(t+g)%4,$=f.splice(0,4);l[m].hand.push(...$)}l[t].hand.push(f.shift());const h=f.pop();for(const p of l)Rn(p,f,h);for(const p of l)p.hand=re(p.hand);return{wall:f,players:l,discardPool:[],currentPlayerIndex:t,dealerIndex:t,jokerTile:h,dealerStreakCount:n,phase:"playing",pendingActions:[],lastDiscardedTile:null,lastDiscardPlayerIndex:-1,isKongBloom:!1,diceResult:[s,0]}}function Rn(e,n,r){let i=!0;for(;i;){i=!1;for(let a=e.hand.length-1;a>=0;a--)ne(e.hand[a],r)&&(e.flowers.push(e.hand.splice(a,1)[0]),n.length>0&&e.hand.push(n.pop()),i=!0)}}function Fn(e,n){if(e.wall.length<=16)return null;const r=e.wall.shift(),i=e.players[n];return ne(r,e.jokerTile)?(i.flowers.push(r),Me(e,n)):(i.lastDrawnTile=r,r)}function Bn(e,n){if(e.wall.length<=16)return null;const r=e.wall.pop(),i=e.players[n];return ne(r,e.jokerTile)?(i.flowers.push(r),Me(e,n)):(i.lastDrawnTile=r,r)}function Me(e,n){const r=e.players[n];for(;e.wall.length>16;){const i=e.wall.pop();if(ne(i,e.jokerTile)){r.flowers.push(i);continue}return r.lastDrawnTile=i,i}return null}function ae(e,n){var i;if(((i=e.lastDrawnTile)==null?void 0:i.id)===n.id){e.discards.push(n),e.lastDrawnTile=null;return}const r=e.hand.findIndex(a=>a.id===n.id);r!==-1&&(e.hand.splice(r,1),e.discards.push(n),e.lastDrawnTile&&(e.hand.push(e.lastDrawnTile),e.hand=re(e.hand),e.lastDrawnTile=null))}function we(e,n,r){const a=e.hand.filter(s=>K(s,n)).slice(0,2);for(const s of a){const t=e.hand.findIndex(l=>l.id===s.id);t!==-1&&e.hand.splice(t,1)}e.melds.push({type:D.Pong,tiles:[...a,n],fromPlayer:r,claimedTileId:n.id})}function ke(e,n,r,i){for(const s of r){const t=e.hand.findIndex(l=>l.id===s.id);t!==-1&&e.hand.splice(t,1)}const a=re([...r,n]);e.melds.push({type:D.Sequence,tiles:a,fromPlayer:i,claimedTileId:n.id})}function Te(e,n,r,i){const s=e.hand.filter(l=>K(l,n)).slice(0,3);for(const l of s){const f=e.hand.findIndex(h=>h.id===l.id);f!==-1&&e.hand.splice(f,1)}if(e.melds.push({type:D.ExposedKong,tiles:[...s,n],fromPlayer:r,claimedTileId:n.id}),i.length<=16)return null;const t=i.pop();return e.hand.push(t),t}function ve(e,n,r){const i=e.hand.filter(s=>K(s,n));if(i.length<4)return null;for(const s of i.slice(0,4)){const t=e.hand.findIndex(l=>l.id===s.id);t!==-1&&e.hand.splice(t,1)}if(e.melds.push({type:D.ConcealedKong,tiles:i.slice(0,4)}),r.length<=16)return null;const a=r.pop();return e.hand.push(a),a}function Se(e,n,r){const i=e.melds.findIndex(l=>l.type===D.Pong&&K(l.tiles[0],n));if(i===-1)return null;const a=e.hand.findIndex(l=>K(l,n));if(a===-1)return null;const s=e.hand.splice(a,1)[0];if(e.melds[i].type=D.AddedKong,e.melds[i].tiles.push(s),r.length<=16)return null;const t=r.pop();return e.hand.push(t),t}function Mn(e,n,r){const i=[];for(let a=0;a<4;a++){if(a===r)continue;const s=e.players[a],t=[],l={};Cn(s,n,e.jokerTile)&&t.push(y.Win);const f=F(n,e.jokerTile);if(!f){const h=s.hand.filter(p=>K(p,n));h.length>=2&&t.push(y.Pong),h.length>=3&&t.push(y.Kong)}if(!f&&a===(r+1)%4&&n.suit!==b.Feng){const h=On(s,n);h.length>0&&(t.push(y.Chow),l[y.Chow]=h)}t.length>0&&i.push({playerIndex:a,actions:t,options:l,triggerTile:n})}return i}function V(e,n,r){const i=e.players[n],a=[],s=i.lastDrawnTile?[...i.hand,i.lastDrawnTile]:i.hand;$n(i,e.jokerTile)&&a.push(y.Win);const t=zn(s);for(const[,l]of t.entries())if(l>=4){a.push(y.ConcealedKong);break}for(const l of i.melds)if(l.type===D.Pong&&s.some(f=>K(f,l.tiles[0]))){a.push(y.AddedKong);break}return a}function On(e,n){if(n.suit===b.Feng)return[];const r=n.value,i=e.hand.filter(m=>m.suit===n.suit&&typeof m.value=="number"),a=[],s=i.find(m=>m.value===r+1),t=i.find(m=>m.value===r+2);s&&t&&a.push([s,t]);const l=i.find(m=>m.value===r-1),f=i.find(m=>m.value===r+1);l&&f&&l.id!==(s==null?void 0:s.id)&&f.id!==(t==null?void 0:t.id)?a.push([l,f]):l&&f&&a.push([l,f]);const h=i.find(m=>m.value===r-2),p=i.find(m=>m.value===r-1&&m.id!==(l==null?void 0:l.id));h&&p&&a.push([h,p]);const g=new Set;return a.filter(m=>{const $=m.map(P=>`${P.suit}-${P.value}`).sort().join("|");return g.has($)?!1:(g.add($),!0)})}function Ln(e){return`${e.suit}-${e.value}`}function zn(e){const n=new Map;for(const r of e){const i=Ln(r);n.set(i,(n.get(i)||0)+1)}return n}let Hn=kn([...Ke]);function Nn(e,n,r){return n.describe?n.describe(e,r):n.id==="regular_hand"?[e.isHard?"硬牌: 1台":"软牌: 0.5台"]:n.id==="flower"?[`花牌x${r}: +${r}台`]:n.group==="base_pattern"?[`${n.name}: ${r}台`]:[`${n.name}: +${r}台`]}function Gn(e,n,r,i,a){var J,q,ie,oe,se,le,d,c,x;const s=e.players[n],t=e.jokerTile,f=s.hand.filter(u=>F(u,t)).length+r.pair.filter(u=>F(u,t)).length+r.melds.flatMap(u=>u.tiles).filter(u=>F(u,t)).length===0,h={player:s,decomposition:r,state:e,isHard:f,jokerTile:t,isRobKong:i,isSelfDraw:a},p=new Set,g=[];for(const u of Hn){if(u.group==="base_pattern"&&p.has(u.group))continue;const k=u.detect(h);k<=0||(g.push({id:u.id,name:u.name,tai:k,details:Nn(h,u,k)}),u.group==="base_pattern"&&p.add(u.group))}const m=((J=g.find(u=>u.id==="regular_hand"))==null?void 0:J.tai)??0,$=g.filter(u=>["pure_onesuit","pong_pong","mixed_onesuit"].includes(u.id)).reduce((u,k)=>u+k.tai,0),P=((q=g.find(u=>u.id==="flower"))==null?void 0:q.tai)??0,W=((ie=g.find(u=>u.id==="kong_bloom"))==null?void 0:ie.tai)??0,I=((oe=g.find(u=>u.id==="rob_kong"))==null?void 0:oe.tai)??0,B=((se=g.find(u=>u.id==="wind"))==null?void 0:se.tai)??0,Z=((le=g.find(u=>u.id==="fa"))==null?void 0:le.tai)??0,H=((d=g.find(u=>u.id==="joker"))==null?void 0:d.tai)??0,_=((c=g.find(u=>u.id==="dealer_streak"))==null?void 0:c.tai)??0,G=((x=g.find(u=>u.id==="dealer_bonus"))==null?void 0:x.tai)??0,R=m+$+P+W+I+B+Z+H+_+G,A=Math.ceil(R),N=A>=6?A*2:A,te=g.sort((u,k)=>k.tai-u.tai).flatMap(u=>u.details);return A>=6&&te.push(`高台翻倍(${A}→${N})`),{baseTai:m,isHard:f,patternTai:$,flowerTai:P,kongBloomTai:W,robKongTai:I,windTai:B,faTai:Z,jokerTai:H,dealerStreakTai:_,dealerBonusTai:G,rawTotal:R,roundedTotal:A,finalTotal:N,details:te}}function Jn(e,n,r,i){const a=[0,0,0,0],s=n===e.dealerIndex,t=i.finalTotal;if(s)for(let l=0;l<4;l++)l===n?a[l]=t*3:a[l]=-t;else{const l=e.dealerIndex;for(let f=0;f<4;f++)if(f!==n)if(f===l){const h=Math.max(t,0);a[f]=-h,a[n]+=h}else a[f]=-t,a[n]+=t}return a}function qn(e){return e.wall.length<=16}function $e(e){return(e+1)%4}function Q(e){if(e.suit===b.Feng)return Be[e.value]||"?";const n={[b.Wan]:"万",[b.Tong]:"筒",[b.Tiao]:"条"}[e.suit]||"";return`${e.value}${n}`}const Oe=[{id:"no_joker_discard",name:"财神不可打出",validate:(e,n,r)=>r.jokerTile?!F(e,r.jokerTile):!0,errorMessage:"财神不能打出"},{id:"no_chow_tile_discard",name:"吃牌后不可打出吃的那张牌",validate:(e,n,r)=>{const i=n.melds[n.melds.length-1];if(!i||i.type!==D.Sequence)return!0;if(i.claimedTileId!==void 0){const a=r.discardPool.find(s=>s.id===i.claimedTileId);if(a&&e.suit===a.suit&&e.value===a.value)return!1}return!0},errorMessage:"刚吃的牌不能立即打出"}];function Le(e,n,r,i){for(const a of i)if(!a.validate(e,n,r))return{valid:!1,message:a.errorMessage};return{valid:!0}}function he(e,n){const r=re(e.hand),i=n.jokerTile,a=r.filter(t=>Le(t,e,n,Oe).valid);if(a.length===0)return r[r.length-1];const s=a.map(t=>({tile:t,score:Vn(t,r,i)}));return s.sort((t,l)=>t.score-l.score),s[0].tile}function Vn(e,n,r){let i=0;const a=n.filter(t=>t.id!==e.id),s=a.filter(t=>K(t,e)).length;if(i+=s*20,e.suit!==b.Feng&&typeof e.value=="number"){const t=e.value,l=a.some(g=>g.suit===e.suit&&g.value===t-1),f=a.some(g=>g.suit===e.suit&&g.value===t+1),h=a.some(g=>g.suit===e.suit&&g.value===t-2),p=a.some(g=>g.suit===e.suit&&g.value===t+2);l&&f?i+=15:(l||f)&&(i+=10),h&&(i+=5),p&&(i+=5)}return F(e,r)&&(i+=100),e.suit===b.Feng&&s===0&&(i-=5),i}function Ce(e,n,r){return n.includes(y.Win)?y.Win:n.includes(y.RobKong)?y.RobKong:n.includes(y.ConcealedKong)?y.ConcealedKong:n.includes(y.AddedKong)?y.AddedKong:n.includes(y.Kong)?y.Kong:n.includes(y.Pong)?y.Pong:n.includes(y.Chow)&&Math.random()<.7?y.Chow:y.Pass}function Un(e){return e[0]||[]}function De(e,n){const r=new Map;for(const i of e.hand){if(F(i,n))continue;const a=`${i.suit}-${i.value}`,s=r.get(a);s?s.count++:r.set(a,{tile:i,count:1})}for(const[,i]of r)if(i.count>=4)return i.tile;return null}function Ie(e){for(const n of e.melds)if(n.type===D.Pong){const r=e.hand.find(i=>K(i,n.tiles[0]));if(r)return r}return null}const Yn={[b.Wan]:"#d32f2f",[b.Tong]:"#1565c0",[b.Tiao]:"#2e7d32",[b.Feng]:"#37474f"},xe="#ff6f00";function Zn(e,n){return F(e,n)?xe:Yn[e.suit]||"#333"}const me=36,ze=50,He=28,Ne=38;function Qn(e,n,r,i,a,s,t){if(e===1)return Xn(r,i,a,s,t);const l=er(e,r,i,a,s,t),f=e<=4?4.2*a:3.8*a;return l.map((h,p)=>o.jsxs("g",{children:[o.jsx("circle",{cx:h.x,cy:h.y,r:f,fill:"none",stroke:n,strokeWidth:1.3*a}),o.jsx("circle",{cx:h.x,cy:h.y,r:f*.45,fill:n})]},p))}function Xn(e,n,r,i,a){const t=Math.min(i,a)*.35,l=t*.5,f=[];for(let h=0;h<8;h++){const p=h*360/8*Math.PI/180,g=e+Math.cos(p)*t*.65,m=n+Math.sin(p)*t*.65;f.push(o.jsx("ellipse",{cx:g,cy:m,rx:t*.28,ry:t*.16,fill:"#1565c0",transform:`rotate(${h*360/8} ${g} ${m})`},`petal-${h}`))}return[...f,o.jsx("circle",{cx:e,cy:n,r:t,fill:"none",stroke:"#1565c0",strokeWidth:1.5*r},"outer"),o.jsx("circle",{cx:e,cy:n,r:l,fill:"#1565c0"},"inner")]}function er(e,n,r,i,a,s){const t=a*.8,l=s*.8;return({2:[{x:0,y:-l*.25},{x:0,y:l*.25}],3:[{x:t*.3,y:-l*.35},{x:0,y:0},{x:-t*.3,y:l*.35}],4:[{x:-t*.25,y:-l*.25},{x:t*.25,y:-l*.25},{x:-t*.25,y:l*.25},{x:t*.25,y:l*.25}],5:[{x:-t*.25,y:-l*.25},{x:t*.25,y:-l*.25},{x:0,y:0},{x:-t*.25,y:l*.25},{x:t*.25,y:l*.25}],6:[{x:-t*.25,y:-l*.35},{x:t*.25,y:-l*.35},{x:-t*.25,y:0},{x:t*.25,y:0},{x:-t*.25,y:l*.35},{x:t*.25,y:l*.35}],7:[{x:t*.35,y:-l*.35},{x:0,y:-l*.25},{x:-t*.35,y:-l*.15},{x:-t*.25,y:l*.15},{x:t*.25,y:l*.15},{x:-t*.25,y:l*.4},{x:t*.25,y:l*.4}],8:[{x:-t*.25,y:-l*.35},{x:t*.25,y:-l*.35},{x:-t*.25,y:-l*.12},{x:t*.25,y:-l*.12},{x:-t*.25,y:l*.12},{x:t*.25,y:l*.12},{x:-t*.25,y:l*.35},{x:t*.25,y:l*.35}],9:[{x:-t*.35,y:-l*.35},{x:0,y:-l*.35},{x:t*.35,y:-l*.35},{x:-t*.35,y:0},{x:0,y:0},{x:t*.35,y:0},{x:-t*.35,y:l*.35},{x:0,y:l*.35},{x:t*.35,y:l*.35}]}[e]||[]).map(h=>({x:n+h.x,y:r+h.y}))}function nr(e,n,r,i,a,s,t){if(e===1)return ir(r,i,a,s,t);if(e===8)return rr(n,r,i,a,s,t);const l=tr(e,r,i,a,s,t),f=2*a,h=9*a;return l.map((p,g)=>{const m=p.y-h/2,$=p.y,P=p.y+h/2;return o.jsxs("g",{children:[o.jsx("line",{x1:p.x,y1:m,x2:p.x,y2:P,stroke:n,strokeWidth:2.5*a,strokeLinecap:"round"}),o.jsx("circle",{cx:p.x,cy:m,r:f,fill:n}),o.jsx("circle",{cx:p.x,cy:$,r:f,fill:n}),o.jsx("circle",{cx:p.x,cy:P,r:f,fill:n})]},g)})}function rr(e,n,r,i,a,s){const t=a*.7,l=s*.7,f=2*i,h=$=>n-t/2+$/6*t,p=$=>r-l/2+$/5*l,g=[[[0,1],[1,1],[2,1]],[[0,5],[1,5],[2,5]],[[0,3],[1,2],[2,1]],[[0,3],[1,4],[2,5]],[[3,1],[4,1],[5,1]],[[3,5],[4,5],[5,5]],[[3,1],[4,2],[5,3]],[[3,5],[4,4],[5,3]]],m=[];return g.forEach(($,P)=>{const W=$.map(([I,B])=>({x:h(B),y:p(I)}));for(let I=0;I<W.length-1;I++)m.push(o.jsx("line",{x1:W[I].x,y1:W[I].y,x2:W[I+1].x,y2:W[I+1].y,stroke:e,strokeWidth:2.5*i,strokeLinecap:"round"},`line-${P}-${I}`));W.forEach((I,B)=>{m.push(o.jsx("circle",{cx:I.x,cy:I.y,r:f,fill:e},`node-${P}-${B}`))})}),m}function tr(e,n,r,i,a,s){const t=a*.8,l=s*.8;return({2:[{x:0,y:-l*.2},{x:0,y:l*.2}],3:[{x:0,y:-l*.25},{x:-t*.35,y:l*.25},{x:t*.35,y:l*.25}],4:[{x:-t*.25,y:-l*.2},{x:t*.25,y:-l*.2},{x:-t*.25,y:l*.2},{x:t*.25,y:l*.2}],5:[{x:-t*.25,y:-l*.3},{x:t*.25,y:-l*.3},{x:0,y:0},{x:-t*.25,y:l*.3},{x:t*.25,y:l*.3}],6:[{x:-t*.3,y:-l*.25},{x:0,y:-l*.25},{x:t*.3,y:-l*.25},{x:-t*.3,y:l*.25},{x:0,y:l*.25},{x:t*.3,y:l*.25}],7:[{x:0,y:-l*.35},{x:-t*.3,y:0},{x:0,y:0},{x:t*.3,y:0},{x:-t*.3,y:l*.35},{x:0,y:l*.35},{x:t*.3,y:l*.35}],8:[{x:-t*.35,y:-l*.3},{x:-t*.12,y:-l*.15},{x:t*.12,y:-l*.15},{x:t*.35,y:-l*.3},{x:-t*.35,y:l*.3},{x:-t*.12,y:l*.15},{x:t*.12,y:l*.15},{x:t*.35,y:l*.3}],9:[{x:-t*.35,y:-l*.35},{x:0,y:-l*.35},{x:t*.35,y:-l*.35},{x:-t*.35,y:0},{x:0,y:0},{x:t*.35,y:0},{x:-t*.35,y:l*.35},{x:0,y:l*.35},{x:t*.35,y:l*.35}]}[e]||[]).map(h=>({x:n+h.x,y:r+h.y}))}function ir(e,n,r,i,a){const s=Math.min(i,a)*.8;return[o.jsx("ellipse",{cx:e,cy:n+s*.15,rx:s*.3,ry:s*.35,fill:"#2e7d32"},"body"),o.jsx("circle",{cx:e,cy:n-s*.25,r:s*.18,fill:"#2e7d32"},"head"),o.jsx("path",{d:`M ${e-s*.1} ${n-s*.4} 
      Q ${e-s*.15} ${n-s*.55} ${e-s*.07} ${n-s*.5}
      Q ${e} ${n-s*.6} ${e+s*.07} ${n-s*.5}
      Q ${e+s*.15} ${n-s*.55} ${e+s*.1} ${n-s*.4} Z`,fill:"#d32f2f"},"comb"),o.jsx("circle",{cx:e+s*.06,cy:n-s*.28,r:s*.06,fill:"#fff"},"eye-white"),o.jsx("circle",{cx:e+s*.06,cy:n-s*.28,r:s*.03,fill:"#000"},"eye-black"),o.jsx("path",{d:`M ${e+s*.15} ${n-s*.25} 
      L ${e+s*.25} ${n-s*.22} 
      L ${e+s*.15} ${n-s*.19} Z`,fill:"#ff8f00"},"beak"),o.jsx("path",{d:`M ${e-s*.15} ${n+s*.35} 
      Q ${e-s*.35} ${n+s*.2} ${e-s*.28} ${n+s*.5}
      Q ${e-s*.2} ${n+s*.4} ${e-s*.15} ${n+s*.35} Z`,fill:"#1b5e20"},"tail"),o.jsx("line",{x1:e-s*.08,y1:n+s*.4,x2:e-s*.12,y2:n+s*.55,stroke:"#ff6f00",strokeWidth:s*.06},"leg1"),o.jsx("line",{x1:e+s*.08,y1:n+s*.4,x2:e+s*.12,y2:n+s*.55,stroke:"#ff6f00",strokeWidth:s*.06},"leg2")]}function or(e,n,r,i,a,s){const t=["一","二","三","四","五","六","七","八","九"],l=s*.32;return[o.jsx("text",{x:n,y:r-s*.18,textAnchor:"middle",dominantBaseline:"middle",fontSize:l,fontWeight:700,fill:"#333",children:t[e-1]},"num"),o.jsx("text",{x:n,y:r+s*.22,textAnchor:"middle",dominantBaseline:"middle",fontSize:l,fontWeight:700,fill:"#d32f2f",children:"萬"},"wan")]}const sr={dong:{char:"東",color:"#333"},nan:{char:"南",color:"#333"},xi:{char:"西",color:"#333"},bei:{char:"北",color:"#333"},zhong:{char:"中",color:"#d32f2f"},fa:{char:"發",color:"#2e7d32"},bai:{char:"白",color:"#78909c"}};function lr(e,n,r,i,a){const s=i*.7,t=a*.7,l=s*.7,f=t*.7,h=Math.min(s,t)*.12;return[o.jsx("rect",{x:e-s/2,y:n-t/2,width:s,height:t,rx:2*r,fill:"none",stroke:"#78909c",strokeWidth:1.5*r},"outer"),o.jsx("rect",{x:e-l/2,y:n-f/2,width:l,height:f,rx:1.5*r,fill:"none",stroke:"#78909c",strokeWidth:1.2*r},"inner"),o.jsx("line",{x1:e-s/2,y1:n-t/2+h,x2:e-l/2,y2:n-f/2,stroke:"#78909c",strokeWidth:1*r},"tl1"),o.jsx("line",{x1:e-s/2+h,y1:n-t/2,x2:e-l/2,y2:n-f/2,stroke:"#78909c",strokeWidth:1*r},"tl2"),o.jsx("line",{x1:e+s/2,y1:n-t/2+h,x2:e+l/2,y2:n-f/2,stroke:"#78909c",strokeWidth:1*r},"tr1"),o.jsx("line",{x1:e+s/2-h,y1:n-t/2,x2:e+l/2,y2:n-f/2,stroke:"#78909c",strokeWidth:1*r},"tr2"),o.jsx("line",{x1:e-s/2,y1:n+t/2-h,x2:e-l/2,y2:n+f/2,stroke:"#78909c",strokeWidth:1*r},"bl1"),o.jsx("line",{x1:e-s/2+h,y1:n+t/2,x2:e-l/2,y2:n+f/2,stroke:"#78909c",strokeWidth:1*r},"bl2"),o.jsx("line",{x1:e+s/2,y1:n+t/2-h,x2:e+l/2,y2:n+f/2,stroke:"#78909c",strokeWidth:1*r},"br1"),o.jsx("line",{x1:e+s/2-h,y1:n+t/2,x2:e+l/2,y2:n+f/2,stroke:"#78909c",strokeWidth:1*r},"br2")]}function ar(e,n,r,i,a,s){const t=sr[e]||{char:"?",color:"#333"};if(e==="bai")return lr(n,r,i,a,s);const l=s*.45;return[o.jsx("text",{x:n,y:r,textAnchor:"middle",dominantBaseline:"middle",fontSize:l,fontWeight:800,fill:t.color,children:t.char},"char")]}function dr(e,n,r,i){const a=r/2,s=i/2,t=r/me,l=Zn(e,n);let f=[];if(e.suit===b.Feng)f=ar(e.value,a,s,t,r,i);else{const h=e.value;switch(e.suit){case b.Tong:f=Qn(h,l,a,s,t,r,i);break;case b.Tiao:f=nr(h,l,a,s,t,r,i);break;case b.Wan:f=or(h,a,s,t,r,i);break}}return o.jsx(o.Fragment,{children:f})}const Ge="3.6rem",Je="5rem",qe="2.8rem",Ve="3.8rem",Ue=on`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,cr=w.div`
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
    background: linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 100%);
    border-radius: 0 0 4px 4px;
    z-index: -2;
  }

  ${e=>e.$selected&&L`
    transform: translateY(-0.8rem);
    filter: drop-shadow(0 0.6rem 0.8rem rgba(251,192,45,0.5));
  `}

  ${e=>e.$highlight&&L`
    filter: drop-shadow(0 0 0.6rem rgba(255, 143, 0, 0.75));

    svg rect:first-of-type {
      stroke: #ff8f00;
      stroke-width: 2;
    }
  `}

  &:hover {
    ${e=>!e.$disabled&&!e.$selected&&L`
      transform: translateY(-4px);
      filter: drop-shadow(0 3px 6px rgba(0,0,0,0.2));
    `}
  }

  &:active {
    ${e=>!e.$disabled&&L`
      transform: translateY(-1px) scale(0.98);
      transition: all 0.05s;
    `}
  }
`,fr=w.div`
  display: flex;
  gap: 0.2rem;
  flex-wrap: nowrap;
  align-items: flex-end;
  min-height: 5.6rem;
  overflow: visible;
`,ur=w.div`
  display: flex;
  gap: 0.4rem;
  align-items: flex-end;
  justify-content: center;
  min-height: 4.2rem;
`,hr=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`,Pe=w.div`
  display: flex;
  gap: 0.4rem;
  align-items: flex-end;
  flex-shrink: 0;
`,_e=w.div`
  display: flex;
  gap: 0.1rem;
  padding: 0.2rem 0.4rem;
  background: rgba(0,0,0,0.04);
  border-radius: 0.4rem;
`,xr={bottom:0,right:-90,top:180,left:90},pr=w.div`
  padding: 6px 8px;
  border-radius: 8px;
  background: ${e=>e.$isActive?"rgba(255,235,59,0.12)":"rgba(255,255,255,0.05)"};
  border: 1.5px solid ${e=>e.$isActive?"#fdd835":"transparent"};
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  transform: rotate(${e=>xr[e.$position||"bottom"]}deg);
  transform-origin: center center;
  white-space: nowrap;
`,gr=w.div`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #37474f;
  display: flex;
  align-items: center;
  gap: 4px;

  ${e=>e.$isDealer&&L`
    &::after {
      content: '庄';
      font-size: 10px;
      background: #d32f2f;
      color: #fff;
      padding: 0 4px;
      border-radius: 3px;
    }
  `}
`,mr=w.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: linear-gradient(135deg, #ff8f00, #ff6f00);
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
`,yr=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  max-width: 320px;
  min-height: 30px;
`,jr=w.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;
  animation: ${Ue} 0.2s ease;
`,br=w.button`
  padding: 6px 16px;
  border-radius: 6px;
  border: none;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;

  ${e=>{switch(e.$variant){case"primary":return L`
          background: #1565c0;
          color: #fff;
          &:hover { background: #0d47a1; }
        `;case"danger":return L`
          background: #d32f2f;
          color: #fff;
          &:hover { background: #b71c1c; }
        `;default:return L`
          background: #eceff1;
          color: #37474f;
          &:hover { background: #cfd8dc; }
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
`;const Ye=w.hr`
  border: none;
  border-top: 1px dashed #cfd8dc;
  margin: 4px 0;
`,wr=w.div`
  text-align: center;
  padding: 1.2rem 2rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, rgba(21, 101, 192, 0.9), rgba(13, 71, 161, 0.9));
  border: 0.2rem solid rgba(255, 255, 255, 0.3);
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 1.6rem rgba(0, 0, 0, 0.3);
  animation: ${Ue} 0.4s ease;
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
`;const Ze=w.div`
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
`,Qe=w.div`
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
`,Xe=w.div`
  font-size: 2rem;
  font-weight: 800;
  color: #e65100;
  margin-bottom: 1.2rem;
`,en=w.div`
  margin: 0.4rem 0;
  color: #4e342e;
`,kr=w.div`
  margin-top: 1.2rem;
  font-size: 1.8rem;
  font-weight: 800;
  color: #d32f2f;
`,nn=w.div`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
`,rn=w.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  margin-top: 1.6rem;
  flex-wrap: wrap;
`,Y=w.button`
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  font-weight: 700;
  cursor: pointer;
  color: ${e=>e.$variant==="primary"?"#1b5e20":"#37474f"};
  background: ${e=>e.$variant==="primary"?"linear-gradient(135deg, #fdd835, #f9a825)":"#eceff1"};
`,z=v.memo(function({tile:n,jokerTile:r,selected:i,disabled:a,small:s,highlight:t,onClick:l,style:f}){const h=r?F(n,r):!1,p=s?He:me,g=s?Ne:ze,m=i?"#fbc02d":h?xe:"#d0d0d0",$=v.useCallback(()=>{!a&&l&&l(n)},[n,a,l]);return o.jsx(cr,{$selected:i,$disabled:a,$small:s,$highlight:t||h,onClick:$,style:f,children:o.jsxs("svg",{width:s?qe:Ge,height:s?Ve:Je,viewBox:`0 0 ${p} ${g}`,children:[o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:`tileBg-${n.id}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:i?"#fffde7":"#ffffff"}),o.jsx("stop",{offset:"100%",stopColor:i?"#fff9c4":"#f5f0e0"})]}),o.jsxs("linearGradient",{id:`tileHighlight-${n.id}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:"#fff",stopOpacity:.9}),o.jsx("stop",{offset:"100%",stopColor:"#fff",stopOpacity:0})]}),o.jsxs("filter",{id:`tileShadow-${n.id}`,children:[o.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"0.5"}),o.jsx("feOffset",{dx:"0",dy:"1",result:"offsetblur"}),o.jsx("feComponentTransfer",{children:o.jsx("feFuncA",{type:"linear",slope:"0.3"})}),o.jsxs("feMerge",{children:[o.jsx("feMergeNode",{}),o.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),o.jsx("rect",{x:1,y:1,width:p-2,height:g-2,rx:4,ry:4,fill:`url(#tileBg-${n.id})`,stroke:m,strokeWidth:1}),o.jsx("rect",{x:2.5,y:2,width:p-5,height:g*.4,rx:3,ry:3,fill:`url(#tileHighlight-${n.id})`,opacity:.6}),o.jsx("rect",{x:1.5,y:g-3,width:p-3,height:2,rx:1,ry:1,fill:"#000",opacity:.15}),o.jsx("rect",{x:2,y:2,width:p-4,height:g-4,rx:3,ry:3,fill:"none",stroke:"#fff",strokeWidth:.5,opacity:.5}),h&&o.jsx("rect",{x:1.5,y:1.5,width:p-3,height:g-3,rx:3.5,ry:3.5,fill:"none",stroke:xe,strokeWidth:1.2,opacity:.6}),dr(n,r??null,p,g)]})})}),We=v.memo(function({small:n,style:r}){const i=n?He:me,a=n?Ne:ze,s=6;return o.jsx("div",{style:r,children:o.jsxs("svg",{width:n?qe:Ge,height:n?Ve:Je,viewBox:`0 0 ${i} ${a}`,children:[o.jsxs("defs",{children:[o.jsxs("pattern",{id:"backPattern",x:0,y:0,width:s,height:s,patternUnits:"userSpaceOnUse",children:[o.jsx("rect",{width:s,height:s,fill:"#0d47a1"}),o.jsx("circle",{cx:s/2,cy:s/2,r:1,fill:"#1565c0"})]}),o.jsxs("linearGradient",{id:"backGrad",x1:"0",y1:"0",x2:"1",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:"#1976d2"}),o.jsx("stop",{offset:"100%",stopColor:"#0d47a1"})]})]}),o.jsx("rect",{x:.75,y:.75,width:i-1.5,height:a-1.5,rx:3,ry:3,fill:"url(#backGrad)",stroke:"#0d47a1",strokeWidth:1.5}),o.jsx("rect",{x:3,y:3,width:i-6,height:a-6,rx:1.5,ry:1.5,fill:"url(#backPattern)",opacity:.4}),o.jsx("rect",{x:3,y:3,width:i-6,height:a-6,rx:1.5,ry:1.5,fill:"none",stroke:"#64b5f6",strokeWidth:.5,opacity:.4})]})})}),de=v.memo(function({player:n,jokerTile:r,isActive:i,selectedTile:a,onTileClick:s,showHand:t,position:l="bottom"}){const f={east:"东",south:"南",west:"西",north:"北"},h=l!=="bottom";return o.jsxs(pr,{$isActive:i,$position:l,children:[o.jsxs(gr,{$isDealer:n.isDealer,children:[n.name," (",f[n.wind],")"]}),o.jsxs(hr,{children:[o.jsxs(ur,{children:[n.flowers.length>0&&o.jsx(Pe,{children:o.jsx(_e,{children:n.flowers.map(p=>o.jsx(z,{tile:p,jokerTile:r,small:!0,disabled:!0},p.id))})}),n.melds.length>0&&o.jsx(Pe,{children:n.melds.map((p,g)=>o.jsx(_e,{children:p.tiles.map(m=>o.jsx(z,{tile:m,jokerTile:r,small:!0,disabled:!0,highlight:m.id===p.claimedTileId},m.id))},g))})]}),o.jsx(fr,{children:t?o.jsxs(o.Fragment,{children:[re(n.hand).map(p=>o.jsx(z,{tile:p,jokerTile:r,selected:(a==null?void 0:a.id)===p.id,small:h,onClick:s},p.id)),n.lastDrawnTile&&o.jsx(z,{tile:n.lastDrawnTile,jokerTile:r,selected:(a==null?void 0:a.id)===n.lastDrawnTile.id,small:h,onClick:s,style:{marginLeft:"1rem"}},n.lastDrawnTile.id)]}):o.jsxs(o.Fragment,{children:[n.hand.map((p,g)=>o.jsx(We,{small:h},g)),n.lastDrawnTile&&o.jsx(We,{small:h,style:{marginLeft:"1rem"}},"last")]})})]})]})});v.memo(function({player:n,jokerTile:r}){return n.discards.length===0?null:o.jsx(yr,{children:n.discards.map(i=>o.jsx(z,{tile:i,jokerTile:r,small:!0,disabled:!0},i.id))})});const Tr={[y.Win]:{label:"胡",variant:"danger"},[y.RobKong]:{label:"抢杠胡",variant:"danger"},[y.Pong]:{label:"碰",variant:"primary"},[y.Kong]:{label:"杠",variant:"primary"},[y.Chow]:{label:"吃",variant:"primary"},[y.ConcealedKong]:{label:"暗杠",variant:"primary"},[y.AddedKong]:{label:"补杠",variant:"primary"},[y.Discard]:{label:"出牌",variant:"primary"},[y.Pass]:{label:"跳过",variant:"default"}},vr=v.memo(function({actions:n,onAction:r}){return o.jsx(jr,{children:n.map(i=>{const a=Tr[i];return a?o.jsx(br,{$variant:a.variant,onClick:()=>r(i),children:a.label},i):null})})}),Sr=v.memo(function({state:n,winResult:r,onViewTable:i,onContinue:a,onExit:s}){const t=n.players[r.winnerIndex];return o.jsx(Ze,{children:o.jsxs(Qe,{children:[o.jsxs(Xe,{children:[t.name," 胡牌！"]}),r.scoreDetail.details.map((l,f)=>o.jsxs(en,{children:["• ",l]},f)),o.jsxs(kr,{children:["总计: ",r.scoreDetail.finalTotal," 台"]}),o.jsx(Ye,{}),r.settlements.map((l,f)=>o.jsxs(nn,{children:[o.jsx("span",{children:n.players[f].name}),o.jsxs("span",{style:{color:l>=0?"#2e7d32":"#d32f2f",fontWeight:700},children:[l>=0?"+":"",l," 台"]})]},f)),o.jsxs(rn,{children:[o.jsx(Y,{onClick:i,children:"查看牌桌"}),o.jsx(Y,{$variant:"primary",onClick:a,children:"继续"}),o.jsx(Y,{onClick:s,children:"退出"})]})]})})}),$r=v.memo(function({state:n,onViewTable:r,onContinue:i,onExit:a}){return o.jsx(Ze,{children:o.jsxs(Qe,{children:[o.jsx(Xe,{children:"荒庄流局"}),o.jsx(en,{children:"牌山已空，本局无人胡牌"}),o.jsx(Ye,{}),n.players.map((s,t)=>o.jsxs(nn,{children:[o.jsx("span",{children:s.name}),o.jsx("span",{style:{color:"#78909c",fontWeight:700},children:"0 台"})]},t)),o.jsxs(rn,{children:[o.jsx(Y,{onClick:r,children:"查看牌桌"}),o.jsx(Y,{$variant:"primary",onClick:i,children:"继续"}),o.jsx(Y,{onClick:a,children:"退出"})]})]})})}),O=2e3;function ce(e,n){e.discardPool.push(n)}function U(e,n){e.discardPool=e.discardPool.filter(r=>r.id!==n.id);for(const r of e.players)r.discards=r.discards.filter(i=>i.id!==n.id)}const Cr=w.div`
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
`,Dr=w.div`
  width: min(calc(100vmin - 4.8rem), calc(100vh - 18rem), 100%);
  max-height: calc(100vh - 18rem);
  aspect-ratio: 1;
  flex: 0 1 auto;
  display: grid;
  grid-template-columns: minmax(6.4rem, 1fr) minmax(0, 2fr) minmax(6.4rem, 1fr);
  grid-template-rows: minmax(6.4rem, 1fr) minmax(0, 2fr) minmax(6.4rem, 1fr);
  grid-template-areas:
    ". top ."
    "left center right"
    ". bottom .";
  gap: 0;
  min-height: 0;
  overflow: visible;
  position: relative;
  transform: rotateX(40deg) scale(0.96);
  transform-origin: center center;
`,Ir=w.div`
  grid-area: top;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 4px 0;
  overflow: visible;
`,Pr=w.div`
  grid-area: bottom;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 0;
  overflow: visible;
`,_r=w.div`
  grid-area: left;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
`,Wr=w.div`
  grid-area: right;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
`,Ar=w.div`
  grid-area: center;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 2px;
  padding: 8px;
  background: rgba(0,0,0,0.15);
  border-radius: 12px;
  margin: 8px;
  overflow: auto;
  min-height: 0;
  max-height: 100%;
  z-index: 10;
`,Er=w.span`
  font-size: 10px;
  color: rgba(255,255,255,0.6);
`,Kr=w.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 4px 0;
`,Rr=w.div`
  display: flex;
  gap: 1px;
  padding: 4px;
  border: 1.5px solid #90caf9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s;
  background: rgba(255,255,255,0.9);
  &:hover {
    border-color: #1565c0;
    background: #e3f2fd;
  }
`,Fr=w.div`
  width: 100%;
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1.2rem;
  box-sizing: border-box;
  background: rgba(0,0,0,0.2);
  color: rgba(255,255,255,0.85);
  font-size: 1.2rem;
`,Br=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`;function Mr({onExit:e}){const[n,r]=v.useState(null),[i,a]=v.useState(null),[s,t]=v.useState([]),[l,f]=v.useState([]),[h,p]=v.useState(!1),[g,m]=v.useState(""),[$,P]=v.useState(null),[W,I]=v.useState(0),[B,Z]=v.useState(0),H=v.useRef(n);H.current=n;const _=v.useRef();v.useEffect(()=>()=>{_.current&&clearTimeout(_.current)},[]);const G=v.useCallback(()=>{const d=Kn(W,B);if(r(d),a(null),t([]),f([]),p(!1),P(null),m("游戏开始！"),d.players[d.dealerIndex].isAI)_.current=setTimeout(()=>A(d,d.dealerIndex),O);else{const c=V(d,d.dealerIndex);c.length>0&&t([...c,y.Pass])}},[W,B]);v.useEffect(()=>{G()},[]);const R=v.useCallback((d,c)=>{const x=d.players[c];let u=!0,k=!1;for(;u;){u=!1;for(let S=x.hand.length-1;S>=0;S--)if(ne(x.hand[S],d.jokerTile)){if(x.flowers.push(x.hand.splice(S,1)[0]),!Bn(d,c))return k;u=!0,k=!0}}return k},[]),A=v.useCallback((d,c)=>{const x=d.players[c],u=V(d,c),k=Ce(x,u);if(k===y.Win){q(d,c,!0);return}if(k===y.ConcealedKong){const C=De(x,d.jokerTile);if(C&&ve(x,C,d.wall)){R(d,c),d.isKongBloom=!0,r({...d}),_.current=setTimeout(()=>A(d,c),O);return}}if(k===y.AddedKong){const C=Ie(x);if(C&&Se(x,C,d.wall)){R(d,c),d.isKongBloom=!0,r({...d}),_.current=setTimeout(()=>A(d,c),O);return}}const S=he(x,d);ae(x,S),ce(d,S),d.lastDiscardedTile=S,d.lastDiscardPlayerIndex=c,d.isKongBloom=!1,m(`${x.name} 打出 ${Q(S)}`),r({...d}),setTimeout(()=>N(d,S,c),200)},[]),N=v.useCallback((d,c,x)=>{const u=Mn(d,c,x),k=u.find(C=>!d.players[C.playerIndex].isAI);if(k){const C=[...k.actions,y.Pass];t(C),k.options[y.Chow]&&f(k.options[y.Chow]);return}const S=u.find(C=>d.players[C.playerIndex].isAI);if(S){_.current=setTimeout(()=>{te(d,S)},O);return}J(d,x)},[]),te=v.useCallback((d,c)=>{const x=d.players[c.playerIndex],u=Ce(x,c.actions);if(u===y.Win||u===y.RobKong){q(d,c.playerIndex,!1);return}if(u===y.Kong){if(!Te(x,c.triggerTile,d.lastDiscardPlayerIndex,d.wall)){d.phase="draw_game",m("荒庄流局！"),r({...d});return}U(d,c.triggerTile),R(d,c.playerIndex),d.isKongBloom=!0,d.currentPlayerIndex=c.playerIndex,m(`${x.name} 杠！`),r({...d}),_.current=setTimeout(()=>A(d,c.playerIndex),O);return}if(u===y.Pong){we(x,c.triggerTile,d.lastDiscardPlayerIndex),U(d,c.triggerTile),d.currentPlayerIndex=c.playerIndex,m(`${x.name} 碰！`),r({...d}),_.current=setTimeout(()=>{const k=he(x,d);ae(x,k),ce(d,k),d.lastDiscardedTile=k,d.lastDiscardPlayerIndex=c.playerIndex,d.isKongBloom=!1,m(`${x.name} 打出 ${Q(k)}`),r({...d}),N(d,k,c.playerIndex)},O);return}if(u===y.Chow){const k=c.options[y.Chow]||[],S=Un(k);if(S.length>0){ke(x,c.triggerTile,S,d.lastDiscardPlayerIndex),U(d,c.triggerTile),d.currentPlayerIndex=c.playerIndex,m(`${x.name} 吃！`),r({...d}),_.current=setTimeout(()=>{const C=he(x,d);ae(x,C),ce(d,C),d.lastDiscardedTile=C,d.lastDiscardPlayerIndex=c.playerIndex,d.isKongBloom=!1,m(`${x.name} 打出 ${Q(C)}`),r({...d}),N(d,C,c.playerIndex)},O);return}}J(d,d.lastDiscardPlayerIndex)},[]),J=v.useCallback((d,c)=>{const x=$e(c);if(qn(d)){d.phase="draw_game",m("荒庄流局！"),r({...d});return}const u=Fn(d,x);if(!u){d.phase="draw_game",m("荒庄流局！"),r({...d});return}if(d.currentPlayerIndex=x,R(d,x),r({...d}),d.players[x].isAI)_.current=setTimeout(()=>A(d,x),O);else{m(`你摸了一张 ${Q(u)}`);const k=V(d,x);k.length>0?t([...k,y.Pass]):t([])}},[]),q=v.useCallback((d,c,x)=>{const u=d.players[c],k=Dn(u.hand,u.melds,d.jokerTile);if(k.length===0)return;const S=k[0],C=Gn(d,c,S,!1,x),ue=Jn(d,c,d.lastDiscardPlayerIndex,C);d.phase="win",r({...d}),t([]),m(`${u.name} ${x?"自摸":"胡牌"}！`),P({winnerIndex:c,loserIndex:d.lastDiscardPlayerIndex,scoreDetail:C,settlements:ue}),c===d.dealerIndex?Z(tn=>tn+1):(Z(0),I($e(d.dealerIndex)))},[]),ie=v.useCallback(d=>{const c=H.current;if(!c)return;const x=0,u=c.players[x];switch(d){case y.Win:{q(c,x,c.currentPlayerIndex===x);break}case y.Pong:{if(!c.lastDiscardedTile)break;we(u,c.lastDiscardedTile,c.lastDiscardPlayerIndex),U(c,c.lastDiscardedTile),c.currentPlayerIndex=x,m("你碰了！请出牌"),t([]),r({...c});break}case y.Kong:{if(!c.lastDiscardedTile)break;Te(u,c.lastDiscardedTile,c.lastDiscardPlayerIndex,c.wall),U(c,c.lastDiscardedTile),R(c,x),c.currentPlayerIndex=x,c.isKongBloom=!0,m("你杠了！"),t([]),r({...c});const k=V(c,x);k.length>0&&t([...k,y.Pass]);break}case y.Chow:{p(!0);break}case y.ConcealedKong:{const k=De(u,c.jokerTile);if(k){ve(u,k,c.wall),R(c,x),c.isKongBloom=!0,m("你暗杠了！"),t([]),r({...c});const S=V(c,x);S.length>0&&t([...S,y.Pass])}break}case y.AddedKong:{const k=Ie(u);if(k){Se(u,k,c.wall),R(c,x),c.isKongBloom=!0,m("你补杠了！"),t([]),r({...c});const S=V(c,x);S.length>0&&t([...S,y.Pass])}break}case y.Pass:{t([]),p(!1),c.lastDiscardedTile&&c.currentPlayerIndex!==x&&J(c,c.lastDiscardPlayerIndex);break}}},[]),oe=v.useCallback(d=>{const c=H.current;if(!c||!c.lastDiscardedTile)return;const x=c.players[0];ke(x,c.lastDiscardedTile,d,c.lastDiscardPlayerIndex),U(c,c.lastDiscardedTile),c.currentPlayerIndex=0,p(!1),f([]),t([]),m("你吃了！请出牌"),r({...c})},[]),se=v.useCallback(d=>{const c=H.current;if(!(!c||c.phase!=="playing")&&c.currentPlayerIndex===0)if((i==null?void 0:i.id)===d.id){const x=Le(d,c.players[0],c,Oe);if(!x.valid){m(x.message||"不能打出这张牌"),a(null);return}ae(c.players[0],d),ce(c,d),c.lastDiscardedTile=d,c.lastDiscardPlayerIndex=0,c.isKongBloom=!1,a(null),t([]),f([]),m(`你打出 ${Q(d)}`),r({...c}),setTimeout(()=>N(c,d,0),200)}else a(d)},[i]);if(!n)return null;const le=n.players[0];return o.jsxs(Cr,{children:[o.jsxs(Fr,{children:[o.jsxs("span",{children:["剩余: ",n.wall.length,"张"]}),n.jokerTile&&o.jsxs(mr,{children:["财神: ",o.jsx(z,{tile:n.jokerTile,jokerTile:n.jokerTile,small:!0,disabled:!0})]}),o.jsxs("span",{children:["连庄: ",n.dealerStreakCount]})]}),g&&o.jsx(wr,{children:g}),o.jsxs(Dr,{children:[o.jsx(Ir,{children:o.jsx(de,{player:n.players[2],jokerTile:n.jokerTile,isActive:n.currentPlayerIndex===2,selectedTile:null,showHand:n.phase==="win"||n.phase==="draw_game",position:"top"})}),o.jsx(_r,{children:o.jsx(de,{player:n.players[3],jokerTile:n.jokerTile,isActive:n.currentPlayerIndex===3,selectedTile:null,showHand:n.phase==="win"||n.phase==="draw_game",position:"left"})}),o.jsx(Ar,{children:n.discardPool.map(d=>o.jsx(z,{tile:d,jokerTile:n.jokerTile,small:!0,disabled:!0},d.id))}),o.jsx(Wr,{children:o.jsx(de,{player:n.players[1],jokerTile:n.jokerTile,isActive:n.currentPlayerIndex===1,selectedTile:null,showHand:n.phase==="win"||n.phase==="draw_game",position:"right"})}),o.jsxs(Pr,{children:[o.jsx(de,{player:le,jokerTile:n.jokerTile,isActive:n.currentPlayerIndex===0,selectedTile:i,onTileClick:se,showHand:!0,position:"bottom"}),o.jsxs(Br,{children:[s.length>0&&n.phase==="playing"&&o.jsx(vr,{actions:s,onAction:ie}),h&&l.length>0&&o.jsxs("div",{children:[o.jsx(Er,{children:"选择吃牌组合:"}),o.jsx(Kr,{children:l.map((d,c)=>o.jsx(Rr,{onClick:()=>oe(d),children:d.map(x=>o.jsx(z,{tile:x,jokerTile:n.jokerTile,small:!0,disabled:!0},x.id))},c))})]})]})]})]}),$&&o.jsx(Sr,{state:n,winResult:$,onViewTable:()=>P(null),onContinue:G,onExit:e}),n.phase==="draw_game"&&!$&&o.jsx($r,{state:n,onViewTable:()=>{},onContinue:G,onExit:e})]})}function Or(){const[e,n]=v.useState(!1),r=v.useCallback(()=>{n(!0)},[]),i=v.useCallback(()=>{n(!1)},[]);return e?o.jsx(Mr,{onExit:i}):o.jsx(un,{onStartGame:r})}function Hr(){return o.jsx(Or,{})}const Nr={title:"乐清麻将",needBackIcon:!0};export{Hr as Component,Nr as handle};
