// import { Link } from "react-router-dom";
import { styled } from "styled-components";
import SketchLines from "../components/SketchLines";
import { StyledLink } from "../components/StyledLink";

const StyledLinksWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
`;

const Links = () => {
  return (
    <SketchLines top bottom margin={20}>
      <StyledLinksWrapper>
        <StyledLink
          as="a"
          href="/setup"
          target="_blank"
          rel="noopener noreferrer"
        >
          /setup
        </StyledLink>
        {/* <StyledLink as={Link} to="/setup">
          /setup
        </StyledLink> */}
      </StyledLinksWrapper>
    </SketchLines>
  );
};

export default Links;
