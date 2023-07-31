export interface Quiz {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }
  export interface QuizApiResponse {
    response_code: number;
    results: Quiz[];
  }