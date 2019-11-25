// Redux
import { combineReducers } from 'redux';
// Reducers
import getSmurfsReducer from '../features/getSmurfs/getSmurfsSlice';
import pushSmurfsReducer from '../features/addSmurfs/postSmurfsSlice';
import editSmurfsReducer from '../features/editSmurfs/editSmurfsSlice';

const rootReducer = combineReducers({
  getSmurfs: getSmurfsReducer,
  pushSmurfs: pushSmurfsReducer,
  editSmurf: editSmurfsReducer,
});

export default rootReducer;
