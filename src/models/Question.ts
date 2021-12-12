/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
export interface IQuestions {
  questions: IQuestion[];
}

export interface IQuestion {
  id: number;
  type: string;
  label: string;
  validation: {
    required: boolean;
  };
  sub_questions: ISubQuestions[];
}

export interface ISubQuestions {
  values: Array<string>;
  questions: ISubQuestion[];
}

export interface ISubQuestion {
  id: number;
  type: string;
  label: string;
  validation: {
    required: boolean;
  };
}
export interface IAnsweredQuestion {
  id: number;
  label: string;
  answer: string;
}
