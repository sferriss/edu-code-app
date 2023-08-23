import axios, {AxiosResponse} from 'axios';
import {ListResponse} from "../interfaces/Responses/listResponse.ts";
import {PaginationResponse} from "../interfaces/Responses/paginationResponse.ts";
import {FullQuestionResponse} from "../interfaces/Responses/fullQuestionResponse.ts";
import {CompileResponse} from "../interfaces/Responses/compileResponse.ts";
import {CompileRequest} from "../interfaces/Requests/compileRequest.ts";
import {DoubtRequest} from "../interfaces/Requests/doubtRequest.ts";
import {DoubtResponse} from "../interfaces/Responses/doubtResponse.ts";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const getList = (): Promise<AxiosResponse<PaginationResponse<ListResponse>>> => {
    return client.get(`questions/lists?PageNumber=0&PageSize=30`);
};

const getQuestionById = (id: string): Promise<AxiosResponse<FullQuestionResponse>> => {
    return client.get(`questions/${id}`);
};

const postCompile = (data: CompileRequest): Promise<AxiosResponse<CompileResponse>> => {
    return client.post(`compile`, data);
};

const postDoubt = (id: string, data: DoubtRequest): Promise<AxiosResponse<DoubtResponse>> => {
    return client.post(`doubts/${id}`, data);
};

export const ApiService = {
    getList: () => getList(),
    getQuestionById: (id: string) => getQuestionById(id),
    postCompile: (data: CompileRequest) => postCompile(data),
    postDoubt: (id: string, data: DoubtRequest) => postDoubt(id, data),
};