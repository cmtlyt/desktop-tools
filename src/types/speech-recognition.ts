interface SpeechRecognitionErrorEvent extends Event {
  readonly error: Error;
  readonly message: string;
}

interface SpeechRecognitionEvent extends Event {
  /** EMMA 格式的 XML 字符串 */
  readonly emma: string;
  /** 识别结果解释 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly interpretation: any | null;
  /** 当前结果在结果列表中的索引 */
  readonly resultIndex: number;
  /** 识别结果列表 */
  readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionInstance extends EventTarget {
  /** 是否返回连续识别结果 */
  continuous: boolean;
  /** 是否返回中间识别结果 */
  interimResults: boolean;
  /** 识别语言 */
  lang: string;
  /** 最大识别结果数量 */
  maxAlternatives: number;
  /** 开始识别 */
  start(): void;
  /** 停止识别 */
  stop(): void;
  /** 取消识别 */
  abort(): void;
  /** 当用户代理完成捕获音频以进行语音识别时 */
  addEventListener(
    type: 'audioend',
    listener: (event: Event) => void,
    options?: boolean | AddEventListenerOptions,
  ): void;
  /** 当用户代理开始捕获音频以进行语音识别时 */
  addEventListener(
    type: 'audiostart',
    listener: (event: Event) => void,
    options?: boolean | AddEventListenerOptions,
  ): void;
  /** 当语音识别服务断开连接时 */
  addEventListener(type: 'end', listener: (event: Event) => void, options?: boolean | AddEventListenerOptions): void;
  /** 当发生语音识别错误时 */
  addEventListener(
    type: 'error',
    listener: (event: SpeechRecognitionErrorEvent) => void,
    options?: boolean | AddEventListenerOptions,
  ): void;
  /** 当用户代理开始处理语音识别结果时 */
  addEventListener(
    type: 'nomatch',
    listener: (event: SpeechRecognitionEvent) => void,
    options?: boolean | AddEventListenerOptions,
  ): void;
  /** 当语音识别服务返回结果时 */
  addEventListener(
    type: 'result',
    listener: (event: SpeechRecognitionEvent) => void,
    options?: boolean | AddEventListenerOptions,
  ): void;
  /** 当语音识别服务识别的语音不再被检测到时 */
  addEventListener(
    type: 'speechend',
    listener: (event: Event) => void,
    options?: boolean | AddEventListenerOptions,
  ): void;
  /** 当语音识别服务检测到声音被识别为语音时 */
  addEventListener(
    type: 'speechstart',
    listener: (event: Event) => void,
    options?: boolean | AddEventListenerOptions,
  ): void;
  /** 当任何声音（无论是否可识别的语音）不再被检测到时 */
  addEventListener(
    type: 'soundend',
    listener: (event: Event) => void,
    options?: boolean | AddEventListenerOptions,
  ): void;
  /** 当检测到任何声音（无论是否可识别的语音）时 */
  addEventListener(
    type: 'soundstart',
    listener: (event: Event) => void,
    options?: boolean | AddEventListenerOptions,
  ): void;
  /** 当语音识别服务开始监听传入的音频并试图识别与当前相关的语法时 */
  addEventListener(type: 'start', listener: (event: Event) => void, options?: boolean | AddEventListenerOptions): void;
}

export type SpeechRecognition = new () => SpeechRecognitionInstance;
