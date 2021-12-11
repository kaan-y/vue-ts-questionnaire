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
  sub_questions: ISubQuestion[];
}

export interface ISubQuestion {
  values: Array<string>;
  questions: Array<{
    id: number;
    type: string;
    label: string;
    validation: {
      required: boolean;
    };
  }>;
}
