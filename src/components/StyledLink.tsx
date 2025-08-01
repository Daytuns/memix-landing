import styled from "styled-components";

export const StyledLink = styled.div`
  border-radius: 7px;
  padding: 0px 5px;
  border: 1px solid transparent;
  color: black;
  font-weight: 400;
  text-decoration: none;
  transition: 0.05s ease-in-out;
  user-select: none;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    text-decoration: underline #f05033;
    color: black;
  }
`;
