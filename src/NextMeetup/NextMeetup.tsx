import styled from "styled-components";
import { SECONDARY_COLOR } from "../constants";

const StyledWrapper = styled.div`
  position: relative;
  margin: auto;
  color: ${SECONDARY_COLOR};

  height: 100%;
`;

const StyledTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  user-select: none;
`;

const StyledDetail = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: rgb(255, 231, 227);
`;

const TerminalCommand = styled.span`
  font-family: "Fira Mono", "Consolas", "Menlo", monospace;
  color: white;
  font-size: 1.15em;
  font-weight: 600;
  letter-spacing: 0.01em;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);
`;

const NextMeetingIsTBC = () => (
  <StyledWrapper>
    <StyledTitle>
      <TerminalCommand>npm install -g memix</TerminalCommand>
    </StyledTitle>
    <StyledDetail>by daytunss</StyledDetail>
  </StyledWrapper>
);

const NextMeeting = () => {
  return <NextMeetingIsTBC />;
};

export default NextMeeting;
