import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FavoriteState {
  ids: string[];
}

const initialState: FavoriteState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export default favoritesSlice.reducer;

export const favoriteActions = favoritesSlice.actions;
