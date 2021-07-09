import styled, { css } from "styled-components";

export const List = styled.ul`
    background-color: white;
    padding: 10px;
    margin: auto;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    align-items: center;

    ${({ hidden }) => hidden && css`
        word-break: break-word;
        flex-basis: 100%;
        flex-wrap: wrap;
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    text-align: center;
    width: 30px;
    height: 30px;
    margin: 0 10px;
    border: none;
    color: white;
    font-size: 16px;
    align-self: center;

    ${({ done }) => done && css`
        background-color: green;
        cursor: pointer;
        transition: 1s;
        
        &:hover {
            background-color: hsl(120, 100%, 35%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: red;
        cursor: pointer;
        transition: 1s;

        &:hover {
            background-color: hsl(0, 100%, 65%);
        }
    `}
`;