import objectAssign from 'object-assign';
import Promise from 'bluebird';

const initialState = {
  message: '',
  pending: false
};

//
// async action which will trigger the promiseResolver middleware
//
function hello(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello ' + name);
    }, delay);
  });
}

//------------------------------------------------------------------------
// If any action type constants are needed by other reducers add them here.
// Otherwise you can just use strings in the action creator and reducer.
//------------------------------------------------------------------------
const constants = {
  ACTION_ONE: 'ACTION_ONE',
  SAY_HELLO: 'SAY_HELLO'
};

const actions = {
  actionOne: (msg) => {
    return {type: constants.ACTION_ONE, message: msg};
  },
  sayHello: (name, delay) => {
    return {type: constants.SAY_HELLO, payload: hello(name, delay)};
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ACTION_ONE:
      return objectAssign({}, state, {message: action.message});

    case 'SAY_HELLO_REQUEST':
      return objectAssign({}, state, {message: '', pending: true});

    case constants.SAY_HELLO:
      return objectAssign({}, state, {message: action.payload, pending: false});

    case 'SAY_HELLO_ERROR':
      return objectAssign({}, state, {error: action.payload, pending: false});

    default:
      return state;
  }
};

export {
  constants,
  actions,
  reducer
};
