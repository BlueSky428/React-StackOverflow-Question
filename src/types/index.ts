export interface QuestionResponse {
  tags: string[];
  owner: {
    account_id: number;
    reputation: number;
    user_id: number;
    user_type: string;
    profile_image: string;
    display_name: string;
    link: string;
  };
  is_answered: true;
  view_count: number;
  protected_date: number;
  accepted_answer_id: number;
  answer_count: number;
  community_owned_date: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date: number;
  question_id: number;
  content_license: string;
  link: string;
  title: string;
}

export interface TagResponse {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
}
