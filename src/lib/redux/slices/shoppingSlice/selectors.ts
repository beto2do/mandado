import type { ReduxState } from "@/lib/redux";

export const selectProducts = (state: ReduxState) => state.shopping.products;
