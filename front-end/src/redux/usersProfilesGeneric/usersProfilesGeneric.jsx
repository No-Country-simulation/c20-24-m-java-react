import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profiles: {},
};

export const usersProfilesGenericSlice = createSlice({
  name: 'usersProfilesGeneric',
  initialState,
  reducers: {
    setUsersProfilesGenericProfile: (state, action) => {
      const { profileKey, profile } = action.payload;
      if (!state.profiles[profileKey]) {
        state.profiles[profileKey] = profile;
      }
    },
    addUsersProfilesGenericProfile: (state, action) => {
      const { profileKey, profile } = action.payload;
      if (!state.profiles[profileKey]) {
        state.profiles[profileKey] = {};
      }
      state.profiles[profileKey] = { ...state.profiles[profileKey], ...profile };
    },
  },
});

export const { setUsersProfilesGenericProfile, addUsersProfilesGenericProfile } =
  usersProfilesGenericSlice.actions;

export default usersProfilesGenericSlice.reducer;
