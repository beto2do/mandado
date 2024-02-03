import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  Product,
  InsertProduct,
  ProductSliceState,
  IdProduct,
} from "@/models/product";
import { getProducts } from "@/services";

const initialState: ProductSliceState = {
  products: [],
  status: "idle",
};

export const fetchProducts = createAsyncThunk("get/product", async () => {
  return await getProducts();
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
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
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { createProduct, updateProduct, deleteProduct } =
  productSlice.actions;

export default productSlice.reducer;
