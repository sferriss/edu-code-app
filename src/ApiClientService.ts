import axios, {AxiosResponse} from 'axios';
import {List} from "./interfaces/List.ts";
import {Pagination} from "./interfaces/Pagination.ts";

const API_BASE_URL = 'https://edu-code-api.onrender.com';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const getList = (): Promise<AxiosResponse<Pagination<List>>> => {
    return client.get(`students/questions/list`);
};

export const ApiService = {
    getList: () => getList(),
};