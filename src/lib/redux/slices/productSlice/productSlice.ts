import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Product,
  InsertProduct,
  ProductSliceState,
  IdProduct,
} from "@/models/product";

const initialState: ProductSliceState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    createProduct: (state, action: PayloadAction<InsertProduct>) => {
      //TODO create new product
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      //TODO update product
    },
    deleteProduct: (state, action: PayloadAction<IdProduct>) => {
      let productIndex = state.products.findIndex(
        (product) => action.payload === product._id,
      );
      if (productIndex > -1) {
        state.products.splice(productIndex, 1);
      }
    },
  },
});

export const { createProduct, getProducts, updateProduct, deleteProduct } =
  productSlice.actions;

export default productSlice.reducer;
