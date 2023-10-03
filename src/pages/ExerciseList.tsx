import "../styles/shared.css"
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    ThemeProvider,
    Typography
} from "@mui/material";
import QuestionsTable from "../components/QuestionsTable.tsx";
import {useEffect, useState} from "react";
import {ExerciseListResponse} from "../interfaces/responses/exerciseListResponse.ts";
import {ApiService} from "../services/apiClientService.ts";
import {useNavigate} from "react-router-dom";
import {Loading} from "../components/Loading.tsx";
import {SimpleQuestionResponse} from "../interfaces/responses/simpleQuestionResponse.ts";
import {Theme} from "./shared/ListTheme.ts";

export function ExerciseList() {
    const [list, setList] = useState<ExerciseListResponse[]>([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        ApiService.getExerciseList()
            .then(response =>
                setList(response.data.items as ExerciseListResponse[])
            )
            .catch(error => console.error(error)
            )
            .finally(() =>
                setIsLoading(false)
            );
    }, []);

    const handleItemClick = (id: string) => {
        navigate(`/lab/${id}`);
    };

    return <div className="lists-container">
        <div style={{width: "50%"}}>
            <ThemeProvider theme={Theme}>
                {!isLoading ? list.map((item) => (
                    <Accordion key={item.id} disabled={!item.questions?.length}>
                        <AccordionSummary>
                            <Typography>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <QuestionsTable
                                questions={item.questions as SimpleQuestionResponse[]}
                                onClick={handleItemClick}/>
                        </AccordionDetails>
                    </Accordion>
                )) : <Loading />}
            </ThemeProvider>
        </div>
    </div>
}