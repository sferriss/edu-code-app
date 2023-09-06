import React from "react";
import {Box, Popper} from "@mui/material";
import ChatBot from "./ChatBot.tsx";
import {MessageModel} from "@chatscope/chat-ui-kit-react/src/components/Message/Message";
import {PopperPlacementType} from "@mui/base/Popper/Popper.types";


interface HelpProps {
    anchorEl: HTMLElement | null;
    messages: MessageModel[]
    setMessages: (value: MessageModel[]) => void;
    itemId: string
    code?: string
    handlerClick: (event: React.MouseEvent<HTMLElement>) => void;
    placement?: PopperPlacementType
}

const HelpComponent: React.FC<HelpProps> = ({
                                                anchorEl,
                                                messages,
                                                setMessages,
                                                itemId,
                                                code,
                                                handlerClick,
                                                placement }) => {
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


    return (
        <div>
            <button className="btn help-btn" aria-describedby={id} type="button" onClick={handlerClick}>
                Help
            </button>
            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                placement={placement ? placement : "bottom-end"}>
                <Box sx={{ p: 1}}>
                    <ChatBot
                        id={itemId}
                        code={code}
                        messages={messages}
                        // @ts-ignore
                        setMessages={setMessages}
                    />
                </Box>
            </Popper>
        </div>
    )
}

export default HelpComponent;