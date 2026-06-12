import { Tile, Suit } from './type';
import { isJokerTile } from './util';

// ============================================================
// 牌面颜色 & SVG 常量
// ============================================================

export const SUIT_COLORS: Record<Suit, string> = {
  [Suit.Wan]: '#d32f2f',
  [Suit.Tong]: '#1565c0',
  [Suit.Tiao]: '#2e7d32',
  [Suit.Feng]: '#37474f',
};

export const JOKER_COLOR = '#ff6f00';

export function getTileColor(tile: Tile, jokerTile: Tile | null): string {
  if (isJokerTile(tile, jokerTile)) return JOKER_COLOR;
  return SUIT_COLORS[tile.suit] || '#333';
}

export const TILE_W = 36;
export const TILE_H = 50;
export const TILE_W_SM = 28;
export const TILE_H_SM = 38;

// ============================================================
// SVG 牌面绘制辅助（10%边距，内容撑满80%）
// ============================================================

/** 筒子: 同心圆 */
function renderTongSvg(value: number, color: string, cx: number, cy: number, scale: number, width: number, height: number): JSX.Element[] {
  // 一饼特殊处理：花瓣纹饰
  if (value === 1) {
    return renderOneTongSvg(cx, cy, scale, width, height);
  }
  
  const positions = getTongPositions(value, cx, cy, scale, width, height);
  // 2-4筒较小，5-9筒较大
  const radius = value <= 4 ? 4.2 * scale : 3.8 * scale;
  return positions.map((pos, i) => (
    <g key={i}>
      <circle cx={pos.x} cy={pos.y} r={radius} fill="none" stroke={color} strokeWidth={1.3 * scale} />
      <circle cx={pos.x} cy={pos.y} r={radius * 0.45} fill={color} />
    </g>
  ));
}

/** 一饼：花瓣纹饰外套圆形 */
function renderOneTongSvg(cx: number, cy: number, scale: number, width: number, height: number): JSX.Element[] {
  const petalCount = 8;
  const outerRadius = Math.min(width, height) * 0.35;
  const innerRadius = outerRadius * 0.5;
  const petals = [];
  
  for (let i = 0; i < petalCount; i++) {
    const angle = (i * 360 / petalCount) * Math.PI / 180;
    const petalX = cx + Math.cos(angle) * outerRadius * 0.65;
    const petalY = cy + Math.sin(angle) * outerRadius * 0.65;
    petals.push(
      <ellipse
        key={`petal-${i}`}
        cx={petalX}
        cy={petalY}
        rx={outerRadius * 0.28}
        ry={outerRadius * 0.16}
        fill="#1565c0"
        transform={`rotate(${i * 360 / petalCount} ${petalX} ${petalY})`}
      />
    );
  }
  
  return [
    ...petals,
    <circle key="outer" cx={cx} cy={cy} r={outerRadius} fill="none" stroke="#1565c0" strokeWidth={1.5 * scale} />,
    <circle key="inner" cx={cx} cy={cy} r={innerRadius} fill="#1565c0" />,
  ];
}

