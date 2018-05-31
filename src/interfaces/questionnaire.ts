export interface Questionnaire {
  id: number,
  title: string,
  author: string,
  questions: Question[]
}

export interface Question {
  no: number,
  type: number,
  question: string,
  choices: Choice[]
}

export interface Choice {
  id: number,
  answer: string,
  img: any
}

export interface AnswerType {
  typeId: number,
  typeText: string
}
