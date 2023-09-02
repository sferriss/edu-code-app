import {SimpleQuestionResponse} from "./simpleQuestionResponse.ts";

export interface ExerciseListResponse {
    id: string;
    title: string;
    questionTotal: number;
    createdAt: Date;
    questions?: Array<SimpleQuestionResponse>;
}