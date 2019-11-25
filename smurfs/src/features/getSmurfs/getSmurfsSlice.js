// Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';
// API
import { getSmurfsData } from '../../api/smurfsApi';

const initialState = {
  fetchingSmurfs: false,
  smurfs: [],
  error: null,
};


const setSmurfsData = createSlice({
  name: 'getSmurfs',
  initialState,
  reducers: {
    gettingSmurfs(state) {
      return {
        ...state,
        fetchingSmurfs: true,
      };
    },
    getSmurfsSuccess(state, action) {
      return {
        ...state,
        smurfs: [
          ...state.smurfs, action.payload,
        ],
        fetchingSmurfs: false,
      };
    },
    getSmurfsFailed(state, action) {
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false,
      };
    },
  },
});

export const { gettingSmurfs, getSmurfsSuccess, getSmurfsFailed } = setSmurfsData.actions;

export default setSmurfsData.reducer;

export const getSmurfs = () => async (dispatch) => {
  dispatch(gettingSmurfs());
  try {
    const smurfsData = await getSmurfsData();
    dispatch(getSmurfsSuccess(smurfsData));
  } catch (error) {
    dispatch(getSmurfsFailed(error));
  }
};
