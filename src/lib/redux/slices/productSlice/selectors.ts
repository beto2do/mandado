import type { ReduxState } from "@/lib/redux";
import { IdProductForm } from "@/models/product";

export const selectAllProducts = (state: ReduxState) => state.product.products;

export const selectProductById = (
  state: ReduxState,
  productId: IdProductForm,
) => state.product.products.find((product) => product._id === productId);
