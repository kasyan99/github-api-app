import { configureStore } from "@reduxjs/toolkit";
import { gitHubAPI } from "./github/github-api";

export const store = configureStore({
  reducer: {
    [gitHubAPI.reducerPath]: gitHubAPI.reducer,
  },
});
