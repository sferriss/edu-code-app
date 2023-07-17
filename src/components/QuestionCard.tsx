import "../styles/cards.css"
import {FullQuestionResponse} from "../interfaces/Responses/fullQuestionResponse.ts";
import {ExampleCard} from "./ExampleCard.tsx";

interface QuestionCardProps {
    question: FullQuestionResponse | undefined;
}

export function QuestionCard({question}: QuestionCardProps) {
    return (
        <div className="question-card">
            <h3>{question?.title} - {question?.difficult}</h3>
            <span>{question?.description}</span>
            {question?.examples && question?.examples.map((e , i) => (
                <ExampleCard key={e.id} index={i} example={e}/>
            ))}
        </div>
    )
}