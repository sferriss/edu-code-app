import axios, {AxiosResponse} from 'axios';
import {List} from "./interfaces/list.ts";
import {Pagination} from "./interfaces/pagination.ts";

const API_BASE_URL = 'https://edu-code-api.onrender.com';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const getList = (): Promise<AxiosResponse<Pagination<List>>> => {
    return client.get(`students/questions/list?PageNumber=0&PageSize=30`);
};

export const ApiService = {
    getList: () => getList(),
};