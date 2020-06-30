import { combineReducers } from 'redux';
import Todos from './todos';

export default function createReducer(asyncReducers) {
  return combineReducers({
    Todos,
    ...asyncReducers,
  });
}
