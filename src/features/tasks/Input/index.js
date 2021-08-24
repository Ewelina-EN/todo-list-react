import styled from "styled-components";

export default styled.input`
    flex-basis: 75%;
    flex-grow: 1;
    margin: 10px;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.lightGrey};
`;