import "../styles/exercise.css"
import {Accordion, AccordionDetails, AccordionSummary, createTheme, ThemeProvider, Typography} from "@mui/material";
import QuestionsTable from "../components/QuestionsTable.tsx";

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
    const items = [
        {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            title: "Lista sobre arrays",
            questionTotal: 1,
            createdAt: "2023-07-13T22:12:37.993Z",
            questions: [
                {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    title: "Some os valores do array",
                    difficulty: "Easy"
                },
                {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
                    title: "Encontre o maior valor",
                    difficulty: "Easy"
                },
            ],
        },
        {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
            title: "Lista sobre matriz",
            questionTotal: 1,
            createdAt: "2023-07-13T22:12:37.993Z",
            questions: [
                {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    title: "Some os valores da matriz",
                    difficulty: "Medium"
                },
            ],
        },
    ];

    return <div className="exercise-container">
        <div style={{width: "50%"}}>
            <ThemeProvider theme={theme}>
                {items.map((item) => (
                    <Accordion key={item.id}>
                        <AccordionSummary>
                            <Typography>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <QuestionsTable questions={item.questions}/>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </ThemeProvider>
        </div>
    </div>
}