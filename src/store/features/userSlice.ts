import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  LocalSessionPayload,
  LoginPayload,
  LogoutPayload,
  UserStateData,
} from "../../@types/data-models";
import AllUsers from "../../data/userData.json";

const initialState: UserStateData = {
  userDetails: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "userslice",
  initialState,
  reducers: {
    mainLogin: (state, { payload }: PayloadAction<LoginPayload>) => {
      const validUser = AllUsers.find((user) => {
        return (
          user.email === payload.email && user.password === payload.password
        );
      });

      if (validUser == null) payload.callback({ success: false });
      else {
        // --- Reducer set
        state.isLoggedIn = true;
        state.userDetails = validUser;

        // --- Localstorage set
        localStorage.setItem(
          "state",
          JSON.stringify({ isLoggedIn: true, userDetails: validUser })
        );

        // --- callback invoked
        payload.callback({ success: true });
      }
    },
    mainLogout: (state, { payload }: PayloadAction<LogoutPayload>) => {
      state.isLoggedIn = false;
      state.userDetails = null;

      localStorage.setItem("state", JSON.stringify(initialState));

      // callback
      payload.callback({ success: true });
    },
    getLocalSession: (
      state,
      { payload }: PayloadAction<LocalSessionPayload>
    ) => {
      const localSession = localStorage.getItem("state");

      if (localSession == null) {
        if (state.isLoggedIn)
          localStorage.setItem(
            "state",
            JSON.stringify({
              isLoggedIn: state.isLoggedIn,
              userDetails: state.userDetails,
            })
          );
        else localStorage.setItem("state", JSON.stringify(initialState));
      } else payload.callback(JSON.parse(localSession));
    },
  },
});

// --- Actions
export const { mainLogin, mainLogout, getLocalSession } = userSlice.actions;

// --- Reducers
export const isLoggedIn = (state: { userSlice: UserStateData }) =>
  state.userSlice.isLoggedIn;
export const getUserDetails = (state: { userSlice: UserStateData }) =>
  state.userSlice.userDetails;

// --- Main reducer to pass to store
export default userSlice.reducer;
