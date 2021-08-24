import React from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import StyledContainer from "../../../common/Container";
import { getTaskById } from "../tasksSlice";
import { StyledDescription } from "../../author/styled";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <StyledContainer>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                body={
                    <StyledDescription>
                        <strong>Ukończono: {" "}</strong> {task.done ? "Tak" : "Nie"}
                    </StyledDescription>
                }
            />
        </StyledContainer>
    );
}

export default TaskPage;
