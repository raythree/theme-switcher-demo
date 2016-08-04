import { combineReducers, bindActionCreators } from 'redux';
import { routerReducer } from 'react-router-redux';

const actionReducers = {};
// Require all reducers here by name
actionReducers.state1 = require('./state1');
actionReducers.state2 = require('./state2');

const action = {}; // action constants
const actions = {};
const reducers = {};

//------------------------------------------------------------------------------
// Combine the actions, constants and reducers from actionReducers
//------------------------------------------------------------------------------
Object.keys(actionReducers).forEach((name) => {
  let acts = actionReducers[name].actions;
  Object.keys(acts).forEach((key) => {
    actions[key] = acts[key];
  });
  let constants = actionReducers[name].constants;
  if (constants) {
    Object.keys(constants).forEach((key) => {
      action[key] = constants[key];
    });
  }
  reducers[name] = actionReducers[name].reducer;
});

//------------------------------------------------------------------------------
// This method can be used by containers to mapDispatchToProps. Just call
// it with the dispatch and an optional list of which sets of actions you want.
// If you leave off the second parameter you'll get all actions. To get just
// the ones associated with state1, the container would do:
//
//    class Container extends React.Component { ... }
//
//    function mapDispatchToProps(dispatch) {
//      return getBoundActionCreators(dispatch, ['state']);
//    }
//
//    export default connect(mapStateToProps, mapDispatchToProps)(Container);
//
//------------------------------------------------------------------------------
function getBoundActionCreators(dispatch, which) {
  // if which parameter is provided make sure it's an array
  if (which) {
    if (typeof which.indexOf !== 'function') {
      throw new Error('getBoundActionCreators second parameter must be an array');
    }
  }
  const boundCreators = {};
  Object.keys(actionReducers).forEach((name) => {
    let acts = actionReducers[name].actions;
    let bound = {};
    if (!which) {
      // we want all of them
      bound = bindActionCreators(acts, dispatch);
    }
    else {
      if (which.length) {
        if (which.indexOf(name) >= 0) bound = bindActionCreators(acts, dispatch);
      }
    }
    // copy the selected set into the result
    Object.keys(bound).forEach(name => {
      boundCreators[name] = bound[name];
    });
  });
  return boundCreators;
}

reducers.routing = routerReducer;

let reducer = combineReducers(reducers);

export {
  action,
  actions,
  reducer,
  getBoundActionCreators
};
