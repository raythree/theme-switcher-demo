# React Slingshot Starter

This starter is based on [react-slingshot](https://github.com/coryhouse/react-slingshot) by [Cory House](https://github.com/coryhouse), which is an outstanding react/redux/react-router starter. See [the docs](https://github.com/raythree/react-slingshot/blob/master/docs/FAQ.md) there for dev/build instructions.

Modifications:

* Added bootstrap, imported in App.js.
* Added bluebird
* Added promiseResolver middleware configured into store (see async actions below).
* Restructured starter app.
* Moved tests to test directory. Added initial tests for reducers.
* Removed no set-state warning. It's useful for some components, like forms, to have local state.


### actions-reducers
Most of the time, it's only necessary to export action creator functions, not the action type constants themselves, if they are only local to one reducer. I tend to like having the actions defined close to the reducers, so each reducer (with it's actions) gets it's own file in 'action-reducers', and the index.js collects them, then exports all actions plus the combined app reducer:

```
import { actions, reducer } from 'actions-reducers';
```

### Asyc Actions

The promiseResolver middleware is a modified version from [Stephen Grider](https://github.com/StephenGrider) who teaches a great React/Redux course on Udemy. It is very convenient for async actions and removes some boilerplate code needed using the thunkReducer. It looks for a ```payload``` property in the action which resolves to a Promise, and if found it automatically dispatches a 'REQUEST' action, followed by either the actual action or an ERROR action.

For example, say we have an async function called sayHello(name) which returns a promise. The action and reducer looks like this:

```javascript
const actions = {
  sayHelloAsync: (name) => {
    return {type: 'SAY_HELLO', payload: sayHello(name)}
  },
  //...
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAY_HELLO_REQUEST':
      // action pending, show spinner, disable buttons, etc.
      return objectAssign({}, state, {message: '', pending: true});

    case 'SAY_HELLO':
      // promise resolved successfully
      return objectAssign({}, state, {message: action.payload, pending: false});

    case 'SAY_HELLO_ERROR':
      // promise rejected
      return objectAssign({}, state, {error: action.payload, pending: false});

    default:
      return state;
  }
};

```

As soon as the action is dispatched the promiseResolver will automatically dispatch an action 'SAY_HELLO_REQUEST', then when it resolves it will dispatch the action 'SAY_HELL0' with action.payload set to the resolved promise. Likewise, if it gets rejected it will dispatch an action 'SAY_HELLO_ERROR'. 