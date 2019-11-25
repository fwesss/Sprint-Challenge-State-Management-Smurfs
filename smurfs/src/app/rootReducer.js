// Redux
import { combineReducers } from 'redux';
// Reducers
import getSmurfsReducer from '../features/getSmurfs/getSmurfsSlice';

const rootReducer = combineReducers({
  getSmurfs: getSmurfsReducer,
});

export default rootReducer;
