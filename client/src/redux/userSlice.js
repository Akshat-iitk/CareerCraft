import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "./store.js";
import { users } from "../utils/data.js";
const initialState = {
  user: true
};
const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
    },
    logout(state) {
      state.user = null;
      localStorage?.removeItem("userInfo");
    },
  },
});
export default userSlice.reducer;
export function Login(user) {
  return (dispatch, getState) => {
    dispatch(userSlice.actions.login(user));
  };
}

export function Logout() {
  return (dispatch, getState) => {
    dispatch(userSlice.actions.logout());
  };
}
