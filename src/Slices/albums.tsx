import { createSlice } from "@reduxjs/toolkit";
export interface Album {
  userId: number;
  id: number;
  title: string;
}
const albums = createSlice({
  name: "Albums",
  initialState: {
    value: [
      {
        userId: "",
        id: "200",
        title: "Title",
      },
    ],
  },
  reducers: {
    addAlbum: (state, action) => {
      state.value.push(...action.payload);
    },
  },
});

export const { addAlbum } = albums.actions;
export const albumReduser = albums.reducer;
