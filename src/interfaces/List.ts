import {Question} from "./Question.ts";

export interface List{
    id: string;
    title: string;
    questionTotal: number;
    createdAt: Date;
    questions?: Array<Question>;
}