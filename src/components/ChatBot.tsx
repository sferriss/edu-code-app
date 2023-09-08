import "../styles/chatbot.css"
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
    ChatContainer,
    ConversationHeader,
    MainContainer,
    Message,
    MessageInput,
    MessageList,
    TypingIndicator
} from '@chatscope/chat-ui-kit-react';
import React, {useState} from "react";
import {MessageModel} from "@chatscope/chat-ui-kit-react/src/components/Message/Message";
import {ApiService} from "../services/apiClientService.ts";
import {DoubtType} from "../interfaces/requests/doubtRequest.ts";

interface ChatBotProps {
    id: string
    code?: string
    messages: MessageModel[]
    setMessages: React.Dispatch<React.SetStateAction<MessageModel[]>>
    doubtType: DoubtType
}

const ChatBot: React.FC<ChatBotProps> = ({ id, code, messages, setMessages, doubtType }) => {
    const [isTyping, setIsTyping] = useState(false);

    function addMessage(message: string, direction: string, sender: string) {
        const newMessage = {
            message,
            direction: direction,
            sender: sender,
            position: 'normal'
        };

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        return newMessage;
    }

    async function handleSend(message: string) {
        const newMessage = addMessage(message, 'outgoing', 'user')

        setIsTyping(true);

        await ApiService.postDoubt(id, {
            code: code,
            doubt: newMessage.message,
            type: doubtType
        }).then((res) => {
            addMessage(res.data.message, 'incoming', 'ChatGPT');
        }).then(() => {
            setIsTyping(false);
        })
    }

    return (
        <div style={{height: "550px", width: "400px"}}>
            <MainContainer>
                <ChatContainer>
                    <ConversationHeader className="gray-color">
                        {/*<Avatar src={emilyIco} name="Emily" />*/}
                        <ConversationHeader.Content userName="Corey" info="Online"/>
                    </ConversationHeader>
                    <MessageList
                        scrollBehavior="auto"
                        typingIndicator={isTyping ? <TypingIndicator content="Corey está digitando"/> : null}
                        autoScrollToBottom={true}
                        className="gray-color"
                    >
                        {messages.map((message, i) => {
                            return <Message key={i} model={message}/>
                        })}
                    </MessageList>
                    <MessageInput
                        className="gray-color"
                        placeholder="Escreva sua dúvida aqui"
                        onSend={handleSend}
                        attachButton={false}/>
                </ChatContainer>
            </MainContainer>
        </div>
    )
}

export default ChatBot;