import { RootState } from "../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { search } from "../../service/Api";
import { QuestionResponse } from "../../types";

export interface QuestionsState {
  questions: QuestionResponse[];
  status: "idle" | "loading" | "failed";
}

const initialState: QuestionsState = {
  questions: [],
  status: "idle",
};

export const searchQuestions = createAsyncThunk(
  "questions/search",
  async ({ tagged, body }: { tagged: string; body: string }) => {
    console.log("questions-search");
    const response = await search(tagged, body);
    return response.data;
  }
);

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(searchQuestions.pending, (state: QuestionsState) => {
        state.status = "loading";
      })
      .addCase(searchQuestions.fulfilled, (state: QuestionsState, action) => {
        state.status = "idle";
        for (let i = 0; i < action.payload.items.length; i++) {
          state.questions.push(action.payload.items[i]);
        }
      })
      .addCase(searchQuestions.rejected, (state: QuestionsState) => {
        state.status = "failed";
      });
  },
});

export const selectQuestions = (state: RootState) => state.questions.questions;

export default questionsSlice.reducer;
