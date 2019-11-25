// Redux
import { combineReducers } from 'redux';
// Reducers
import getSmurfsReducer from '../features/getSmurfs/getSmurfsSlice';
import pushSmurfsReducer from '../features/addSmurfs/postSmurfsSlice';
import editSmurfsReducer from '../features/editSmurfs/editSmurfsSlice';
import deleteSmurfReducer from '../features/deleteSmurf/deleteSmurfSlice';

const rootReducer = combineReducers({
  getSmurfs: getSmurfsReducer,
  pushSmurfs: pushSmurfsReducer,
  editSmurf: editSmurfsReducer,
  deleteSmurf: deleteSmurfReducer,
});

export default rootReducer;
