import { Link } from "react-router-dom";
import { useState } from "react";
import { StyledLink } from "../components/StyledLink";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Marquee from "../components/Marquee";
import ScrollText from "../components/ScrollText";
import Section from "../components/Section";
import Terminal from "../components/Terminal";

const Home = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Failed to copy text: ", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  // Copy icon SVG
  const CopyIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  );

  // Check icon SVG
  const CheckIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20,6 9,17 4,12"></polyline>
    </svg>
  );

  return (
    <>
      <Header />

      <Section title="Intro">
        <ScrollText
          content={[
            "memix is an AI-powered command-line tool",
            "that automatically generates clean, conventional git commit messages",
            "based on your staged changes.",
          ]}
        />
        <br />
        <br />
        <br />
        <ScrollText
          content={[
            "This is just the beginning,",
            "memix is my personal toolbox in progress.",
            "I plan to keep building it out with simple, effective CLI tools for everyday dev annoyances.",
          ]}
        />
      </Section>

      <div
        style={{
          position: "relative",
          margin: "5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            transform: "rotate(-7deg)",
          }}
        >
          <Marquee
            bannerName="Github Repo"
            bannerLink="https://github.com/Daytuns/memix"
          />
        </div>
        <div
          style={{
            transform: "rotate(5deg) translateY(-50px)",
          }}
        >
          <Marquee
            bannerName="Package"
            bannerLink="https://www.npmjs.com/package/memix"
          />
        </div>
      </div>

      <Section title="Usage">
        <div
          style={{
            display: "flex",
            gap: "3rem",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              color: "white",
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            <h3
              style={{
                color: "white",
                opacity: "0.3",
                fontSize: "20px",
              }}
            >
              Install with
            </h3>
            <div style={{ marginBottom: "2rem", position: "relative" }}>
              <code
                style={{
                  background: "#1a1a1a",
                  padding: "8px 12px",
                  paddingRight: "40px", // Make room for the icon
                  borderRadius: "4px",
                  border: "1px solid #333",
                  display: "block",
                  fontFamily: "monospace",
                  position: "relative",
                }}
              >
                npm install -g memix
              </code>
              <button
                onClick={() => copyToClipboard("npm install -g memix")}
                style={{
                  position: "absolute",
                  right: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: copied ? "#f05033" : "#666",
                  cursor: "pointer",
                  padding: "4px",
                  borderRadius: "3px",
                  transition: "color 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) => {
                  if (!copied) {
                    e.currentTarget.style.color = "#f05033";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!copied) {
                    e.currentTarget.style.color = "#666";
                  }
                }}
                title={copied ? "Copied!" : "Copy to clipboard"}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </button>
            </div>

            <h3
              style={{
                color: "white",
                opacity: "0.3",
                fontSize: "20px",
              }}
            >
              How to Use
            </h3>
            <ol style={{ paddingLeft: "1.2rem", marginBottom: "2rem" }}>
              <li style={{ marginBottom: "0.8rem" }}>
                Navigate to your git repository
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                Stage your changes with{" "}
                <code
                  style={{
                    background: "#1a1a1a",
                    padding: "2px 6px",
                    borderRadius: "3px",
                  }}
                >
                  git add
                </code>
              </li>
              <li style={{ marginBottom: "0.8rem" }}>
                Run{" "}
                <code
                  style={{
                    background: "#1a1a1a",
                    padding: "2px 6px",
                    borderRadius: "3px",
                  }}
                >
                  memix
                </code>
              </li>
              <li>Confirm the generated commit message</li>
            </ol>

            <div
              style={{
                background: "#1a1a1a",
                borderRadius: "6px",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <p style={{ margin: 0, fontSize: "14px" }}>
                <strong style={{ color: " #f05033" }}>Setup Required:</strong>
                <br />
                You'll need a Groq API key to use memix.{" "}
                <StyledLink as={Link} to="/setup" style={{ color: " #f05033" }}>
                  View setup guide
                </StyledLink>
              </p>
            </div>
          </div>

          <div style={{ flex: "1.2", minWidth: "400px" }}>
            <Terminal />
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default Home;
