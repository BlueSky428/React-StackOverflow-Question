import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";

import { selectTags } from "../store/tags/tagsSlice";
import { searchQuestions } from "../store/questions/questionsSlice";

export const useSearch = () => {
  const tags = useAppSelector(selectTags);
  const [searchString, setSearchString] = useState("");
  const dispatch = useAppDispatch();
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    setSelectedTag(tags[0]);
  }, [tags]);

  const handleTag = (tag: string) => {
    setSelectedTag(tag);
    dispatch(searchQuestions({ tagged: selectedTag, body: searchString }));
  };

  return {
    searchString,
    setSearchString,
    tags,
    selectedTag,
    handleTag,
  };
};
