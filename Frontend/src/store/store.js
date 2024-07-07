import {configureStore} from "@reduxjs/toolkit"
import searchQuerySlice from "./searchQuerySlice"
import authSlice from "./authSlice"

const store = configureStore({
  reducer:{
    searchQuery: searchQuerySlice,
    auth: authSlice
  }
})

export default store