import type { AllKind } from '@/utils';

export interface ExposeInfo {
  kind: AllKind;
  info: unknown[];
  time: number;
}
