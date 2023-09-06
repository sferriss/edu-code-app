import "../styles/cards.css"
import {FullQuestionResponse} from "../interfaces/responses/fullQuestionResponse.ts";
import ExampleCard from "./ExampleCard.tsx";
import React from "react";
import MarkdownViewer from "./MarkdownViewer.tsx";

interface QuestionCardProps {
    question: FullQuestionResponse | undefined;
}

const QuestionCard: React.FC<QuestionCardProps> = ({question}) => {
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
            <div>
                <h3>{question?.title} - {formatDifficulty(question?.difficult)}</h3>
            </div>
            <div>
                <MarkdownViewer content={question?.description || ""}/>
                {question?.examples && question?.examples.map((e, i) => (
                    <ExampleCard key={e.id} index={i} example={e}/>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard;