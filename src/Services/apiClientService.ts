import axios, {AxiosResponse} from 'axios';
import {ListResponse} from "../interfaces/Responses/listResponse.ts";
import {PaginationResponse} from "../interfaces/Responses/paginationResponse.ts";
import {FullQuestionResponse} from "../interfaces/Responses/fullQuestionResponse.ts";
import {CompileResponse} from "../interfaces/Responses/CompileResponse.ts";
import {CompileRequest} from "../interfaces/Requests/compileRequest.ts";

const API_BASE_URL = 'https://edu-code-api.onrender.com';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const getList = (): Promise<AxiosResponse<PaginationResponse<ListResponse>>> => {
    return client.get(`students/questions/list?PageNumber=0&PageSize=30`);
};

const getQuestionById = (id: string): Promise<AxiosResponse<FullQuestionResponse>> => {
    return client.get(`students/questions/${id}`);
};

const postCompile = (data: CompileRequest): Promise<AxiosResponse<CompileResponse>> => {
    return client.post(`students/compile`, data);
};

export const ApiService = {
    getList: () => getList(),
    getQuestionById: (id: string) => getQuestionById(id),
    postCompile: (data: CompileRequest) => postCompile(data),
};