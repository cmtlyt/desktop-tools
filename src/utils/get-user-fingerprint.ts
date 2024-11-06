import { USER_FINGERPRINT_KEY } from '@/constant';
import { load } from '@fingerprintjs/fingerprintjs';
import { logger } from '.';

let userFingerprint: string;

load()
  .then((fp) => fp.get())
  .then((result) => result.visitorId)
  .then((visitorId) => {
    userFingerprint ||= localStorage.getItem(USER_FINGERPRINT_KEY) || '';
    if (userFingerprint !== visitorId) {
      logger.warn('user fingerprint changed', { old: userFingerprint, curr: visitorId });
      localStorage.setItem(USER_FINGERPRINT_KEY, visitorId);
      userFingerprint = visitorId;
    }
  });

export function getUserFingerprint() {
  return (userFingerprint ||= localStorage.getItem(USER_FINGERPRINT_KEY) || '');
}
