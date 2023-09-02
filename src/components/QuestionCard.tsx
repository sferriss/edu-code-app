import "../styles/cards.css"
import {FullQuestionResponse} from "../interfaces/responses/fullQuestionResponse.ts";
import {ExampleCard} from "./ExampleCard.tsx";

interface QuestionCardProps {
    question: FullQuestionResponse | undefined;
}

export function QuestionCard({question}: QuestionCardProps) {

    function formatDifficulty(difficulty: string | undefined): string {
        switch (difficulty) {
            case "Easy":
                return "Fácil";
            case "Medium":
                return "Médio";
            case "Hard":
                return "Difícil";
            default:
                return "";
        }
    }

    return (
        <div className="question-card">
            <div className="title-container">
                <h3>{question?.title} - {formatDifficulty(question?.difficult)}</h3>
            </div>
            <span>{question?.description}</span>
            {question?.examples && question?.examples.map((e, i) => (
                <ExampleCard key={e.id} index={i} example={e}/>
            ))}
        </div>
    )
}