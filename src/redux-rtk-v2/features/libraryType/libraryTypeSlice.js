import { libraryType } from "@/config-v2/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: libraryType.all,
};

const libraryTypeSlice = createSlice({
  name: "libraryType",
  // Set the initial state for this slice
  initialState,
  reducers: {
    // Define an action to set the library value
    setLibraryType: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Export the action creator
export const { setLibraryType } = libraryTypeSlice.actions;

// Create a selector function to retrieve the library value from the state
export const selectLibraryTypeValue = (state) => state.libraryType.value;

// Export the reducer function
export default libraryTypeSlice.reducer;
