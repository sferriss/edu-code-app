import "../styles/exercise.css"
import {Accordion, AccordionDetails, AccordionSummary, createTheme, ThemeProvider, Typography} from "@mui/material";
import QuestionsTable from "../components/QuestionsTable.tsx";
import {useEffect, useState} from "react";
import {List} from "../interfaces/List.ts";
import {ApiService} from "../ApiClientService.ts";
import {useNavigate} from "react-router-dom";

const theme = createTheme({
    components: {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    border: "2px solid white",
                    backgroundColor: "#373c43",
                    color: "#e5e5e5",
                    ":hover": {
                        backgroundColor: "#202225",
                    },
                    "&.Mui-expanded": {
                        backgroundColor: "#202225",
                    },
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: "18px",
                    fontWeight: "bold",
                }
            }
        },
    }
});

export function Exercise() {
    const [list, setList] = useState<List[] | undefined>([]);
    const navigate = useNavigate();

    useEffect(() => {
        ApiService.getList()
            .then(response => setList(response.data.items))
            .catch(error => console.error(error));
    }, []);

    const handleItemClick = (id: string) => {
        navigate(`/compiler/${id}`);
    };

    return <div className="exercise-container">
        <div style={{width: "50%"}}>
            <ThemeProvider theme={theme}>
                {list?.map((item) => (
                    <Accordion key={item.id}>
                        <AccordionSummary>
                            <Typography>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <QuestionsTable
                                questions={item.questions}
                                onClick={handleItemClick}/>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </ThemeProvider>
        </div>
    </div>
}