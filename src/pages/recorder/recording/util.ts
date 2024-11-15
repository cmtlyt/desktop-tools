import { blobToChunkBase64String, cacheByReturn, sleep } from '@cmtlyt/base';
import { getLayoutStore } from '@/store';
import { getFileWritable, logger, opfsSupport } from '@/utils';
import { getRecordingInfoStore } from './store';
import { ActionType, emitRecordingAction } from './subject';
import { SpeechRecognition } from '@/types/speech-recognition';
import { VIDEO_OPFS_PATH } from '@/constant/opfs-key';

function getSpeechRecognition() {
  if ('SpeechRecognition' in window) return window.SpeechRecognition as SpeechRecognition;
  if ('webkitSpeechRecognition' in window) return window.webkitSpeechRecognition as SpeechRecognition;
  return null;
}

export function getOpfsFilePath(name: string) {
  if (!name) return '';
  return `${VIDEO_OPFS_PATH}${name}`;
}

export function transcriptionOfAudioRecordings() {
  const SpeechRecognition = getSpeechRecognition();
  if (!SpeechRecognition) return;
  const recognition = new SpeechRecognition();
  recognition.continuous = true; // 持续监听
  recognition.interimResults = true; // 获取临时结果

  recognition.addEventListener('result', function (event) {
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        console.log(`Final transcript: ${event.results[i][0].transcript}`);
      } else {
        console.log(`Interim transcript: ${event.results[i][0].transcript}`);
      }
    }
  });

  recognition.start();
}

function mergeAudioStream(streams: MediaStream[]) {
  const context = new AudioContext();
  const destination = context.createMediaStreamDestination();
  streams
    .filter((stream) => stream.getAudioTracks().length)
    .forEach((stream) => {
      const source = context.createMediaStreamSource(stream);
      source.connect(destination);
    });
  return destination.stream;
}

async function getScreenAndAudioStream() {
  try {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: { channelCount: 2 } });
    const audioStream = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 2 } });

    const mergeStream = mergeAudioStream([screenStream, audioStream]);

    // 将两个流合并成一个
    const combinedStream = new MediaStream();
    screenStream.getVideoTracks().forEach((track) => combinedStream.addTrack(track));
    mergeStream.getTracks().forEach((track) => combinedStream.addTrack(track));

    return {
      stream: combinedStream,
      stopTraces() {
        screenStream.getTracks().forEach((track) => track.stop());
        audioStream.getTracks().forEach((track) => track.stop());
      },
    };
  } catch (error) {
    logger.error('get-screen-and-audio-stream', (error as Error).message);
    return {};
  }
}

const getSupportedMimeType = cacheByReturn(() => {
  return (
    [
      'video/webm;codecs=daala,opus',
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm;codecs=vp9',
      'video/webm;codecs=vp8',
      'video/webm;codecs=h264',
      'video/webm',
      'video/mp4',
      'video/mpeg',
    ].find((mimeType) => MediaRecorder.isTypeSupported(mimeType)) || ''
  );
});

function getRecording(stream: MediaStream) {
  const mimeType = getSupportedMimeType();

  if (!mimeType) throw new Error('No supported mime type found');

  const mediaRecorder = new MediaRecorder(stream, { mimeType });

  return mediaRecorder;
}

const { startRecording, stopRecording, listener } = (() => {
  let chunks: Blob[] = [];
  const applyArray = !opfsSupport();
  let fileWritable: FileSystemWritableFileStream | null = null;
  let filePath: string;

  function addChunk(chunk: Blob) {
    if (applyArray) return chunks.push(chunk);
    fileWritable!.write(chunk);
  }

  async function updateWritable() {
    if (applyArray) return;
    const name = getRecordingInfoStore().name;
    if (!name) return;
    filePath = getOpfsFilePath(`${name}.webm`);
    fileWritable = await getFileWritable(filePath);
  }

  const startRecording = async (stream: MediaStream) => {
    await updateWritable();

    const recorder = getRecording(stream);

    recorder.start(100);

    return recorder;
  };

  const listener = (mediaRecorder: MediaRecorder, onRecordingComplete: (url: string, blob: Blob) => void) => {
    mediaRecorder.ondataavailable = (e) => {
      addChunk(e.data);
    };

    mediaRecorder.onstop = async () => {
      mediaRecorder.stop();
      const blob = new Blob(chunks, { type: getSupportedMimeType() });
      chunks = [];
      await fileWritable?.close();
      onRecordingComplete(filePath, blob);
    };
  };

  const stopRecording = (mediaRecorder: MediaRecorder) => {
    mediaRecorder.stop();
  };

  return { startRecording, stopRecording, listener };
})();

export async function startRecord() {
  const { stream, stopTraces } = await getScreenAndAudioStream();
  if (!stream) return;
  const { recorder: storeRecorder, setStream, setRecorder } = getRecordingInfoStore();
  if (storeRecorder) return;
  setStream(stream);
  // 倒计时
  for (let i = 5; i > 0; i--) {
    getLayoutStore().showMessage({ content: `${i}秒后开始录制`, duration: 1 });
    await sleep(1000);
  }
  getLayoutStore().showMessage({ content: '开始录制' });

  const recorder = await startRecording(stream);

  listener(recorder, (url, blob) => {
    stopTraces?.();
    if (url) getRecordingInfoStore().setUrl(url);
    else getRecordingInfoStore().setBlob(blob);
    emitRecordingAction({ id: 'recording-end', type: ActionType.RECORD_END });
  });

  setRecorder(recorder);
}

export async function stopRecord() {
  const { recorder } = getRecordingInfoStore();
  if (!recorder) return;
  stopRecording(recorder);
}

export async function getResultString() {
  const { blob: result } = getRecordingInfoStore();
  if (!result) return '';
  return blobToChunkBase64String(result);
}
