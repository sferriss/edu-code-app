import {ModuleListResponse} from "./contentResponse.ts";

export interface TopicResponse {
    id: string;
    title: string;
    description: string;
    contents?: Array<ModuleListResponse>;
}