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
import '../styles/shared.css';
import {SimpleTopicResponse} from "../interfaces/responses/simpleTopicResponse.ts";

interface TopicTableProps {
    onClick: (id: string) => void;
    topics: SimpleTopicResponse[];
}

const TopicRow: React.FC<{ topic: SimpleTopicResponse; onClick: (id: string) => void }> = ({ topic, onClick }) => (
    <TableRow
        className="table-item"
        key={topic.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        onClick={() => onClick(topic.id)}
    >
        <TableCell className="table-cell">{topic.title}</TableCell>
        <TableCell className="table-cell">{topic.description}</TableCell>
    </TableRow>
);

const TopicTable: React.FC<TopicTableProps> = ({ onClick, topics }) => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell className="table-head">Tópico</TableCell>
                    <TableCell className="table-head">Descrição</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {topics.map((t) => (
                    <TopicRow key={t.id} topic={t} onClick={onClick} />
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default TopicTable;