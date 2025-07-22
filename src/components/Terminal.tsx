// components/Terminal.tsx
import React, { useState, useEffect } from "react";
import "./Terminal.css";

interface TerminalLine {
  text: string;
  type:
    | "prompt"
    | "command"
    | "info"
    | "tip"
    | "empty"
    | "label"
    | "suggestion"
    | "input"
    | "success";
  speed: number;
}

interface DisplayedLine extends TerminalLine {
  displayedText: string;
}

const Terminal: React.FC = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [displayedLines, setDisplayedLines] = useState<DisplayedLine[]>([]);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const terminalLines: TerminalLine[] = [
    { text: "PS C:\\User\\Dayton\\MyRepo> ", type: "prompt", speed: 30 },
    { text: "memix", type: "command", speed: 100 },
    {
      text: "[dotenv@17.2.0] injecting env (1) from .env",
      type: "info",
      speed: 20,
    },
    {
      text: "(tip: 🔐 prevent building .env in docker: https://dotenvx.com/prebuild)",
      type: "tip",
      speed: 15,
    },
    { text: "", type: "empty", speed: 200 },
    { text: "Suggested commit message:", type: "label", speed: 30 },
    { text: "", type: "empty", speed: 200 },
    {
      text: '"Update Marquee component to accept and display banner name and link"',
      type: "suggestion",
      speed: 25,
    },
    { text: "✔ Use this commit message? ", type: "prompt", speed: 30 },
    { text: "Yes", type: "input", speed: 150 },
    { text: "Commit created!", type: "success", speed: 50 },
  ];

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) {
      setIsComplete(true);
      return;
    }

    const currentLine = terminalLines[currentLineIndex];
    const timer = setTimeout(() => {
      if (currentCharIndex < currentLine.text.length) {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (!newLines[currentLineIndex]) {
            newLines[currentLineIndex] = { ...currentLine, displayedText: "" };
          }
          newLines[currentLineIndex].displayedText = currentLine.text.substring(
            0,
            currentCharIndex + 1
          );
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        // Move to next line
        setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, currentLine.speed * 2);
      }
    }, currentLine.speed);

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        {/* <div className="terminal-buttons">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimize"></div>
          <div className="terminal-button maximize"></div>
        </div> */}
        <div className="terminal-title">Terminal</div>
      </div>
      <div className="terminal-content">
        {displayedLines
          .filter((line): line is DisplayedLine => line !== undefined)
          .map((line, index) => (
            <div key={index} className={`terminal-line ${line.type}`}>
              {line.type === "prompt" && index === 0 ? (
                <>
                  <span className="terminal-prompt">{line.displayedText}</span>
                  {index === currentLineIndex && !isComplete && (
                    <span className="terminal-cursor">|</span>
                  )}
                </>
              ) : (
                <>
                  {line.displayedText}
                  {index === currentLineIndex && !isComplete && (
                    <span className="terminal-cursor">|</span>
                  )}
                </>
              )}
            </div>
          ))}
        {!isComplete && <span className="terminal-cursor">|</span>}
      </div>
    </div>
  );
};

export default Terminal;
