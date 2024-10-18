import { USER_FINGERPRINT_KEY } from '@/constant';
import { load } from '@fingerprintjs/fingerprintjs';

load()
  .then((fp) => fp.get())
  .then((result) => result.visitorId)
  .then((visitorId) => {
    localStorage.setItem(USER_FINGERPRINT_KEY, visitorId);
    return visitorId;
  });

let userFingerprint: string;

export function getUserFingerprint() {
  return (userFingerprint ||= localStorage.getItem(USER_FINGERPRINT_KEY) || '');
}
