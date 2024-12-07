import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
    loading:false,
    isAuthenticated: false, 

    token:null

}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      loginSuccess(state, action) {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      },
      loginFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
      logout(state) {
        state.user = null;
        state.isAuthenticated = false;
        state.token = null; 
      },
    },
  });
  



export const { loginSuccess, loginFailure, logout } =
  authSlice.actions;
  export default authSlice.reducer;
