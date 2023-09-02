import {Example} from "../interfaces/responses/fullQuestionResponse.ts";

interface ExampleCardProps {
    index: number
    example: Example;
}

export function ExampleCard({example, index}: ExampleCardProps) {


    return (
        <div className="example-container">
            <p>Exemplo: {index + 1}</p>
            <div className="example-box">
                <div>
                    <span>Input: </span> {example.input}
                </div>
                <div>
                    <span>Output: </span> {example.output}
                </div>
                {example.explanation &&
                    <div>
                        <span>Explicação: </span> {example.explanation}
                    </div>}
            </div>
        </div>
    )
}