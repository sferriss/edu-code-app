import "../styles/warning.css"
import React from "react";

interface WarningProps {
    message: string
}
const Warning: React.FC<WarningProps> = ({ message}) => {
    return <div className="warning-container">
        {message}
    </div>
}

export default Warning;