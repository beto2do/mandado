import type { ReduxState } from "@/lib/redux";

export const selectSnackbar = (state: ReduxState) => state.snackbar.snackbar;
