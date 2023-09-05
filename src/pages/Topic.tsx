import "../styles/topic.css"
import MarkdownViewer from "../components/MarkdownViewer.tsx";
import Pagination from "@mui/material/Pagination";
import {useEffect, useState} from "react";
import {paginationStyles} from "../styles/pagination.ts";
import {useParams} from "react-router-dom";
import {ApiService} from "../services/apiClientService.ts";
import {TopicResponse} from "../interfaces/responses/topicResponse.ts";
import {Loading} from "../components/Loading.tsx";

export function Topic() {
    const [page, setPage] = useState(1);
    const [renderedItem, setRenderedItem] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [topic, setTopic] = useState<TopicResponse>();
    const totalPages = topic?.contents ? topic.contents.length : 0;

    const params = useParams();
    const topicId = params.id;

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
            setRenderedItem(currentItem.description);
        }
    }, [page, topic]);

    return (
        <>
            {isLoading ? <Loading/> :
                <div className="topic-container">
                    <h3>{topic?.title}</h3>
                    {topic?.contents?.length &&
                        <div className="content-container">
                            <MarkdownViewer content={renderedItem}/>
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