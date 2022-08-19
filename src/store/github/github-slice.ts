import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_FAV_KEY = "rfk";

interface GitHubState {
  favourites: string[];
}

const initialState: GitHubState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
};

export const gitHubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    addFavoutite: (state, action: PayloadAction<string>) => {
      state.favourites.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
    removeFavoutite: (state, action: PayloadAction<string>) => {
      console.log("remove");

      state.favourites = state.favourites.filter(
        (item) => item !== action.payload
      );
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
  },
});

export const gitHubActions = gitHubSlice.actions;
export const gitHubReducer = gitHubSlice.reducer;