function getTongPositions(count: number, cx: number, cy: number, _scale: number, width: number, height: number) {
  // 10%边距，内容区域80%
  const contentW = width * 0.8;
  const contentH = height * 0.8;
  
  const layouts: Record<number, { x: number; y: number }[]> = {
    2: [
      { x: 0, y: -contentH * 0.25 },
      { x: 0, y: contentH * 0.25 },
    ],
    3: [
      // 3筒：斜着排列（右上到左下）
      { x: contentW * 0.3, y: -contentH * 0.35 },
      { x: 0, y: 0 },
      { x: -contentW * 0.3, y: contentH * 0.35 },
    ],
    4: [
      { x: -contentW * 0.25, y: -contentH * 0.25 },
      { x: contentW * 0.25, y: -contentH * 0.25 },
      { x: -contentW * 0.25, y: contentH * 0.25 },
      { x: contentW * 0.25, y: contentH * 0.25 },
    ],
    5: [
      { x: -contentW * 0.25, y: -contentH * 0.25 },
      { x: contentW * 0.25, y: -contentH * 0.25 },
      { x: 0, y: 0 },
      { x: -contentW * 0.25, y: contentH * 0.25 },
      { x: contentW * 0.25, y: contentH * 0.25 },
    ],
    6: [
      { x: -contentW * 0.25, y: -contentH * 0.35 },
      { x: contentW * 0.25, y: -contentH * 0.35 },
      { x: -contentW * 0.25, y: 0 },
      { x: contentW * 0.25, y: 0 },
      { x: -contentW * 0.25, y: contentH * 0.35 },
      { x: contentW * 0.25, y: contentH * 0.35 },
    ],
    7: [
      // 上面3个斜着（整体更高，倾斜角度更大）
      { x: contentW * 0.35, y: -contentH * 0.35 },
      { x: 0, y: -contentH * 0.25 },
      { x: -contentW * 0.35, y: -contentH * 0.15 },
      // 下面4个
      { x: -contentW * 0.25, y: contentH * 0.15 },
      { x: contentW * 0.25, y: contentH * 0.15 },
      { x: -contentW * 0.25, y: contentH * 0.4 },
      { x: contentW * 0.25, y: contentH * 0.4 },
    ],
    8: [
      { x: -contentW * 0.25, y: -contentH * 0.35 },
      { x: contentW * 0.25, y: -contentH * 0.35 },
      { x: -contentW * 0.25, y: -contentH * 0.12 },
      { x: contentW * 0.25, y: -contentH * 0.12 },
      { x: -contentW * 0.25, y: contentH * 0.12 },
      { x: contentW * 0.25, y: contentH * 0.12 },
      { x: -contentW * 0.25, y: contentH * 0.35 },
      { x: contentW * 0.25, y: contentH * 0.35 },
    ],
    9: [
      { x: -contentW * 0.35, y: -contentH * 0.35 },
      { x: 0, y: -contentH * 0.35 },
      { x: contentW * 0.35, y: -contentH * 0.35 },
      { x: -contentW * 0.35, y: 0 },
      { x: 0, y: 0 },
      { x: contentW * 0.35, y: 0 },
      { x: -contentW * 0.35, y: contentH * 0.35 },
      { x: 0, y: contentH * 0.35 },
      { x: contentW * 0.35, y: contentH * 0.35 },
    ],
  };
  return (layouts[count] || []).map((p) => ({ x: cx + p.x, y: cy + p.y }));
}

/** 条子: 竹子（节点+连线） */
function renderTiaoSvg(value: number, color: string, cx: number, cy: number, scale: number, width: number, height: number): JSX.Element[] {
  // 一条特殊处理：公鸡图案
  if (value === 1) {
    return renderRoosterSvg(cx, cy, scale, width, height);
  }
  
  // 8条特殊处理：W+M形
  if (value === 8) {
    return renderEightTiaoSvg(color, cx, cy, scale, width, height);
  }
  
  const positions = getTiaoPositions(value, cx, cy, scale, width, height);
  const nodeR = 2 * scale;
  const stickLen = 9 * scale;
  
  return positions.map((pos, i) => {
    // 每根竹子：3个节点（上、中、下）+ 2条连线
    const topY = pos.y - stickLen / 2;
    const midY = pos.y;
    const bottomY = pos.y + stickLen / 2;
    
    return (
      <g key={i}>
        {/* 连线 */}
        <line x1={pos.x} y1={topY} x2={pos.x} y2={bottomY}
          stroke={color} strokeWidth={2.5 * scale} strokeLinecap="round" />
        {/* 3个节点 */}
        <circle cx={pos.x} cy={topY} r={nodeR} fill={color} />
        <circle cx={pos.x} cy={midY} r={nodeR} fill={color} />
        <circle cx={pos.x} cy={bottomY} r={nodeR} fill={color} />
      </g>
    );
  });
}

