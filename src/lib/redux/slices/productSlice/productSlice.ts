import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  InsertProduct,
  ProductSliceState,
  IdProduct,
  UpdateProduct,
} from "@/models/product";
import { getProducts, createNewProduct, updateProduct } from "@/services";

const initialState: ProductSliceState = {
  products: [],
  status: "idle",
  creationStatus: "idle",
};

export const fetchProducts = createAsyncThunk("get/product", async () => {
  return await getProducts();
});

export const createProduct = createAsyncThunk(
  "post/product",
  async (product: InsertProduct) => {
    return await createNewProduct(product);
  },
);

export const saveProduct = createAsyncThunk(
  "put/product",
  async (product: UpdateProduct) => {
    return await updateProduct(product);
  },
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetCreationStatus: (state) => {
      state.creationStatus = "idle";
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
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.creationStatus = "succeeded";
        state.products.unshift(action.payload);
      })
      .addCase(saveProduct.fulfilled, (state, action) => {
        state.creationStatus = "updated";
        let index = state.products.findIndex(
          (product) => product._id === action.payload._id,
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      });
  },
});

export const { deleteProduct } = productSlice.actions;

export default productSlice.reducer;
