import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../styles/question-table.css"
import {Question} from "../interfaces/question.ts";

interface QuestionsTableProps {
  onClick: (id: string) => void
  questions: Question[]|undefined;
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
              <TableCell>{q.title}</TableCell>
              <TableCell>{q.difficulty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}