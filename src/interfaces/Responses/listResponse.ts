import {SimpleQuestionResponse} from "./simpleQuestionResponse.ts";

export interface ListResponse {
    id: string;
    title: string;
    questionTotal: number;
    createdAt: Date;
    questions?: Array<SimpleQuestionResponse>;
}