/** 8条：8根竹子（每根3节），上半W形+下半M形，中间空行 */
function renderEightTiaoSvg(color: string, cx: number, cy: number, scale: number, width: number, height: number): JSX.Element[] {
  const contentW = width * 0.7;
  const contentH = height * 0.7;
  const nodeR = 2 * scale;
  
  // 6行7列网格坐标（去掉中间空行，缩小间隙）
  const gridX = (col: number) => cx - contentW / 2 + (col / 6) * contentW;
  const gridY = (row: number) => cy - contentH / 2 + (row / 5) * contentH;
  
  // 8根竹子，每根3个节点坐标（row, col）
  const bamboos = [
    // 上半部分（W形）
    [[0,1], [1,1], [2,1]],   // 左柱
    [[0,5], [1,5], [2,5]],   // 右柱
    [[0,3], [1,2], [2,1]],   // 左斜（直线，与左柱在(2,1)重合）
    [[0,3], [1,4], [2,5]],   // 右斜（直线，与右柱在(2,5)重合，与左斜共享(0,3)）
    // 下半部分（M形，上下镜像）
    [[3,1], [4,1], [5,1]],   // 左柱
    [[3,5], [4,5], [5,5]],   // 右柱
    [[3,1], [4,2], [5,3]],   // 左斜（直线，与左柱在(3,1)重合）
    [[3,5], [4,4], [5,3]],   // 右斜（直线，与右柱在(3,5)重合，与左斜共享(5,3)）
  ];
  
  const elements: JSX.Element[] = [];
  
  bamboos.forEach((nodes, bambooIdx) => {
    const points = nodes.map(([row, col]) => ({ x: gridX(col), y: gridY(row) }));
    
    // 连线（竹节之间的连接）
    for (let i = 0; i < points.length - 1; i++) {
      elements.push(
        <line key={`line-${bambooIdx}-${i}`}
          x1={points[i].x} y1={points[i].y}
          x2={points[i + 1].x} y2={points[i + 1].y}
          stroke={color} strokeWidth={2.5 * scale} strokeLinecap="round"
        />
      );
    }
    
    // 竹节节点
    points.forEach((point, nodeIdx) => {
      elements.push(
        <circle key={`node-${bambooIdx}-${nodeIdx}`}
          cx={point.x} cy={point.y} r={nodeR} fill={color}
        />
      );
    });
  });
  
  return elements;
}

function getTiaoPositions(count: number, cx: number, cy: number, _scale: number, width: number, height: number) {
  const contentW = width * 0.8;
  const contentH = height * 0.8;
  
  const layouts: Record<number, { x: number; y: number }[]> = {
    2: [
      { x: 0, y: -contentH * 0.2 },
      { x: 0, y: contentH * 0.2 },
    ],
    3: [
      // 3条：3行3列（010,000,101）
      { x: 0, y: -contentH * 0.25 }, // 第1行中间
      { x: -contentW * 0.35, y: contentH * 0.25 }, // 第3行左
      { x: contentW * 0.35, y: contentH * 0.25 }, // 第3行右
    ],
    4: [
      { x: -contentW * 0.25, y: -contentH * 0.2 },
      { x: contentW * 0.25, y: -contentH * 0.2 },
      { x: -contentW * 0.25, y: contentH * 0.2 },
      { x: contentW * 0.25, y: contentH * 0.2 },
    ],
    5: [
      { x: -contentW * 0.25, y: -contentH * 0.3 },
      { x: contentW * 0.25, y: -contentH * 0.3 },
      { x: 0, y: 0 },
      { x: -contentW * 0.25, y: contentH * 0.3 },
      { x: contentW * 0.25, y: contentH * 0.3 },
    ],
    6: [
      // 上面3条
      { x: -contentW * 0.3, y: -contentH * 0.25 },
      { x: 0, y: -contentH * 0.25 },
      { x: contentW * 0.3, y: -contentH * 0.25 },
      // 下面3条
      { x: -contentW * 0.3, y: contentH * 0.25 },
      { x: 0, y: contentH * 0.25 },
      { x: contentW * 0.3, y: contentH * 0.25 },
    ],
    7: [
      // 1+3+3布局
      { x: 0, y: -contentH * 0.35 },
      { x: -contentW * 0.3, y: 0 },
      { x: 0, y: 0 },
      { x: contentW * 0.3, y: 0 },
      { x: -contentW * 0.3, y: contentH * 0.35 },
      { x: 0, y: contentH * 0.35 },
      { x: contentW * 0.3, y: contentH * 0.35 },
    ],
    8: [
      // W+M布局
      { x: -contentW * 0.35, y: -contentH * 0.3 },
      { x: -contentW * 0.12, y: -contentH * 0.15 },
      { x: contentW * 0.12, y: -contentH * 0.15 },
      { x: contentW * 0.35, y: -contentH * 0.3 },
      { x: -contentW * 0.35, y: contentH * 0.3 },
      { x: -contentW * 0.12, y: contentH * 0.15 },
      { x: contentW * 0.12, y: contentH * 0.15 },
      { x: contentW * 0.35, y: contentH * 0.3 },
    ],
    9: [
      { x: -contentW * 0.35, y: -contentH * 0.35 },
      { x: 0, y: -contentH * 0.35 },
      { x: contentW * 0.35, y: -contentH * 0.35 },
      { x: -contentW * 0.35, y: 0 },
      { x: 0, y: 0 },
      { x: contentW * 0.35, y: 0 },
      { x: -contentW * 0.35, y: contentH * 0.35 },
      { x: 0, y: contentH * 0.35 },
      { x: contentW * 0.35, y: contentH * 0.35 },
    ],
  };
  return (layouts[count] || []).map((p) => ({ x: cx + p.x, y: cy + p.y }));
}

