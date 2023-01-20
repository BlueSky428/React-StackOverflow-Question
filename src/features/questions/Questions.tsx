import React, { CSSProperties, useMemo, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClipLoader } from "react-spinners";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  searchQuestions,
  selectQuestions,
} from "../../store/questions/questionsSlice";
import { useSearch } from "../../hooks/useSearch";

import ListItem from "../../components/list/ListItem";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export interface QuestionsProps {}

const Questions = () => {
  const { selectedTag, searchString } = useSearch();
  const questions = useAppSelector(selectQuestions);
  const status = useAppSelector((state) => state.questions.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(searchQuestions({ tagged: selectedTag, body: searchString }));
  }, [dispatch, searchString, selectedTag]);

  const isLoading = useMemo(() => {
    return status === "loading" ? true : false;
  }, [status]);

  const handleNext = () => {
    dispatch(searchQuestions({ tagged: selectedTag, body: searchString }));
  };

  return (
    <InfiniteScroll
      dataLength={questions.length} //This is important field to render the next data
      next={handleNext}
      hasMore={true}
      className="!overflow-hidden"
      loader={
        <ClipLoader
          color="#FF0"
          loading={isLoading}
          cssOverride={override}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      }
    >
      <div className="divide-y">
        {questions.map((question, index) => (
          <ListItem question={question} key={index} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Questions;
