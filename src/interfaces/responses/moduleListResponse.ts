import {SimpleTopicResponse} from "./simpleTopicResponse.ts";

export interface ModuleListResponse {
    id: string;
    title: string;
    description: string;
    topics?: Array<SimpleTopicResponse>;
}