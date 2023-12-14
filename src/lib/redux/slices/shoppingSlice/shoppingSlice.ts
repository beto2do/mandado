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
    }
  }
})

export const { add, upload } = shoppingSlice.actions

export default shoppingSlice.reducer