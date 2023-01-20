import { QuestionResponse } from "../../types";

export interface QuestionResponseProps {
  question: QuestionResponse;
}

const ListItem = ({ question }: QuestionResponseProps) => {
  return (
    <div className="min-h-[150px]">
      <a href={`${question.link}`} target="_blank">
        <div>{question.title}</div>
        <div className="flex justify- text-center">
          <div className="w-1/2 sm:w-1/4">
            <div className="text-red-700">Score</div>
            <div className={`${question.score < 0 ? "text-red-700" : ""}`}>
              {question.score}
            </div>
          </div>
          <div className="w-1/2 sm:w-1/4">
            <div className="text-red">Answers</div>
            <div
              className={`border border-green-700 ${
                question.accepted_answer_id ? "bg-green-700" : "bg-white"
              }`}
            >
              {question.answer_count}
            </div>
          </div>
          <div className="w-1/2 sm:w-1/4">
            <div className="text-red-700">Viewed</div>
            <div>{question.view_count}</div>
          </div>
          <div className="w-1/2 sm:w-1/4 flex flex-col justify-center items-center">
            <img
              alt={`${question.owner.user_id}`}
              width={100}
              src={question.owner.profile_image}
              className="rounded-full"
            ></img>
            <div>{question.owner.display_name}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ListItem;
