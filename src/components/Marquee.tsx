import styled from "styled-components";
import { motion, useSpring, useViewportScroll } from "framer-motion";
import { ACCENT_COLOR } from "../constants";
import { useEffect } from "react";

const MarqueeContainer = styled.div`
  position: relative;
  height: max-content;
  overflow: hidden;
`;

const Track = styled(motion.a)`
  white-space: nowrap;
  height: 50px;
  position: relative;
  transition: background-color 0.2s ease;
  background-color: ${ACCENT_COLOR};

  width: 500vw;
  z-index: 5;
  padding: 0.5rem 0;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 4rem;

  &:hover {
    background-color: white;

    h1 {
      color: ${ACCENT_COLOR};
    }

    svg path {
      fill: ${ACCENT_COLOR};
    }
  }
`;

const Title = styled.h1`
  color: white;
  margin: 0;
  font-size: 32px;
  font-family: "Helvetica Neue";
  font-weight: 500;
  transition: color 0.2s ease;
`;

interface Banner {
  bannerName: string;
  bannerLink: string;
}

const Marquee = ({ bannerName, bannerLink }: Banner) => {
  const direction = Math.random() > 0.5 ? 1 : -1;

  const { scrollYProgress } = useViewportScroll();
  const marqueeX = useSpring(0, { stiffness: 300, damping: 200 });

  useEffect(() => {
    const unsubscribeY = scrollYProgress.onChange((latest: any) => {
      marqueeX.set(latest * -1035 * direction);
    });

    return () => {
      unsubscribeY();
    };
  }, [scrollYProgress, marqueeX]);

  return (
    <MarqueeContainer>
      <Track
        href={bannerLink}
        target="_blank"
        // ref={trackRef}
        style={{ x: marqueeX }}
      >
        {Array.from({ length: 50 }).map(() => (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Title>{bannerName}</Title>
            <svg
              width="24"
              height="24"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.87868 35.8787C-0.292893 37.0503 -0.292893 38.9497 0.87868 40.1213C2.05025 41.2929 3.94975 41.2929 5.12132 40.1213L0.87868 35.8787ZM41 3C41 1.34314 39.6569 -1.66829e-06 38 -1.59846e-06L11 -4.60494e-07C9.34315 -3.90663e-07 8 1.34315 8 3C8 4.65685 9.34315 6 11 6L35 6L35 30C35 31.6569 36.3431 33 38 33C39.6569 33 41 31.6569 41 30L41 3ZM5.12132 40.1213L40.1213 5.12132L35.8787 0.878678L0.87868 35.8787L5.12132 40.1213Z"
                fill="white"
              />
            </svg>
          </div>
        ))}
      </Track>
    </MarqueeContainer>
  );
};

export default Marquee;
