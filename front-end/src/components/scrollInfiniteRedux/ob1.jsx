// slices/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    pages: {}, // Almacenar productos, scroll y página actual por cada página
  },
  reducers: {
    setProducts: (state, action) => {
      const { pageKey, products } = action.payload;
      if (!state.pages[pageKey]) {
        state.pages[pageKey] = { items: [], scrollPosition: 0, currentPage: 1 };
      }
      state.pages[pageKey].items = products;
    },
    addProducts: (state, action) => {
      const { pageKey, products } = action.payload;
      if (!state.pages[pageKey]) {
        state.pages[pageKey] = { items: [], scrollPosition: 0, currentPage: 1 };
      }
      state.pages[pageKey].items = [...state.pages[pageKey].items, ...products];
    },
    setScrollPosition: (state, action) => {
      const { pageKey, scrollPosition } = action.payload;
      if (!state.pages[pageKey]) {
        state.pages[pageKey] = { items: [], scrollPosition: 0, currentPage: 1 };
      }
      state.pages[pageKey].scrollPosition = scrollPosition;
    },
    setCurrentPage: (state, action) => {
      const { pageKey, currentPage } = action.payload;
      if (!state.pages[pageKey]) {
        state.pages[pageKey] = { items: [], scrollPosition: 0, currentPage: 1 };
      }
      state.pages[pageKey].currentPage = currentPage;
    },
  },
});

// Exportamos las acciones
export const { setProducts, addProducts, setScrollPosition, setCurrentPage } =
  productsSlice.actions;

export default productsSlice.reducer;
