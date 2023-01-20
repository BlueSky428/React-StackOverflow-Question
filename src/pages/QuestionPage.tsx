import Tags from "../features/tags/Tags";
import Questions from "../features/questions/Questions";
import Search from "../features/search/Search";

const QuestionPage = () => {
  return (
    <div>
      <div className="mx-auto w-2/3">
        <div className="fixed top-0 w-2/3">
          <Search />
        </div>
        <div className="mt-20">
          <Tags />
          <Questions />
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
