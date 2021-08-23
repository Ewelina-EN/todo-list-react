import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledList = styled.ul`
    padding: 20px;
    text-align: center;
    background-color: ${({ theme }) => theme.color.teal};
    margin: 0;
`;

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    padding: 20px;
&.${activeClassName} {
    font-weight: bolder;
    }
`;