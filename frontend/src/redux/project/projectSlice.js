import { createSlice } from "@reduxjs/toolkit";
import { fetchProjectByTitle } from "./projectThunk";

const initialState = {
  selectedProjectTitle: "",
  project: null,
  loading: false,
  error: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setSelectedProject(state, action) {
      state.selectedProjectTitle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchProjectByTitle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProjectByTitle.fulfilled, (state, action) => {
        state.loading = false;
        state.project = action.payload;
      })

      .addCase(fetchProjectByTitle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedProject } = projectSlice.actions;

export default projectSlice.reducer;