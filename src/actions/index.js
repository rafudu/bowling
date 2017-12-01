import {
  ROLL,
  RESET,
} from './types';

export const roll = (pinsDropped) => ({
  type: ROLL,
  pinsDropped,
});

export const reset = () => ({
  type: RESET,
});
