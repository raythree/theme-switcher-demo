import { action, actions, reducer, getBoundActionCreators } from '../src/actions-reducers';
import { assert } from 'chai';
import configureStore from '../src/store/configureStore';

describe('reducer tests', function () {
  let store, state;

  beforeEach(() => {
    store = configureStore();
  });

  it('should export the correct state and action constants', function () {
    state = store.getState();
    assert(state.state1);
    assert(state.state2);
    assert(action.SAY_HELLO === 'SAY_HELLO');
    assert(action.ACTION_ONE === 'ACTION_ONE');
    assert(action.ACTION_TWO === 'ACTION_TWO');
  });

  it('should export the correct bound action creators', function () {
    const dispatch = store.dispatch;
    const bound = getBoundActionCreators(dispatch);
    assert(typeof bound.actionOne === 'function');
    assert(typeof bound.actionTwo === 'function');
    assert(typeof bound.sayHello === 'function');
  });

  it('should export the correct bound action creators by type', function () {
    const dispatch = store.dispatch;
    let bound = getBoundActionCreators(dispatch, 'state1');
    assert(typeof bound.actionOne === 'function');
    assert(typeof bound.sayHello === 'function');
    assert(Object.keys(bound).length === 2);

    bound = getBoundActionCreators(dispatch, 'state2');
    assert(typeof bound.actionTwo === 'function');
    assert(Object.keys(bound).length === 1);
  });

  it('should handle async actions', function (done) {
    state = store.getState();
    assert(state.state1.message === '');

    store.dispatch(actions.sayHello('World', 100));
    state = store.getState();
    assert(state.state1.pending);
    setTimeout(() => {
      state = store.getState();
      assert(!state.state1.pending);
      assert(state.state1.message === 'Hello World');
      assert(state.state2.message === 'Hello World');
      done();
    }, 150);
  });

})
