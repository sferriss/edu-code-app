import "../styles/compiler.css"
import React, {useState} from "react";
import {Box, Popper} from "@mui/material";
import {ChatBot} from "./ChatBot.tsx";
import {MessageModel} from "@chatscope/chat-ui-kit-react/src/components/Message/Message";

interface NavBarEditorProps {
    fontSize: string
    setFontSize: (value: string) => void
    compile: () => Promise<void>
    disableRun: boolean
    questionId: string
    code: string

}

export function NavBarEditor({fontSize, setFontSize, compile, disableRun, questionId, code}: NavBarEditorProps) {
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
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

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
                <div>
                    <button className="btn help-btn" aria-describedby={id} type="button" onClick={handleClick}>
                        Help
                    </button>
                    <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
                        <Box sx={{ p: 1}}>
                            <ChatBot
                                id={questionId}
                                code={code}
                                messages={messages}
                                setMessages={setMessages}
                            />
                        </Box>
                    </Popper>
                </div>
            </div>
        </div>
    )
}