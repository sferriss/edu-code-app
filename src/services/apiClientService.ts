import axios, {AxiosResponse} from 'axios';
import {ExerciseListResponse} from "../interfaces/responses/exerciseListResponse.ts";
import {PaginationResponse} from "../interfaces/responses/paginationResponse.ts";
import {FullQuestionResponse} from "../interfaces/responses/fullQuestionResponse.ts";
import {CompileResponse} from "../interfaces/responses/compileResponse.ts";
import {CompileRequest} from "../interfaces/requests/compileRequest.ts";
import {DoubtRequest} from "../interfaces/requests/doubtRequest.ts";
import {DoubtResponse} from "../interfaces/responses/doubtResponse.ts";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ModuleListResponse} from "../interfaces/responses/moduleListResponse.ts";

const apiUrl = import.meta.env.VITE_API_URL as string;

const client = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

client.interceptors.response.use(response => {
    return response;
}, error => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (error.response || error.request) {
        toast.error(`Ops: Algo de errado não está certo!`);
    }

    return Promise.reject(error);
});

const getExerciseList = (): Promise<AxiosResponse<PaginationResponse<ExerciseListResponse>>> => {
    return client.get(`questions/lists?PageNumber=0&PageSize=30`);
};

const getQuestionById = (id: string): Promise<AxiosResponse<FullQuestionResponse>> => {
    return client.get(`questions/${id}`);
};

const getModuleList = (): Promise<AxiosResponse<PaginationResponse<ModuleListResponse>>> => {
    return client.get(`modules?PageNumber=0&PageSize=30`);
};

const postCompile = (data: CompileRequest): Promise<AxiosResponse<CompileResponse>> => {
    return client.post(`compile`, data);
};

const postDoubt = (id: string, data: DoubtRequest): Promise<AxiosResponse<DoubtResponse>> => {
    return client.post(`doubts/${id}`, data);
};

export const ApiService = {
    getExerciseList: () => getExerciseList(),
    getQuestionById: (id: string) => getQuestionById(id),
    getModuleList: () => getModuleList(),
    postCompile: (data: CompileRequest) => postCompile(data),
    postDoubt: (id: string, data: DoubtRequest) => postDoubt(id, data),
};