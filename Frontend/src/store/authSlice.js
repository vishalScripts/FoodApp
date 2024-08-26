import { createSlice } from "@reduxjs/toolkit"

const initialState =  {
  user: null,
  status: false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin: (state, action) => {
      state.user = action.payload
      state.status = true
    },
    logout: (state, action) =>{
      state.user = null
      state.status = false
    }
  },
});

export  const {authLogin, logout} = authSlice.actions
export default authSlice.reducer