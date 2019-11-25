import { createSlice } from '@reduxjs/toolkit';

import { putSmurfData } from '../../api/smurfsApi';

const initialState = {
  editingSmurf: false,
  success: null,
  error: null,
  smurfToEdit: {
    name: '',
    age: 0,
    height: 0,
    id: null,
  },
};

const editSmurfData = createSlice({
  name: 'putSmurfs',
  initialState,
  reducers: {
    editingSmurf(state) {
      return {
        ...state,
        editingSmurf: true,
        success: null,
        error: null,
      };
    },
    markSmurfForEditing(state, action) {
      return {
        ...state,
        smurfToEdit: action.payload,
      };
    },
    putSmurfSuccess(state, action) {
      return {
        ...state,
        success: action.payload,
        editingSmurf: false,
      };
    },
    putSmurfFailed(state, action) {
      return {
        ...state,
        error: action.payload,
        editingSmurf: false,
      };
    },
  },
});

export const {
  editingSmurf, markSmurfForEditing, putSmurfSuccess, putSmurfFailed,
} = editSmurfData.actions;

export default editSmurfData.reducer;

export const putSmurf = (smurf, id) => async (dispatch) => {
  dispatch(editingSmurf());
  try {
    const changedSmurfData = await putSmurfData(smurf, id);
    dispatch(putSmurfSuccess(changedSmurfData));
  } catch (error) {
    dispatch(putSmurfFailed(error.toString()));
  }
};
