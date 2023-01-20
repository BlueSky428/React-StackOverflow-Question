import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import tagsReducer from "./tags/tagsSlice";
import questionsReducer from "./questions/questionsSlice";

export const store = configureStore({
  reducer: {
    tags: tagsReducer,
    questions: questionsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
