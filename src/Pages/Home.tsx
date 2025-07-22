import { Link } from "react-router-dom";
import ProjectList from "../ProjectList/ProjectList";
import { PROJECTS, PROJECTS_SHOWN_ON_HOMEPAGE } from "../constants";
import { StyledLink } from "../components/StyledLink";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Marquee from "../components/Marquee";
import ScrollText from "../components/ScrollText";
import Section from "../components/Section";
import { TerminalOutput } from "react-terminal-ui";
import Terminal from "../components/Terminal";

const Home = () => {
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
            "I plan to keep building it out with simple, effective CLI tools for everyday dev annoyances",
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
                // marginBottom: "1.5rem",
                fontSize: "20px",
              }}
            >
              Install with
            </h3>
            <div style={{ marginBottom: "2rem" }}>
              <code
                style={{
                  background: "#1a1a1a",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  border: "1px solid #333",
                  display: "block",
                  marginBottom: "1rem",
                  fontFamily: "monospace",
                }}
              >
                npm install -g memix
              </code>
            </div>

            <h3
              style={{
                color: "white",
                opacity: "0.3",
                // marginBottom: "1.5rem",
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
                border: "1px solid  #f05033",
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
                  View setup guide →
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
