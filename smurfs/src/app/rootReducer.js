// Redux
import { combineReducers } from 'redux';
// Reducers
import getSmurfsReducer from '../features/getSmurfs/getSmurfsSlice';
import pushSmurfsReducer from '../features/addSmurfs/postSmurfsSlice';

const rootReducer = combineReducers({
  getSmurfs: getSmurfsReducer,
  pushSmurfs: pushSmurfsReducer,
});

export default rootReducer;
