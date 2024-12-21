import { createAppSlice } from "@/lib/createAppSlice";
import { User } from "@ebuddy-test/types";
import { createAsyncThunk, current } from "@reduxjs/toolkit";

export interface UserSliceState {
  users: User[];
}

const initialState: UserSliceState = {
  users: [],
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const res = await fetch("/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();

  return result;
});

export const usersSlice = createAppSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      console.log(current(state));
      state.users = action.payload.data;
    });
  },
  selectors: {
    selectUsers: (state) => state.users,
  },
});

export const { selectUsers } = usersSlice.selectors;
