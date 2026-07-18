import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProjectByTitle } from "./projectAPI";

export const fetchProjectByTitle = createAsyncThunk(
  "project/fetchByTitle",
  async (title, thunkAPI) => {
    try {
      console.log(title,thunkAPI)
      const response = await getProjectByTitle(title);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Unable to fetch project"
      );
    }
  }
);