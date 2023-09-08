export interface DoubtRequest {
    code: string | undefined | null,
    doubt: string,
    type: DoubtType
}

export enum DoubtType {
    Exercise,
    Content
}