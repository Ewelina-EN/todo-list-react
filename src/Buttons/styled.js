import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background-color: transparent;
    color: teal;
    margin: 5px;
    border: none;
    font-size: 15px;
    transition: 1s;
    cursor: pointer;
        &:hover {
            color: hsl(180, 100%, 35%);
            transition: 1s;
        }
        &:active {
            color: hsl(180, 100%, 40%);
            transition: 1s;
        }
        &:disabled {
            color: #aaa;
            cursor: default;
        } 
`;