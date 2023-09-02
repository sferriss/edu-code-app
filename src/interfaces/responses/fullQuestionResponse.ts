export interface Example {
    id: string;
    input: string;
    output: string;
    explanation: string | null;
}

export interface FullQuestionResponse {
    id: string;
    title: string;
    description: string;
    examples: Example[] | null;
    difficult: string;
}