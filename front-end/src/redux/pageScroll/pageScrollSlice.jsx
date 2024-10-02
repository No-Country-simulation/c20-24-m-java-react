import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Los productos cargados
  scrollPosition: 0, // La posición del scroll
  currentPage: 1,
  typeList: 'list',
};
export const pageScrollSlice = createSlice({
  name: 'pageScroll',
  initialState,
  reducers: {
    setPageScrollItem: (state, action) => {
      state.items = action.payload;
    },
    setPageScrollTypeList: (state, action) => {
      state.typeList = action.payload;
      console.log(state.typeList, 'TypeList');
    },
    setPageScrollCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      console.log(state.currentPage, 'setPageScrollCurrentPage');
    },
    addPageScrollItem: (state, action) => {
      state.items = [...state.items, ...action.payload];
      console.log(state.items, 'addPageScrollItem');
    },
    setPageScrollPosition: (state, action) => {
      // console.log(action.payload);
      state.scrollPosition = action.payload;
      // console.log(state.scrollPosition);
    },
    resetsetPageScroll: (state) => {
      state.items = [];
      state.scrollPosition = 0;
      state.currentPage = 1;
      state.typeList = 'list';
    },
    resetsetPageScrollInitialState: () => initialState,
  },
});

export const {
  setPageScrollItem,
  addPageScrollItem,
  setPageScrollPosition,
  setPageScrollCurrentPage,
  resetsetPageScroll,
  setPageScrollTypeList,
  resetsetPageScrollInitialState,
} = pageScrollSlice.actions;

export default pageScrollSlice.reducer;
