import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 5px  ${({ theme }) => theme.color.silver};
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.color.silver};
    padding: 0 20px;
    flex-wrap: wrap;

    ${({ Header }) => Header && css`
        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        flex-direction: column;
  }`}
`;

export const Title = styled.h2`
    font-size: 20px;
`;

