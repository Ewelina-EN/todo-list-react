import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.color.teal};
    margin: 5px;
    border: none;
    font-size: 15px;
    transition: 1s;
    cursor: pointer;
        &:hover {
            filter: brightness(110%);
        }
        &:active {
            filter: brightness(120%);
        }
        &:disabled {
            color: ${({ theme }) => theme.color.grey};
            cursor: default;
        } 
`;