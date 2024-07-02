import { MOVE_OBJECTS } from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';

const initialState = {
  angle: 45,
  gameState: {
    started: false,
    kills: 0,
    lives: 3,
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    case 'START_GAME':
        return startGame(state, action);
    default:
      return state;
  }
}

export default reducer;