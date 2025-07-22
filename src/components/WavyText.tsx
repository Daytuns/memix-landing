import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const wavyAnimation = keyframes`
    40% {
      color: white;
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
    50% {
      color: #F05033;
      opacity: 1;
      transform: translateY(-3px) scale(0.9);
    }
    
    60% {
      color: white;
      opacity: 1;
      transform: translateY(0px) scale(1);
    }
  `;

const WavySpan = styled.span<{ delay: number }>`
  display: inline-block;
  animation: ${wavyAnimation} 3s ease infinite;
  animation-delay: ${({ delay }) => delay}ms;
`;

const WavyText = ({ text, ...props }: { text: string }) => {
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    setLetters(text.split(""));
  }, [text]);

  return (
    <span
      {...props}
      style={{
        display: "inline-block",
        whiteSpace: "pre",
      }}
    >
      {letters.map((letter, index) => (
        <WavySpan key={index} delay={index * 60}>
          {letter}
        </WavySpan>
      ))}
    </span>
  );
};

export default WavyText;
