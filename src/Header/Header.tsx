import styled from "styled-components";
import FlippableCard from "../components/FlippableCard";
import NextMeeting from "../NextMeetup/NextMeetup";
import { Stage } from "@pixi/react";
import { ACCENT_COLOR } from "../constants";
import { useEffect, useRef, useState } from "react";

const StyledStage = styled(Stage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;

  @media (max-width: 768px) {
    pointer-events: none;
  }
`;

const ASCIIBackground = styled.pre`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Courier New", monospace;
  font-size: 0.7rem;
  font-weight: bolder;
  color: white;
  opacity: 0.5;
  margin: 0;
  z-index: 0;
  pointer-events: none;
  tetxt-align: center;
  user-select: none;
`;

const StyledHeaderWrapper = styled.div`
  outline: 5px solid #f05033;
  background: repeating-conic-gradient(
      #121212 0%,
      #121212 25%,
      #121212 0%,
      #f05033 30%
    )
    50% center / 3px 3px;
  width: inherit;
  margin: 3vw;
  height: 86svh;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <StyledHeaderWrapper ref={ref}>
      <ASCIIBackground>
        {`                                                                                                                                                                                                  
                                                                                                                           ''''''                                                                 
DDDDDDDDDDDDD                                                            tttt                                              '::::'                                     AAA               IIIIIIIIII
D::::::::::::DDD                                                      ttt:::t                                              '::::'                                    A:::A              I::::::::I
D:::::::::::::::DD                                                    t:::::t                                              ':::''                                   A:::::A             I::::::::I
DDD:::::DDDDD:::::D                                                   t:::::t                                             ':::'                                    A:::::::A            II::::::II
  D:::::D    D:::::D   aaaaaaaaaaaaa   yyyyyyy           yyyyyyyttttttt:::::ttttttt       ooooooooooo   nnnn  nnnnnnnn    ''''       ssssssssss                   A:::::::::A             I::::I  
  D:::::D     D:::::D  a::::::::::::a   y:::::y         y:::::y t:::::::::::::::::t     oo:::::::::::oo n:::nn::::::::nn           ss::::::::::s                 A:::::A:::::A            I::::I  
  D:::::D     D:::::D  aaaaaaaaa:::::a   y:::::y       y:::::y  t:::::::::::::::::t    o:::::::::::::::on::::::::::::::nn        ss:::::::::::::s               A:::::A A:::::A           I::::I  
  D:::::D     D:::::D           a::::a    y:::::y     y:::::y   tttttt:::::::tttttt    o:::::ooooo:::::onn:::::::::::::::n       s::::::ssss:::::s             A:::::A   A:::::A          I::::I  
  D:::::D     D:::::D    aaaaaaa:::::a     y:::::y   y:::::y          t:::::t          o::::o     o::::o  n:::::nnnn:::::n        s:::::s  ssssss             A:::::A     A:::::A         I::::I  
  D:::::D     D:::::D  aa::::::::::::a      y:::::y y:::::y           t:::::t          o::::o     o::::o  n::::n    n::::n          s::::::s                 A:::::AAAAAAAAA:::::A        I::::I  
  D:::::D     D:::::D a::::aaaa::::::a       y:::::y:::::y            t:::::t          o::::o     o::::o  n::::n    n::::n             s::::::s             A:::::::::::::::::::::A       I::::I  
  D:::::D    D:::::D a::::a    a:::::a        y:::::::::y             t:::::t    tttttto::::o     o::::o  n::::n    n::::n       ssssss   s:::::s          A:::::AAAAAAAAAAAAA:::::A      I::::I  
DDD:::::DDDDD:::::D  a::::a    a:::::a         y:::::::y              t::::::tttt:::::to:::::ooooo:::::o  n::::n    n::::n       s:::::ssss::::::s        A:::::A             A:::::A   II::::::II
D:::::::::::::::DD   a:::::aaaa::::::a          y:::::y               tt::::::::::::::to:::::::::::::::o  n::::n    n::::n       s::::::::::::::s        A:::::A               A:::::A  I::::::::I
D::::::::::::DDD      a::::::::::aa:::a        y:::::y                  tt:::::::::::tt oo:::::::::::oo   n::::n    n::::n        s:::::::::::ss        A:::::A                 A:::::A I::::::::I
DDDDDDDDDDDDD          aaaaaaaaaa  aaaa       y:::::y                     ttttttttttt     ooooooooooo     nnnnnn    nnnnnn         sssssssssss         AAAAAAA                   AAAAAAAIIIIIIIIII
                                             y:::::y                                                                                                                                              
                                            y:::::y                                                                                                                                               
                                           y:::::y                                                                                                                                                
                                          y:::::y                                                                                                                                                 
                                         yyyyyyy                                                                                                                                                  
                                                                                                                                                                                                  
                                                                                                                                                                                                  
                                                                                                                                                                                                  
                                                                                                                                                                                                  
                                 CCCCCCCCCCCCCLLLLLLLLLLL             IIIIIIIIII     TTTTTTTTTTTTTTTTTTTTTTT                                  lllllll                                             
                              CCC::::::::::::CL:::::::::L             I::::::::I     T:::::::::::::::::::::T                                  l:::::l                                             
                            CC:::::::::::::::CL:::::::::L             I::::::::I     T:::::::::::::::::::::T                                  l:::::l                                             
                           C:::::CCCCCCCC::::CLL:::::::LL             II::::::II     T:::::TT:::::::TT:::::T                                  l:::::l                                             
                          C:::::C       CCCCCC  L:::::L                 I::::I       TTTTTT  T:::::T  TTTTTT   ooooooooooo      ooooooooooo    l::::l                                             
                         C:::::C                L:::::L                 I::::I               T:::::T         oo:::::::::::oo  oo:::::::::::oo  l::::l                                             
                         C:::::C                L:::::L                 I::::I               T:::::T        o:::::::::::::::oo:::::::::::::::o l::::l                                             
                         C:::::C                L:::::L                 I::::I               T:::::T        o:::::ooooo:::::oo:::::ooooo:::::o l::::l                                             
                         C:::::C                L:::::L                 I::::I               T:::::T        o::::o     o::::oo::::o     o::::o l::::l                                             
                         C:::::C                L:::::L                 I::::I               T:::::T        o::::o     o::::oo::::o     o::::o l::::l                                             
                         C:::::C                L:::::L                 I::::I               T:::::T        o::::o     o::::oo::::o     o::::o l::::l                                             
                          C:::::C       CCCCCC  L:::::L         LLLLLL  I::::I               T:::::T        o::::o     o::::oo::::o     o::::o l::::l                                             
                           C:::::CCCCCCCC::::CLL:::::::LLLLLLLLL:::::LII::::::II           TT:::::::TT      o:::::ooooo:::::oo:::::ooooo:::::ol::::::l                                            
                            CC:::::::::::::::CL::::::::::::::::::::::LI::::::::I           T:::::::::T      o:::::::::::::::oo:::::::::::::::ol::::::l                                            
                              CCC::::::::::::CL::::::::::::::::::::::LI::::::::I           T:::::::::T       oo:::::::::::oo  oo:::::::::::oo l::::::l                                            
                                 CCCCCCCCCCCCCLLLLLLLLLLLLLLLLLLLLLLLLIIIIIIIIII           TTTTTTTTTTT         ooooooooooo      ooooooooooo   llllllll`}
      </ASCIIBackground>
      <FlippableCard
        key="unique"
        frontContent={
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              width: "100%",
            }}
          >
            <img
              src="/media/logos/Group 3.svg"
              alt="memix logo"
              width={120}
              height={120}
              // style={{ border: "5px solid #f05033" }}
            />
            <h1
              style={{
                fontSize: "3.75rem",
                margin: 0,
                color: "white",
                userSelect: "none",
              }}
            >
              memix <br /> docs
            </h1>
          </div>
        }
        backContent={
          <div
            style={{
              display: "flex",
            }}
          >
            <NextMeeting />
          </div>
        }
      />
    </StyledHeaderWrapper>
  );
};

export default Header;
