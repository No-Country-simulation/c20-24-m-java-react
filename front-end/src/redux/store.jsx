import { configureStore } from '@reduxjs/toolkit';
import pageScrollSlice from './pageScroll/pageScrollSlice';
import pegeScrollGenericSlice from './pegeScrollGeneric/pegeScrollGenericSlice';
import resetStatePageSlice from './resetStatePage/resetStatePageSlice';
import usersProfilesGenericSlice from './usersProfilesGeneric/usersProfilesGeneric';

export const store = configureStore({
  reducer: {
    pageScrollSlice,
    pegeScrollGenericSlice,
    resetStatePageSlice,
    usersProfilesGenericSlice,
  },
});
