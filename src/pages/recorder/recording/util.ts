// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { getLayoutStore } from '@/store';
import { logger } from '@/utils';
import { getRecordingInfoStore } from './store';
import { ActionType, emitRecordingAction } from './subject';
import { blobToChunkBase64String, cacheByReturn, sleep } from '@cmtlyt/base';

// async function mergeAudioTracks(audioTracks: MediaStreamTrack[]) {
//   const ac = new AudioContext();
//   const source = ac.createBufferSource();
//   source.buffer?.copyFromChannel(audioTracks[0]);
// }

async function getScreenAndAudioStream() {
  try {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: { channelCount: 2 } });
    // todo: 合并音频
    // const audioStream = await navigator.mediaDevices.getUserMedia({ audio: { channelCount: 2 } });

    // 将两个流合并成一个
    const combinedStream = new MediaStream();
    screenStream.getTracks().forEach((track) => combinedStream.addTrack(track));
    // audioStream.getTracks().forEach((track) => combinedStream.addTrack(track));

    return combinedStream;
  } catch (error) {
    logger.error('get-screen-and-audio-stream', error.message);
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

  const mediaRecorder = new MediaRecorder(stream, {
    mimeType,
    videoBitsPerSecond: 2500000,
    bitsPerSecond: 2500000,
  });

  return mediaRecorder;
}

const { startRecording, stopRecording, listener } = (() => {
  let chunks = [];

  const startRecording = (stream: MediaStream) => {
    const recorder = getRecording(stream);

    recorder.start(100);

    return recorder;
  };

  const listener = (mediaRecorder: MediaRecorder, onRecordingComplete: (blob: Blob) => void) => {
    mediaRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      mediaRecorder.stop();
      const blob = new Blob(chunks, { type: getSupportedMimeType() });
      chunks = [];
      onRecordingComplete(blob);
    };

    console.debug(mediaRecorder);
  };

  const stopRecording = (mediaRecorder: MediaRecorder) => {
    mediaRecorder.stop();
  };

  return { startRecording, stopRecording, listener };
})();

export async function startRecord() {
  const stream = await getScreenAndAudioStream();
  const { recorder: storeRecorder, setStream, setRecorder } = getRecordingInfoStore();
  if (storeRecorder) return;
  setStream(stream);
  // 倒计时
  for (let i = 5; i > 0; i--) {
    getLayoutStore().showMessage({ content: `${i}秒后开始录制` });
    await sleep(1000);
  }
  getLayoutStore().showMessage({ content: '开始录制' });

  const recorder = startRecording(stream);

  listener(recorder, (blob) => {
    getRecordingInfoStore().setResult(blob);
    emitRecordingAction({ id: 'recording-end', type: ActionType.RECORD_END });
  });

  setRecorder(recorder);
}

export async function stopRecord() {
  const { recorder } = getRecordingInfoStore();
  stopRecording(recorder);
}

export async function getResultString() {
  const { result } = getRecordingInfoStore();
  if (!result) return '';
  return blobToChunkBase64String(result);
}
