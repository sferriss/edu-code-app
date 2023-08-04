import "../styles/difficulty-card.css"

interface DifficultyCardProps {
    difficulty: string
}

export function DifficultyCard({difficulty}: DifficultyCardProps) {

    function formatDifficulty() : string {
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

    function formatStyle() : string {
        switch (difficulty) {
            case "Easy":
                return "easy-style";
            case "Medium":
                return "medium-style";
            case "Hard":
                return "hard-style";
            default:
                return "";
        }
    }

    return <div className={`dificulty-container ${formatStyle()}`}>
        {formatDifficulty()}
    </div>
}