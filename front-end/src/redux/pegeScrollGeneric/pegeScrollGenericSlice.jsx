import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pages: {},
};

export const pegeScrollGenericSlice = createSlice({
  name: 'pegeScrollGeneric',
  initialState,
  reducers: {
    setPegeScrollGenericItems: (state, action) => {
      const { pageKey, products } = action.payload;
      if (!state.pages[pageKey]) {
        state.pages[pageKey] = {
          items: [],
          scrollPosition: 0,
          currentPage: 1,
          reset: true,
        };
      }
      state.pages[pageKey].items = products;
    },
    changePegeScrollGenericReset: (state, action) => {
      const { pageKey, products } = action.payload;
      // if (!state.pages[pageKey]) {
      //   state.pages[pageKey] = {
      //     items: [],
      //     scrollPosition: 0,
      //     currentPage: 1,
      //     reset: true,
      //   };
      // }
      if (state.pages[pageKey]) {
        state.pages[pageKey].items = products;
      }
    },
    addPegeScrollGenericItems: (state, action) => {
      const { pageKey, products } = action.payload;
      if (!state.pages[pageKey]) {
        state.pages[pageKey] = {
          items: [],
          scrollPosition: 0,
          currentPage: 1,
          reset: true,
        };
      }
      // Filtrar productos duplicados
      const newProducts = products.filter(
        (newProduct) =>
          !state.pages[pageKey].items.some(
            (existingProduct) => existingProduct.id === newProduct.id,
          ),
      );
      state.pages[pageKey].items = [...state.pages[pageKey].items, ...newProducts];
      // console.log(state.pages[pageKey].items, 'state.pages[pageKey].items');
    },
    setPegeScrollGenericScrollPosition: (state, action) => {
      const { pageKey, scrollPosition } = action.payload;
      // if (!state.pages[pageKey]) {
      //   state.pages[pageKey] = { items: [], scrollPosition: 0, currentPage: 1 };
      // }
      if (state.pages[pageKey]) {
        state.pages[pageKey].scrollPosition = scrollPosition;
      }
    },
    setPegeScrollGenericCurrentPage: (state, action) => {
      const { pageKey, currentPage } = action.payload;
      // if (!state.pages[pageKey]) {
      //   state.pages[pageKey] = { items: [], scrollPosition: 0, currentPage: 1 };
      // }
      if (state.pages[pageKey]) {
        state.pages[pageKey].currentPage = currentPage;
      }

      // console.log(
      //   state.pages[pageKey].currentPage,
      //   'state.pages[pageKey].currentPage',
      // );
    },
    deletePageKeyPegeScrollGeneric: (state, action) => {
      const { pageKey } = action.payload;
      // console.log(pageKey, 'deletePageKeyPegeScrollGeneric');
      if (state.pages[pageKey]) {
        // console.log('entro');
        delete state.pages[pageKey];
      }
    },
    deletePSGItemFromPage: (state, action) => {
      const { pageKey, itemId } = action.payload;
      console.log(pageKey, 'deletePSGItemFromPage');
      if (state.pages[pageKey]) {
        console.log(state.pages[pageKey].items, 'state.pages[pageKey].items');
        state.pages[pageKey].items = state.pages[pageKey].items.filter(
          (item) => item.id !== itemId,
        );
      }
    },
    resetsetPegeScrollGeneric: () => initialState,
  },
});

export const {
  setPegeScrollGenericItems,
  addPegeScrollGenericItems,
  setPegeScrollGenericScrollPosition,
  setPegeScrollGenericCurrentPage,
  resetsetPegeScrollGeneric,
  deletePageKeyPegeScrollGeneric,
  deletePSGItemFromPage,
} = pegeScrollGenericSlice.actions;

export default pegeScrollGenericSlice.reducer;
