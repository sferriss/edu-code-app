export interface PaginationResponse<T> {
    items?: Array<T>;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
}