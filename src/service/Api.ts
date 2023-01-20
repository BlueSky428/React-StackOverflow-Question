import axios from "axios";

const baseURL = process.env.REACT_APP_STACKOVERFLOW_BASE_URL;
const instance = axios.create({
  baseURL,
});

const getTags = async () => {
  const response = await instance.get(
    "tags?order=desc&sort=popular&site=stackoverflow"
  );
  return response;
};

const getQuestions = (tagged: string) => {
  const response = instance.get(
    `/search/advanced?order=desc&sort=activity&tagged=${tagged}&site=stackoverflow`
  );
  return response;
};

const search = (tagged: string, body: string) => {
  const response = instance.get(
    `/search/advanced?order=desc&sort=activity&body=${body}&tagged=${tagged}&site=stackoverflow`
  );
  return response;
};

export { getTags, getQuestions, search };
