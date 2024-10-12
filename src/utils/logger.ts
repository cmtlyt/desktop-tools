export type Kind = 'info' | 'warn' | 'error' | 'debug' | 'success';

type LoggerConfigObj = Record<Kind, LoggerConfig>;

export type Logger = Record<Kind, (...args: unknown[]) => void>;

interface StyleConfig {
  tagColor?: string;
  tagBg?: string;
  contentColor?: string;
  contentBg?: string;
  borderColor?: string;
  style?: (config: LoggerConfig) => {
    tagStyle: string;
    contentStyle: string;
  };
}

interface LoggerConfig<T = ''> extends StyleConfig {
  kind: Kind | T;
  inherit?: Kind | T;
  noOutput?: boolean;
  needTrace?: boolean;
}

interface ContentInfo {
  text: string;
  length: number;
  hasChinese: boolean;
}

interface LogEvent<T> {
  kind: Kind | T;
  messages: unknown[];
  logConf: LoggerConfig<T>;
  preventDefault: () => void;
}

type LoggerOptions<T extends string = '', E = unknown> = {
  needTrace?: boolean;
  noOutput?: boolean;
  logConfig?: Partial<LoggerConfigObj> & { [key in T]: LoggerConfig<T> };
  /** 该配置会覆盖 getPrintFunc 配置, 推荐优先使用 getPrintFunc */
  printFunc?: ((...args: unknown[]) => void) | null;
  getPrintFunc?: (this: LoggerOptions<T, E>, kind: Kind | T) => ((...args: unknown[]) => void) | null;
  onLogBefore?: (this: LoggerOptions<T, E>, event: LogEvent<T>) => void;
} & E;

enum LogThrow {
  PREVENT_DEFAULT = 'cl:logger:preventDefault',
  NO_OUTPUT = 'cl:logger:noOutput',
}

const confMap = new WeakMap<object, { userOption: LoggerOptions; conf: LoggerConfigObj }>();

function generateLoggerConfig(logConfig?: Partial<LoggerConfigObj>): LoggerConfigObj {
  const conf: LoggerConfigObj = {
    info: {
      kind: 'info',
      tagColor: '#000',
      tagBg: '#d9d9d9',
      contentColor: '#000',
      contentBg: '#fff',
      borderColor: '#d9d9d9',
    },
    warn: {
      kind: 'warn',
      tagColor: '#fff',
      tagBg: '#fa8c16',
      contentColor: '#000',
      contentBg: '#fff',
      borderColor: '#fa8c16',
    },
    error: {
      kind: 'error',
      tagColor: '#fff',
      tagBg: '#f5222d',
      contentColor: '#000',
      contentBg: '#fff',
      borderColor: '#f5222d',
    },
    debug: {
      kind: 'debug',
      tagColor: '#fff',
      tagBg: '#eb2f96',
      contentColor: '#000',
      contentBg: '#fff',
      borderColor: '#eb2f96',
    },
    success: {
      kind: 'success',
      tagColor: '#fff',
      tagBg: '#389e0d',
      contentColor: '#000',
      contentBg: '#fff',
      borderColor: '#389e0d',
    },
  };
  if (logConfig) {
    Object.entries(logConfig).forEach(([key, item]) => {
      const { inherit, ...userConf } = item;
      if (inherit) {
        const inheritConf = conf[inherit as Kind];
        Object.assign(item, { ...inheritConf, ...userConf });
      }
      if (key in conf) Object.assign(conf[key as Kind], item);
      else conf[key as Kind] = item;
    });
  }
  return conf;
}

// 判断是否为双字节字符
function hasDoubleByteChar(char: string) {
  if (char.length === 1) {
    const charCode = char.charCodeAt(0);
    return charCode > 255;
  }
  // eslint-disable-next-line no-control-regex
  return /[^\x00-\xFF]/.test(char);
}

function getContentInfo(args: unknown[]): ContentInfo[] {
  return args
    .map((item) => (typeof item === 'object' ? JSON.stringify(item, null, 2) : item))
    .join(' ')
    .split('\n')
    .map((text) => {
      // TODO:尽量能正确获取宽度或者找到中英文等宽字体
      let length = 0;
      let hasChinese = false;
      for (let i = 0, char = text[i]; i < text.length; char = text[++i]) {
        if (hasDoubleByteChar(char)) {
          length += 2;
          hasChinese = true;
        } else length += 1;
      }
      return { text, length, hasChinese };
    });
}

function joinContentInfo(contentInfo: ContentInfo[], lineWidth: number) {
  return contentInfo.map((info) => `${info.text}${' '.repeat(lineWidth - info.length)}`).join('%c\n%c');
}

const fontStyle = `line-height:1.5;`;
const lineBreakStyle = `${fontStyle}`;

