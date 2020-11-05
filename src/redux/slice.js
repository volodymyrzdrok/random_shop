import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productsData from '../db/product.json';
const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    addCartToBasket: (state, action) =>
      state.map(orderItem =>
        orderItem.id === action.payload
          ? { ...orderItem, count: orderItem.count + 1 }
          : orderItem,
      ),
    addNewCartToBasket: (state, action) => [action.payload, ...state],
    removeCart: (state, action) =>
      (state = state.filter(cartItem => cartItem.id !== action.payload)),
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (state, action) => action.payload,
  },
});
const filterSizeSlice = createSlice({
  name: 'filterSize',
  initialState: '',
  reducers: {
    changeFilterSize: (state, action) => action.payload,
  },
});
const productsSlice = createSlice({
  name: 'productsState',
  initialState: productsData,
  reducers: {
    addFavoriteProduct: (state, action) => (state = action.payload),
  },
});

export const { changeFilter } = filterSlice.actions;
export const { changeFilterSize } = filterSizeSlice.actions;
export const { addFavoriteProduct } = productsSlice.actions;
export const {
  addCartToBasket,
  addNewCartToBasket,
  removeCart,
} = orderSlice.actions;

const filter = filterSlice.reducer;
const filterSize = filterSizeSlice.reducer;
const order = orderSlice.reducer;
const productsState = productsSlice.reducer;

export default combineReducers({ order, filter, filterSize, productsState });
