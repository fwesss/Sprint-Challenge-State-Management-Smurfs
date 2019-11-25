import { createSlice } from '@reduxjs/toolkit';

import { postSmurfsData } from '../../api/smurfsApi';

const initialState = {
  postingSmurf: false,
  success: null,
  error: null,
};

const pushSmurfsData = createSlice({
  name: 'postSmurfs',
  initialState,
  reducers: {
    postingSmurfs(state) {
      return {
        ...state,
        postingSmurf: true,
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

export const { postingSmurfs, postSmurfSuccess, postSmurfFailed } = pushSmurfsData.actions;

export default pushSmurfsData.reducer;

export const postSmurf = (name, age, height) => async (dispatch) => {
  dispatch(postingSmurfs());
  try {
    const newSmurfData = await postSmurfsData(name, age, height);
    dispatch(postSmurfSuccess(newSmurfData));
  } catch (error) {
    dispatch(postSmurfFailed(error));
  }
};
