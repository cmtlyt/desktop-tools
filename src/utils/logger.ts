type Kind = 'info' | 'warn' | 'error' | 'debug' | 'success';

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
}

interface ContentInfo {
  text: string;
  length: number;
  hasChinese: boolean;
}

interface LogEvent<T> {
  kind: Kind | T;
  messages: unknown[];
  preventDefault: () => void;
}

interface LoggerOptions<T extends string = ''> {
  needTrace?: boolean;
  logConfig?: Partial<LoggerConfigObj> & { [key in T]: LoggerConfig<T> };
  onLogBefore?: (event: LogEvent<T>) => void;
}

enum LogThrow {
  PREVENT_DEFAULT = 'cl:logger:preventDefault',
}

const confMap = new WeakMap<object, LoggerConfigObj>();

function generateLoggerConfig(): LoggerConfigObj {
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
  const line = lines[lines.length - 1];
  const match = line.match(/at\s\(?(.*)\)?/);
  if (!match) return line;
  return match[1];
}

function generateMessage(userConfig: LoggerOptions, logConf: LoggerConfig, ...messages: unknown[]): string[] {
  const { needTrace, onLogBefore } = userConfig;
  const { kind, tagColor, tagBg, contentColor, contentBg, borderColor, style } = logConf;

  if (onLogBefore) {
    let preventDefault = false;
    const event = { kind, messages, preventDefault: () => (preventDefault = true) };
    onLogBefore?.(event);
    if (preventDefault) throw LogThrow.PREVENT_DEFAULT;
  }

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
    const traceTagStyle = `${tagStyle}margin-top:0.2rem;border-radius:0.4rem 0 0 0.4rem;`;
    const traceStyle = `${contentStyle}margin-top:0;border-radius:0 0.4rem 0.4rem 0;`;

    message += `%c\n%cTRACE%c${trace}`;
    styles.push(lineBreakStyle, traceTagStyle, traceStyle);
  }

  return [message, ...styles];
}

function messageCatch(error: LogThrow) {
  switch (error) {
    case LogThrow.PREVENT_DEFAULT:
      break;
    default:
      error satisfies never;
      throw error;
  }
}

const handler: ProxyHandler<Logger> = {
  get(target, key: Kind) {
    const conf = confMap.get(target);
    if (!conf) throw new Error('illegal call');

    if (!(key in conf)) {
      console.warn(`not found [${key}] logConfig, please add logConfig, currently using log replacement`);
    }
    const logConf = conf[key] || { ...conf['info'], kind: key };

    return (...args: unknown[]) => {
      try {
        const message = generateMessage(target as LoggerOptions, logConf, ...args);
        console.log(...message);
      } catch (e) {
        messageCatch(e as LogThrow);
      }
    };
  },
};

export function createLogger<T extends string>(
  options?: LoggerOptions<T>,
): Logger & Record<T, (...args: unknown[]) => void> {
  const { logConfig } = options || {};
  const userLogConf = { ...options };
  const conf = generateLoggerConfig();
  if (logConfig) Object.assign(conf, logConfig);
  confMap.set(userLogConf, conf);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new Proxy<Logger>(userLogConf as Logger, handler) as any;
}

export const logger = createLogger();