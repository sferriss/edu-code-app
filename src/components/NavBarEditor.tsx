import "../styles/laboratory.css"
import React, {useState} from "react";
import {MessageModel} from "@chatscope/chat-ui-kit-react/src/components/Message/Message";
import HelpComponent from "./HelpComponent.tsx";

interface NavBarEditorProps {
    fontSize: string
    setFontSize: (value: string) => void
    compile: () => Promise<void>
    disableRun: boolean
    questionId: string
    code: string

}
const NavBarEditor: React.FC<NavBarEditorProps> = ({ fontSize, setFontSize, compile, disableRun, questionId, code }) => {
    const [messages, setMessages] = useState<MessageModel[]>([
        {
            message: 'Olá, sou seu tutor virtual, se tiver dúvida sobre o exercício pode me enviar. ' +
                'Não é necessário adicionar o código ou o enunciado da questão.',
            sender: 'ChatGPT',
            direction: 'incoming',
            position: 'normal',
        }
    ]);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    return (
        <div className="navbar-editor">
            <div className="navbar-container-left">
                <span>Java</span>
                <div className="font-size-container">
                    <label>Fonte</label>
                    <input type="range" min="18" max="30"
                           value={fontSize} step="2"
                           onChange={(e) => {
                               setFontSize(e.target.value)
                           }}/>
                </div>
            </div>
            <div className="navbar-container-right">
                {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                <button className="btn run-btn" onClick={() => compile()} disabled={disableRun}>
                    Run
                </button>
                <HelpComponent
                    code={code}
                    messages={messages}
                    setMessages={setMessages}
                    anchorEl={anchorEl}
                    itemId={questionId}
                    handlerClick={handleClick}
                />
            </div>
        </div>
    )
}

export default NavBarEditor;