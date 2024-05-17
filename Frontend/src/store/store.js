import {configureStore} from "@reduxjs/toolkit"
import searchQuerySlice from "./searchQuerySlice"

const store = configureStore({
  reducer:{
    searchQuery: searchQuerySlice
  }
})

export default store