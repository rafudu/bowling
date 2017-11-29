import {
  ROLL,
} from './types';

export const roll = (pinsDropped) => ({
  type: ROLL,
  pinsDropped,
});
