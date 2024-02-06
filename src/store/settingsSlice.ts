import { createSlice } from '@reduxjs/toolkit';

const SLICE_NAME = 'settingsSlice';

interface IS {
  testParam: boolean;
}

const initialState: IS = {
  testParam: true,
};

const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    testParamToggle: (state) => {
      state.testParam = !state.testParam;
    },
  },
});

export const settingsReducer = reducer;

export const settingsSlice = { actions } as const;
