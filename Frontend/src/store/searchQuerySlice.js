import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  query: "",
  page: 1
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
    setPage: (state, action) => {
      console.log("pagefghgfhfgh", action.payload);
      state.page = action.payload;
    },
    
  },
});

export const {setQuery, clearQuery, setPage} = searchQuerySlice.actions

export default searchQuerySlice.reducer