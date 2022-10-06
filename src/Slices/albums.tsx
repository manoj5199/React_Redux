import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { store } from "../index";
import { API_URL_ALBUMS } from "../Constants/URL";

export interface Album {
  userId: number;
  id: number;
  title: string;
}

interface AlbumInitialState {
  value: Album[] | [];
}

const initialState: AlbumInitialState = {
  value: [],
};

const fetchAlbumData = createAsyncThunk("albums/fetchAlbumData", async () => {
  const res = await axios.get(
    API_URL_ALBUMS + `?userId=${store.getState().users.user[0].id.toString()}`
  );
  return res.data;
});
const albums = createSlice({
  name: "Albums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbumData.pending, () => {});
    builder.addCase(fetchAlbumData.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(fetchAlbumData.rejected, () => {
      console.error("error");
    });
  },
});

export const fetchAlbumDatas = fetchAlbumData;
export const albumReduser = albums.reducer;
