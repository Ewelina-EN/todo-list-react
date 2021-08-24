import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledButtons, Button } from "./styled";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

const DownloadButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    return (
        <StyledButtons>
            <>
                <Button
                    disabled={loading}
                    onClick={() => dispatch(fetchExampleTasks())}>
                {
                    loading
                    ? "Ładowanie..."
                    : "Pobierz przykładowe zadanie"
                } 
                </Button>
            </>
        </StyledButtons>
    );
};
export default DownloadButton;