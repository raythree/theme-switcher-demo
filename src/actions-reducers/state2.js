import objectAssign from 'object-assign';

// import a constant from another reducer e
import { constants as actionType } from './state1';

const initialState = {
  message: ''
};

//------------------------------------------------------------------------
// If any action type constants are needed by other reducers add them here.
// Otherwise you can just use strings in the action creator and reducer.
//------------------------------------------------------------------------
const constants = {
  ACTION_TWO: 'ACTION_TWO'
};

const actions = {
  actionTwo: (msg) => {
    return {type: constants.ACTION_TWO, message: msg};
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ACTION_TWO:
      return objectAssign({}, state, {message: action.message});

    case actionType.SAY_HELLO:
      return objectAssign({}, state, {message: action.payload});

    default:
      return state;
  }
};

export {
  constants,
  actions,
  reducer
};
