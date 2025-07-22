import styled from "styled-components";

const StyledFooterWrapper = styled.div`
  border: 5px solid #f05033;
  background: #f05033;
  width: inherit;
  margin: 3svw;
  margin-bottom: 11svh;
  padding: 32px;
  height: 50vh;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Attribution = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 10px;
  text-align: center;
  margin: 0;
  line-height: 1.3;
`;

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <LogoContainer>
        <img
          src="/media/logos/memix_white.svg"
          alt="memix logo"
          width={126}
          height={126}
        />
      </LogoContainer>
      <Attribution>
        Components adapted from Project Share with modifications for styling and
        functionality
      </Attribution>
    </StyledFooterWrapper>
  );
};

export default Footer;
