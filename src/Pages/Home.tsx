import { Link } from "react-router-dom";
import ProjectList from "../ProjectList/ProjectList";
import { PROJECTS, PROJECTS_SHOWN_ON_HOMEPAGE } from "../constants";
import { StyledLink } from "../components/StyledLink";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Marquee from "../components/Marquee";
import ScrollText from "../components/ScrollText";
import Section from "../components/Section";

const Home = () => {
  return (
    <>
      <Header />

      {/* Spent so long making the <Path /> but turns out its ugly :( */}
      {/* <Path /> */}

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

      <Section title="Projects">
        <ProjectList projects={PROJECTS.slice(0, PROJECTS_SHOWN_ON_HOMEPAGE)} />
        {PROJECTS.length > PROJECTS_SHOWN_ON_HOMEPAGE && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.5rem 0 2rem 0",
            }}
          >
            <StyledLink as={Link} to="/projects">
              See more
            </StyledLink>
          </div>
        )}
      </Section>

      <Footer />
    </>
  );
};

export default Home;
