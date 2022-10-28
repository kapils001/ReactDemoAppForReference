import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducer: {
    login:(state, action) => {
      state.isAuthenticated = true;
    },
    logout:(state, action) => {
      state.isAuthenticated = false;
    },
  },
}); 

// export const {login,logout} = authenticationSlice.actions;
export const {login, logout} = authenticationSlice.actions;
export default authenticationSlice.reducer;
 
