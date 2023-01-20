import { TagResponse } from "./../../types/index";
import { RootState } from "../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "../../service/Api";

export interface TagsState {
  tags: string[];
  status: "idle" | "loading" | "failed";
}

const initialState: TagsState = {
  tags: [],
  status: "idle",
};

export const fetchTags = createAsyncThunk("tags/getTags", async () => {
  const response = await getTags();
  return response.data.items;
});

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = "idle";
        let tempTags = [];
        for (let i = 0; i < 10; i++) {
          tempTags.push(action.payload[i].name);
        }
        state.tags = tempTags;
      })
      .addCase(fetchTags.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectTags = (state: RootState) => state.tags.tags;

export default tagsSlice.reducer;
