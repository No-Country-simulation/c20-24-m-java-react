import { createSlice } from '@reduxjs/toolkit';

export const resetStatePageSlice = createSlice({
  name: 'resetStatePage',
  initialState: {
    resetState: true,
  },
  reducers: {
    setResetState: (state, action) => {
      state.resetState = action.payload;
    },
  },
});

export const { setResetState } = resetStatePageSlice.actions;

export default resetStatePageSlice.reducer;