function generateContentStyles(contentInfo: ContentInfo[], baseContentStyle: string) {
  return contentInfo.length === 1
    ? [baseContentStyle]
    : contentInfo
        .map((_, idx) => {
          if (idx === 0) {
            return [`${baseContentStyle}border-radius:0 0.4rem 0 0;`];
          }
          if (idx === contentInfo.length - 1) {
            return [lineBreakStyle, `${baseContentStyle}border-top:none;border-top-right-radius:0;`];
          }
          return [lineBreakStyle, `${baseContentStyle}border-top:none;border-radius:0;`];
        })
        .flat();
}

function getLineWidth(contentInfo: ContentInfo[]) {
  if (contentInfo.length > 1 && contentInfo.some((info) => info.hasChinese)) return 500;
  return Math.max(10, Math.max(...contentInfo.map((info) => info.length)));
}

function getTrace() {
  const stack = new Error().stack;
  if (!stack) return '';
  const lines = stack.split('\n');
  const findWrapperIndex = lines.findIndex((line) => line.includes('Proxy')) + 1;
  if (!findWrapperIndex) return '无法正确读取位置请使用实例调用, 如需解构请使用bind将this指向实例';
  const line = lines[findWrapperIndex];
  const match = line.match(/at\s.*?(?:\()(.*?)(?:\))/);
  if (!match) return line;
  return match[1];
}

function generateMessage(userConfig: LoggerOptions, logConf: LoggerConfig, ...messages: unknown[]): string[] {
  const { needTrace: globalNeedTrace, noOutput: globalNoOutput, onLogBefore } = userConfig;
  const {
    kind,
    tagColor,
    tagBg,
    contentColor,
    contentBg,
    borderColor,
    style,
    noOutput = globalNoOutput,
    needTrace = globalNeedTrace,
  } = logConf;

  if (onLogBefore) {
    let preventDefault = false;
    const event = { kind, messages, logConf, preventDefault: () => (preventDefault = true) };
    onLogBefore?.call(userConfig, event);
    if (preventDefault) throw LogThrow.PREVENT_DEFAULT;
  }

  if (noOutput) throw LogThrow.NO_OUTPUT;

  const tag = `${kind.toUpperCase()}`;
  const contentInfo = getContentInfo(messages);
  const shareStyle = `${fontStyle}padding:0.1rem 0.4rem;border:0.1rem solid ${borderColor};`;
  const { tagStyle, contentStyle } = style?.(logConf) || {
    tagStyle: `${shareStyle}color:${tagColor};background:${tagBg};border-radius:0.4rem 0.4rem 0 0;`,
    contentStyle: `${shareStyle}margin-top:-0.12rem;color:${contentColor};background:${contentBg};border-radius:0 0.4rem 0.4rem;`,
  };
  const lineWidth = getLineWidth(contentInfo);
  const contentStyles = generateContentStyles(contentInfo, contentStyle);
  const finishedContent = joinContentInfo(contentInfo, lineWidth);

  let message = `%c${tag}%c\n%c${finishedContent}`;
  const styles = [tagStyle, lineBreakStyle, ...contentStyles];

  if (needTrace) {
    const trace = getTrace();
    const traceTagStyle = `${tagStyle}margin-top:0.2rem;border-radius:0.4rem 0.4rem 0 0;`;
    const traceStyle = `${contentStyle}`;

    message += `%c\n%cTRACE%c\n%c${trace}`;
    styles.push(lineBreakStyle, traceTagStyle, lineBreakStyle, traceStyle);
  }

  return [message, ...styles];
}

function messageCatch(error: LogThrow) {
  switch (error) {
    case LogThrow.PREVENT_DEFAULT:
    case LogThrow.NO_OUTPUT:
      break;
    default:
      error satisfies never;
      throw error;
  }
}

const handler: ProxyHandler<Logger> = {
  get(target, key: Kind) {
    const { userOption = {}, conf: curConf } = confMap.get(target) || {};
    if (!curConf) throw new Error('illegal call');

    const { getPrintFunc = () => console.log, printFunc } = userOption || {};

    const finishedPrintFunc = printFunc || getPrintFunc.call(target as LoggerOptions, key);

    if (!(key in curConf)) {
      console.warn(`not found [${key}] logConfig, please add logConfig, currently using log replacement`);
    }
    const logConf = curConf[key] || { ...curConf['info'], kind: key };

    return (...args: unknown[]) => {
      try {
        const message = generateMessage(target as LoggerOptions, logConf, ...args);
        finishedPrintFunc?.(...message);
      } catch (e) {
        messageCatch(e as LogThrow);
      }
    };
  },
};

export function createLogger<T extends string, E = unknown>(
  options?: LoggerOptions<T, E>,
): Logger & Record<T, (...args: unknown[]) => void> {
  const { logConfig } = options || {};
  const userLogConf = { ...options };
  const conf = generateLoggerConfig(logConfig);
  confMap.set(userLogConf, { userOption: userLogConf as LoggerOptions, conf });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new Proxy<Logger>(userLogConf as Logger, handler) as any;
}

export const logger = createLogger();
