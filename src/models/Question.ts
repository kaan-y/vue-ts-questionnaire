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
