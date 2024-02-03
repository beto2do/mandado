import type { ReduxState } from "@/lib/redux";
import { IdProduct } from "@/models/product";

export const selectAllProducts = (state: ReduxState) => state.product.products;

export const selectProductById = (state: ReduxState, productId: IdProduct) =>
  state.product.products.find((product) => product._id === productId);
