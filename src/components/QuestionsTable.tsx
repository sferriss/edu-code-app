import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { DifficultyCard } from './DifficultyCard';
import '../styles/shared.css';
import {SimpleQuestionResponse} from "../interfaces/responses/simpleQuestionResponse.ts";

interface QuestionsTableProps {
  onClick: (id: string) => void;
  questions: SimpleQuestionResponse[];
}

const QuestionRow: React.FC<{ question: SimpleQuestionResponse; onClick: (id: string) => void }> = ({ question, onClick }) => (
    <TableRow
        className="table-item"
        key={question.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        onClick={() => onClick(question.id)}
    >
      <TableCell className="table-cell">{question.title}</TableCell>
      <TableCell>
        <DifficultyCard difficulty={question.difficulty} />
      </TableCell>
    </TableRow>
);

const QuestionsTable: React.FC<QuestionsTableProps> = ({ onClick, questions }) => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="table-head">Problema</TableCell>
            <TableCell className="table-head">Dificuldade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((q) => (
              <QuestionRow key={q.id} question={q} onClick={onClick} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
);

export default QuestionsTable;
