import type { ReduxState } from "@/lib/redux";

export const selectAllProducts = (state: ReduxState) => state.shopping.products;
