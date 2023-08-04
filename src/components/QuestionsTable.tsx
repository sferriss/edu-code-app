import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../styles/question-table.css"
import {SimpleQuestionResponse} from "../interfaces/Responses/simpleQuestionResponse.ts";
import {DifficultyCard} from "./DifficultyCard.tsx";

interface QuestionsTableProps {
  onClick: (id: string) => void
  questions: SimpleQuestionResponse[];
}

export default function QuestionsTable({onClick, questions }: QuestionsTableProps) {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="table-head">Problema</TableCell>
            <TableCell className="table-head">Dificuldade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions?.map((q) => (
            <TableRow
                className="table-item"
                key={q.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => onClick(q.id)}>
              <TableCell className="table-cell">{q.title}</TableCell>
              <TableCell>
                <DifficultyCard difficulty={q.difficulty}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}