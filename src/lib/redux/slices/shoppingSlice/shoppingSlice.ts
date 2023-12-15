import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Product, {ShoppingSliceState} from '@/models/product'

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
  }
})

export const { add, upload, updateIsGrabbed } = shoppingSlice.actions

export default shoppingSlice.reducer