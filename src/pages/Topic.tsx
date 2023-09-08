import "../styles/topic.css"
import MarkdownViewer from "../components/MarkdownViewer.tsx";
import Pagination from "@mui/material/Pagination";
import React, {useEffect, useState} from "react";
import {paginationStyles} from "../styles/pagination.ts";
import {useParams} from "react-router-dom";
import {ApiService} from "../services/apiClientService.ts";
import {TopicResponse} from "../interfaces/responses/topicResponse.ts";
import {Loading} from "../components/Loading.tsx";
import {MessageModel} from "@chatscope/chat-ui-kit-react/src/components/Message/Message";
import {ModuleListResponse} from "../interfaces/responses/contentResponse.ts";
import HelpComponent from "../components/HelpComponent.tsx";
import {DoubtType} from "../interfaces/requests/doubtRequest.ts";

export function Topic() {
    const [page, setPage] = useState(1);
    const [renderedItem, setRenderedItem] = useState<ModuleListResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [topic, setTopic] = useState<TopicResponse>();
    const totalPages = topic?.contents ? topic.contents.length : 0;

    const params = useParams();
    const topicId = params.id;

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

    useEffect(() => {
        if (topicId != null) {
            setIsLoading(true);

            ApiService.getTopicById(topicId)
                .then(response => setTopic(response.data))
                .catch(error => console.error(error))
                .finally(() => setIsLoading(false));
        }
    }, [topicId]);

    useEffect(() => {
        if (topic?.contents?.length) {
            const currentItem = topic.contents[page - 1];
            setRenderedItem(currentItem);
        }
    }, [page, topic]);


    return (
        <>
            {isLoading ? <Loading/> : topic &&
                <div className="topic-container">
                    <div className="title-container">
                        <h3>{topic?.title}</h3>
                        <HelpComponent
                            messages={messages}
                            setMessages={setMessages}
                            anchorEl={anchorEl}
                            itemId={renderedItem?.id as string}
                            handlerClick={handleClick}
                            placement={"bottom"}
                            doubtType={DoubtType.Content}
                        />
                    </div>
                    {topic?.contents?.length &&
                        <div className="content-container">
                            <MarkdownViewer content={renderedItem?.description as string}/>
                        </div>}
                    {totalPages && <div className="pagination-container">
                        <Pagination
                            count={totalPages}
                            page={page}
                            onChange={(_, value) => setPage(value)}
                            color="primary"
                            showFirstButton
                            showLastButton
                            size="large"
                            sx={paginationStyles}
                        />
                    </div>}
                </div>}
        </>
    );
}