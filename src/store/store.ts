import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { gitHubAPI } from "./github/github-api";
import { gitHubReducer } from "./github/github-slice";

export const store = configureStore({
  reducer: {
    [gitHubAPI.reducerPath]: gitHubAPI.reducer,
    gitHub: gitHubReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gitHubAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
