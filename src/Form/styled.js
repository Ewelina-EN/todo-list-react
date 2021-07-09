import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    background-color: white;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;

    ${({ StyledForm }) => StyledForm && css`
        @media(max-width:767px) {
            grid-template-columns: 1fr;
        }`
    }
`;

export const NewTask = styled.input`
    flex-basis: 75%;
    flex-grow: 1;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
`;

export const Button = styled.button`
    flex-grow: 1;
    background-color: teal;
    color: white;
    padding: 10px;
    margin: 10px;
    border: none;
    transition: 1s;
    cursor: pointer;

        &:hover{
            background-color: hsl(180, 100%, 30%);
            transform: scale(1.1);
            transition: 1s;
        }

        &:active{
            background-color: hsl(180, 100%, 35%);
        }
`;