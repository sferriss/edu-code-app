import "../styles/shared.css"
import {Accordion, AccordionDetails, AccordionSummary, ThemeProvider, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ApiService} from "../services/apiClientService.ts";
import {Loading} from "../components/Loading.tsx";
import TopicTable from "../components/TopicTable.tsx";

import {Theme} from "./shared/ListTheme.ts";
import { ModuleListResponse } from "../interfaces/responses/moduleListResponse.ts";
import {SimpleTopicResponse} from "../interfaces/responses/simpleTopicResponse.ts";

export function ModuleList() {
    const [moduleList, setModuleList] = useState<ModuleListResponse[]>([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        ApiService.getModuleList()
            .then(response => {
                setModuleList(response.data.items as ModuleListResponse[]);
                }
            )
            .catch(error => console.error(error)
            )
            .finally(() =>
                setIsLoading(false)
            );
    }, []);

    const handleItemClick = (id: string) => {
        navigate(`/topic/${id}`);
    };

    return <div className="lists-container">
        <div style={{width: "50%"}}>
            <ThemeProvider theme={Theme}>
                {!isLoading ? moduleList.map((item) => (
                    <Accordion key={item.id} disabled={!item.topics?.length}>
                        <AccordionSummary>
                            <Typography>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                             <TopicTable
                                topics={item.topics as SimpleTopicResponse[]}
                                onClick={handleItemClick}/>
                        </AccordionDetails>
                    </Accordion>
                )) : <Loading />}
            </ThemeProvider>
        </div>
    </div>
}