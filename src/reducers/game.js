import {
  ROLL,
} from '../actions/types';

import ScoreBoard from '../models/ScoreBoard';
const scoreBoard = new ScoreBoard();
const initialState = {
  frames: [],
}

const frames = (state, action) => {
  switch (action.type) {
    case ROLL:
      scoreBoard.computeRoll(action.pinsDropped)
      return scoreBoard.toArray();
    default:
      return [];
  }
}
const reducer = (state = initialState, action) => ({
  frames: frames(state, action),
});
export default reducer;
