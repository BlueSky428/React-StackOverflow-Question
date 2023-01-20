import { useEffect } from "react";

import { useSearch } from "../../hooks/useSearch";
import { useAppDispatch } from "../../store/hooks";
import { fetchTags } from "../../store/tags/tagsSlice";

const Tags = () => {
  const { tags, selectedTag, handleTag } = useSearch();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <div>
      <div className="text-lg">Trending</div>
      <div className="flex gap-2">
        {tags.map((tag: string, index: number) => {
          return (
            <button
              className={`${
                tag === selectedTag ? "bg-blue-300" : "bg-white"
              } p-2 border rounded-2xl border-blue-300`}
              onClick={() => handleTag(tag)}
              key={index}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
