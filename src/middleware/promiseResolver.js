function resolver({ dispatch }) {
  return next => action => {
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    const requestType = `${action.type}_REQUEST`;
    const successType = action.type;
    const errorType = `${action.type}_ERROR`;
    const bypassType = `${action.type}_BYPASS`;

    dispatch({ type: requestType });

    action.payload
    .then((response) => {
      if (action.processor && typeof action.processor === 'function') {
        if (!action.processor(response)) {
          dispatch({ type: bypassType });
          return;
        }
      }
      dispatch({ type: successType, payload: response });
    })
    .catch((error) => {
      dispatch({ type: errorType, payload: error });
    });
  };
}

export { resolver as promiseResolver };