/** 一条：公鸡图案 */
function renderRoosterSvg(cx: number, cy: number, _scale: number, width: number, height: number): JSX.Element[] {
  const size = Math.min(width, height) * 0.8;
  return [
    <ellipse key="body" cx={cx} cy={cy + size * 0.15} rx={size * 0.3} ry={size * 0.35} fill="#2e7d32" />,
    <circle key="head" cx={cx} cy={cy - size * 0.25} r={size * 0.18} fill="#2e7d32" />,
    <path key="comb" d={`M ${cx - size * 0.1} ${cy - size * 0.4} 
      Q ${cx - size * 0.15} ${cy - size * 0.55} ${cx - size * 0.07} ${cy - size * 0.5}
      Q ${cx} ${cy - size * 0.6} ${cx + size * 0.07} ${cy - size * 0.5}
      Q ${cx + size * 0.15} ${cy - size * 0.55} ${cx + size * 0.1} ${cy - size * 0.4} Z`}
      fill="#d32f2f" />,
    <circle key="eye-white" cx={cx + size * 0.06} cy={cy - size * 0.28} r={size * 0.06} fill="#fff" />,
    <circle key="eye-black" cx={cx + size * 0.06} cy={cy - size * 0.28} r={size * 0.03} fill="#000" />,
    <path key="beak" d={`M ${cx + size * 0.15} ${cy - size * 0.25} 
      L ${cx + size * 0.25} ${cy - size * 0.22} 
      L ${cx + size * 0.15} ${cy - size * 0.19} Z`}
      fill="#ff8f00" />,
    <path key="tail" d={`M ${cx - size * 0.15} ${cy + size * 0.35} 
      Q ${cx - size * 0.35} ${cy + size * 0.2} ${cx - size * 0.28} ${cy + size * 0.5}
      Q ${cx - size * 0.2} ${cy + size * 0.4} ${cx - size * 0.15} ${cy + size * 0.35} Z`}
      fill="#1b5e20" />,
    <line key="leg1" x1={cx - size * 0.08} y1={cy + size * 0.4} x2={cx - size * 0.12} y2={cy + size * 0.55} 
      stroke="#ff6f00" strokeWidth={size * 0.06} />,
    <line key="leg2" x1={cx + size * 0.08} y1={cy + size * 0.4} x2={cx + size * 0.12} y2={cy + size * 0.55} 
      stroke="#ff6f00" strokeWidth={size * 0.06} />,
  ];
}

/** 万字: 中文数字 + "萬" 文字（同大） */
function renderWanSvg(value: number, cx: number, cy: number, _scale: number, _width: number, height: number): JSX.Element[] {
  const CHINESE_NUMS = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];
  const fontSize = height * 0.32;
  return [
    <text key="num" x={cx} y={cy - height * 0.18} textAnchor="middle" dominantBaseline="middle" 
      fontSize={fontSize} fontWeight={700} fill="#333">
      {CHINESE_NUMS[value - 1]}
    </text>,
    <text key="wan" x={cx} y={cy + height * 0.22} textAnchor="middle" dominantBaseline="middle" 
      fontSize={fontSize} fontWeight={700} fill="#d32f2f">
      萬
    </text>,
  ];
}

/** 字牌: 单字渲染 */
const FENG_DISPLAY: Record<string, { char: string; color: string }> = {
  dong: { char: '東', color: '#333' },  // 黑色
  nan: { char: '南', color: '#333' },   // 黑色
  xi: { char: '西', color: '#333' },    // 黑色
  bei: { char: '北', color: '#333' },   // 黑色
  zhong: { char: '中', color: '#d32f2f' }, // 红色
  fa: { char: '發', color: '#2e7d32' },    // 绿色
  bai: { char: '白', color: '#78909c' },   // 特殊处理
};

