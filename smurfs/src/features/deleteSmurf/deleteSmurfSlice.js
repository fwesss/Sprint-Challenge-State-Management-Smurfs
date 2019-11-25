import { createSlice } from '@reduxjs/toolkit';

import { removeSmurfData } from '../../api/smurfsApi';

const initialState = {
  deletingSmurft: false,
  success: null,
  error: null,
};

const deleteSmurfData = createSlice({
  name: 'deleteSmurf',
  initialState,
  reducers: {
    deletingSmurf(state) {
      return {
        ...state,
        deleteSmurf: true,
        success: null,
        error: null,
      };
    },
    deleteSmurfSuccess(state, action) {
      return {
        ...state,
        success: action.payload,
        deletingSmurf: false,
      };
    },
    deleteSmurfFailed(state, action) {
      return {
        ...state,
        error: action.payload,
        deletingSmurf: false,
      };
    },
  },
});

export const {
  deletingSmurf, markSmurfForDeleting, deleteSmurfSuccess, deleteSmurfFailed,
} = deleteSmurfData.actions;

export default deleteSmurfData.reducer;

export const deleteSmurf = (id) => async (dispatch) => {
  dispatch(deletingSmurf());
  try {
    const deletingSmurfData = await removeSmurfData(id);
    dispatch(deleteSmurfSuccess(deletingSmurfData));
  } catch (error) {
    dispatch(deleteSmurfFailed(error.toString()));
  }
};
