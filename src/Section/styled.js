import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background: white;
    box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 0 20px;
    flex-wrap: wrap;

    ${({ Header }) => Header && css`
        @media (max-width: 767 px) {
        flex-direction: column;
  }`}
`;

export const Title = styled.h2`
    font-size: 20px;
`;

