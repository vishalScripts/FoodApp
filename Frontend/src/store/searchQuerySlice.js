import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  query: ""
}

const searchQuerySlice = createSlice({
  name: "searchQuery",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    clearQuery: (state, action) => {
      state.query = "";
    },
  },
});

export const {setQuery, clearQuery} = searchQuerySlice.actions

export default searchQuerySlice.reducer