import { createSlice } from '@reduxjs/toolkit';

import { postSmurfsData } from '../../api/smurfsApi';

const initialState = {
  postingSmurf: false,
  success: null,
  error: null,
};

const pushSmurfData = createSlice({
  name: 'postSmurfs',
  initialState,
  reducers: {
    postingSmurf(state) {
      return {
        ...state,
        postingSmurf: true,
        success: null,
        error: null,
      };
    },
    postSmurfSuccess(state, action) {
      return {
        ...state,
        success: action.payload,
        postingSmurf: false,
      };
    },
    postSmurfFailed(state, action) {
      return {
        ...state,
        error: action.payload,
        postingSmurf: false,
      };
    },
  },
});

export const { postingSmurf, postSmurfSuccess, postSmurfFailed } = pushSmurfData.actions;

export default pushSmurfData.reducer;

export const postSmurf = ({ name, age, height }) => async (dispatch) => {
  dispatch(postingSmurf());
  try {
    const newSmurfData = await postSmurfsData({ name, age, height });
    dispatch(postSmurfSuccess(newSmurfData.toString()));
  } catch (error) {
    dispatch(postSmurfFailed(error.toString()));
  }
};
