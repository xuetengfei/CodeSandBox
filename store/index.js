import { createStore } from 'redux';
import createReducer from './reducers/index';

function configureStore(initialState) {
  const store = createStore(createReducer(), initialState);
  store.asyncReducers = {};
  return store;
}

const store = configureStore({});
export default store;

export function injectAsyncReducer(name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}
