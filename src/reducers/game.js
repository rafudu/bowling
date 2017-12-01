import {
  ROLL,
  RESET,
} from '../actions/types';

const rolls = (state, action) => {
  switch (action.type) {
    case ROLL:
      return [...state, action.pinsDropped];
    case RESET:
      return [];
    default:
      return [];
  }
}
const reducer = (state = {}, action) => ({
  rolls: rolls(state.rolls, action),
});
export default reducer;
