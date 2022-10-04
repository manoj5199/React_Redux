import { createSlice } from "@reduxjs/toolkit";
export interface usersState {
  users: {
    value: [
      {
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
    ];
  };
}
const users = createSlice({
  name: "Albums",
  initialState: {
    value: [
      {
        id: 0,
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: "",
          },
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      },
    ],
  },
  reducers: {
    addUsers: (state, action) => {
      state.value.push(...action.payload);
    },
  },
});

export const { addUsers } = users.actions;
export const userReaducer = users.reducer;
