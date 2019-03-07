export const isPromise = payload => {
  return Promise.resolve(payload) === payload;
};

export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const PROMISE_ERROR = 'PROMISE_ERROR';



export const promiseMiddleware = ({ dispatch }) => next => action => {
  const {
    type,
    loadStart = 'LOAD_START',
    loadEnd = 'LOAD_END',
    errortype = 'PROMISE_ERROR'
  } = action;
}
if(!isPromise(action.payload)) {
  return next(action);
}
dispatch({ type: 'LOAD_START' });
action.payload.then(payload => {
  dispatch({ type: 'LOAD_END' });
  dispatch({
    type: action.type,
    payload:result
  });
})
  .catch(err => {
    dispatch({
      type: 'PROMISE_ERROR',
      payload: err
    });
  });