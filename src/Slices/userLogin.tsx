import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { store } from "..";
import { API_URL_USERS } from "../Constants/URL";

export interface usersState {
  id: 0;
  name: "";
  username: "";
  email: "";
  address: {
    street: "";
    suite: "";
    city: "";
    zipcode: "";
    geo: {
      lat: "";
      lng: "";
    };
  };
  phone: "";
  website: "";
  company: {
    name: "";
    catchPhrase: "";
    bs: "";
  };
}

export interface userLoginState {
  user: usersState[] | [];
  userName: string | undefined;
  loged: boolean;
  loading: boolean;
  error: string | undefined;
}

const initialState: userLoginState = {
  user: [],
  userName: undefined,
  loged: false,
  loading: false,
  error: undefined,
};

const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await axios.get(
    API_URL_USERS + `?username=${store.getState().users.userName}`
  );
  return res.data;
});

const userData = createSlice({
  name: "loginState",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      if (!state.userName) {
        alert("Please enter User Name");
        return;
      }
      state.loading = false;
      state.user = action.payload;
      state.loged = true;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.loged = false;
      state.error = action.error.message;
    });
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setUserName } = userData.actions;
export const userReaducer = userData.reducer;
export const fetchUser = fetchUsers;
