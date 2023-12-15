import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Product, {ShoppingSliceState} from '@/models/product'
import { stat } from 'fs';

const initialState: ShoppingSliceState = {
    products: []
  }

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    upload: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    add: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    updateIsGrabbed: (state, action: PayloadAction<Product>) => {
        let product = state.products.find(product => action.payload.id === product.id);
        if(product) {
            product.isGrabbed = action.payload.isGrabbed;
        }
    },
    delete: (state, action: PayloadAction<Product>) => {
        let productIndex = state.products.findIndex(product => action.payload.id === product.id);
        if (productIndex > -1) {
            state.products.splice(productIndex, 1);
          }
    },
  }
})

export const { add, upload, updateIsGrabbed } = shoppingSlice.actions

export default shoppingSlice.reducer