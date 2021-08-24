import React from "react";
import { useDispatch } from "react-redux";
import { StyledButtons, Button } from "./styled";
import { fetchExampleTasks } from "../../tasksSlice";

const DownloadButton = () => {
    const dispatch = useDispatch();
    return (
        <StyledButtons>
            <>
                <Button
                    onClick={() => dispatch(fetchExampleTasks())}
                >
                    Pobierz przykładowe zadania
                </Button>
            </>
        </StyledButtons>
    );
};
export default DownloadButton;