/** 白板：大小两个矩形，四角连线窗框（70%大小） */
function renderBaiBanSvg(cx: number, cy: number, scale: number, width: number, height: number): JSX.Element[] {
  const outerW = width * 0.7;
  const outerH = height * 0.7;
  const innerW = outerW * 0.7;
  const innerH = outerH * 0.7;
  const cornerLen = Math.min(outerW, outerH) * 0.12;
  
  return [
    <rect key="outer" x={cx - outerW / 2} y={cy - outerH / 2} 
      width={outerW} height={outerH} rx={2 * scale} 
      fill="none" stroke="#78909c" strokeWidth={1.5 * scale} />,
    <rect key="inner" x={cx - innerW / 2} y={cy - innerH / 2} 
      width={innerW} height={innerH} rx={1.5 * scale} 
      fill="none" stroke="#78909c" strokeWidth={1.2 * scale} />,
    <line key="tl1" x1={cx - outerW / 2} y1={cy - outerH / 2 + cornerLen} 
      x2={cx - innerW / 2} y2={cy - innerH / 2} 
      stroke="#78909c" strokeWidth={1 * scale} />,
    <line key="tl2" x1={cx - outerW / 2 + cornerLen} y1={cy - outerH / 2} 
      x2={cx - innerW / 2} y2={cy - innerH / 2} 
      stroke="#78909c" strokeWidth={1 * scale} />,
    <line key="tr1" x1={cx + outerW / 2} y1={cy - outerH / 2 + cornerLen} 
      x2={cx + innerW / 2} y2={cy - innerH / 2} 
      stroke="#78909c" strokeWidth={1 * scale} />,
    <line key="tr2" x1={cx + outerW / 2 - cornerLen} y1={cy - outerH / 2} 
      x2={cx + innerW / 2} y2={cy - innerH / 2} 
      stroke="#78909c" strokeWidth={1 * scale} />,
    <line key="bl1" x1={cx - outerW / 2} y1={cy + outerH / 2 - cornerLen} 
      x2={cx - innerW / 2} y2={cy + innerH / 2} 
      stroke="#78909c" strokeWidth={1 * scale} />,
    <line key="bl2" x1={cx - outerW / 2 + cornerLen} y1={cy + outerH / 2} 
      x2={cx - innerW / 2} y2={cy + innerH / 2} 
      stroke="#78909c" strokeWidth={1 * scale} />,
    <line key="br1" x1={cx + outerW / 2} y1={cy + outerH / 2 - cornerLen} 
      x2={cx + innerW / 2} y2={cy + innerH / 2} 
      stroke="#78909c" strokeWidth={1 * scale} />,
    <line key="br2" x1={cx + outerW / 2 - cornerLen} y1={cy + outerH / 2} 
      x2={cx + innerW / 2} y2={cy + innerH / 2} 
      stroke="#78909c" strokeWidth={1 * scale} />,
  ];
}

function renderFengSvg(value: string, cx: number, cy: number, scale: number, width: number, height: number): JSX.Element[] {
  const info = FENG_DISPLAY[value] || { char: '?', color: '#333' };
  if (value === 'bai') {
    return renderBaiBanSvg(cx, cy, scale, width, height);
  }
  const fontSize = height * 0.45;
  return [
    <text key="char" x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" 
      fontSize={fontSize} fontWeight={800} fill={info.color}>
      {info.char}
    </text>,
  ];
}

/** 牌面 SVG 内容 */
export function renderTileContent(tile: Tile, jokerTile: Tile | null, width: number, height: number): JSX.Element {
  const cx = width / 2;
  const cy = height / 2;
  const scale = width / TILE_W;
  const color = getTileColor(tile, jokerTile);

  let content: JSX.Element[] = [];

  if (tile.suit === Suit.Feng) {
    content = renderFengSvg(tile.value as string, cx, cy, scale, width, height);
  } else {
    const numVal = tile.value as number;
    switch (tile.suit) {
      case Suit.Tong:
        content = renderTongSvg(numVal, color, cx, cy, scale, width, height);
        break;
      case Suit.Tiao:
        content = renderTiaoSvg(numVal, color, cx, cy, scale, width, height);
        break;
      case Suit.Wan:
        content = renderWanSvg(numVal, cx, cy, scale, width, height);
        break;
    }
  }

  return <>{content}</>;
}
