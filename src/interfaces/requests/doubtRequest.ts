export interface DoubtRequest {
    code: string | undefined | null,
    doubt: string,
    outPut?: string,
    type: DoubtType
}

export enum DoubtType {
    Exercise,
    Content
}