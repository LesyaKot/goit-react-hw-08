import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = { value: "" };

export const filterSlice = createSlice({
  name: "filters",
  initialState: initialFilterState,
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
