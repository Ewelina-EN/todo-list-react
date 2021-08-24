import styled, { css } from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    background-color: ${({ theme }) => theme.color.white};
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;

    ${({ StyledForm }) => StyledForm && css`
        @media(max-width:${({ theme }) => theme.breakpoint.mobileMax};) 
        {
            grid-template-columns: 1fr;
        }`
    }
`;

export const Button = styled.button`
    flex-grow: 1;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
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