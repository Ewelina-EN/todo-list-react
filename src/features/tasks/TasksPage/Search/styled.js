import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 10px;

    ${({ Wrapper }) => Wrapper && css`
        @media(max-width:${({ theme }) => theme.breakpoint.mobileMax};) 
        {
            grid-template-columns: 1fr;
        }`
    }
`;