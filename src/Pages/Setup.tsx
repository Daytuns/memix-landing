import styled from "styled-components";
import { StyledLink } from "../components/StyledLink";
import memixLogo from "/media/logos/Group 3.svg";

const Background = styled.div`
  background-color: #f3f3f3;
  min-height: 100vh;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const Page = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0rem auto;
  padding-top: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  color: black;

  @media (max-width: 600px) {
    padding: 24px;
  }
  margin-bottom: 4rem;
`;

const CodeBlock = styled.code`
  background-color: #f5f5f5;
  padding: 12px;
  border-radius: 4px;
  display: block;
  font-family: "Consolas", "Monaco", monospace;
  margin: 1rem 0;
  border-left: 4px solid #ff4500;
`;

const InlineCode = styled.code`
  background-color: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: "Consolas", "Monaco", monospace;
`;

const Setup = () => {
  return (
    <Background>
      <Page>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: "row",
            marginBottom: "2rem",
            justifyContent: "space-between",
          }}
        >
          <img
            src={memixLogo}
            alt="memix logo"
            width={64}
            height={64}
            // style={{ border: "5px solid #f05033" }}
          />
          {new Date().getFullYear()}
        </div>

        <h1 style={{ color: "black" }}>Setup Guide</h1>

        <p>
          memix requires a Groq API key to generate commit messages. Follow
          these steps to get started:
        </p>

        <h3>Step 1: Get Your Groq API Key</h3>
        <p>
          Sign up and get a free API key at the{" "}
          <StyledLink
            as="a"
            href="https://console.groq.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#f05033" }}
          >
            Groq Console
          </StyledLink>
          .
        </p>

        <h3>Step 2: Configure Your API Key</h3>
        <p>You have two options to provide your API key to memix:</p>

        <h4>Option A: Environment File (Recommended)</h4>
        <p>
          Create a <InlineCode>.env</InlineCode> file in your project folder (or
          where you run memix) with this content:
        </p>
        <CodeBlock>GROQ_KEY=your_api_key_here</CodeBlock>

        <h4>Option B: Global Environment Variable</h4>
        <p>
          Alternatively, you can set <InlineCode>GROQ_KEY</InlineCode> as a
          global environment variable in your operating system.
        </p>

        <h3>Step 3: Run memix</h3>
        <p>
          Once your API key is configured, navigate to your git repository and
          run:
        </p>
        <CodeBlock>memix</CodeBlock>

        <h3>Important Security Notes</h3>
        <div
          style={{
            backgroundColor: "#fff3cd",
            border: "1px solid #ffeeba",
            borderRadius: "4px",
            padding: "1rem",
            margin: "1rem 0",
          }}
        >
          <p style={{ margin: 0 }}>
            <strong>⚠️ Keep your API key private!</strong>
            <br />• Never commit your <InlineCode>.env</InlineCode> file to
            version control
            <br />• Add <InlineCode>.env</InlineCode> to your{" "}
            <InlineCode>.gitignore</InlineCode> file
            <br />• Do not share your API key with others
          </p>
        </div>

        <h3>Windows Users</h3>
        <p>
          For Windows users, make sure you're using PowerShell or a terminal
          that supports <InlineCode>.env</InlineCode> files or environment
          variables.
        </p>

        <h3>Why I Ask You to Provide Your Own API Key</h3>
        <p>
          You might be wondering why memix doesn't "just work" out of the box
          without needing you to set up an API key.
        </p>
        <p>
          First, for security reasons, it is obvious not to embed a shared API
          key, but an actual option is to create a server to handle requests for
          you. (a "proxy")
        </p>
        <p>
          That server would accept the commit diff, send it to the AI provider
          using my hidden API key, and return the result. This way, you'd never
          see the key, and it would all just work.
        </p>
        <p>
          That's actually a solid approach, and I've done something similar in
          other projects. But right now:
        </p>
        <ul>
          <li>I'm already hosting other apps on Vercel's free plan.</li>
          <li>
            I want to keep things lightweight, low-maintenance, and free (for
            both you and me).
          </li>
        </ul>
        <p>
          So, for now, I decided not to host an extra server just for memix.
          It's something I may revisit in the future if more people start using
          the tool.
        </p>
        <p>
          For now, using your own API key is the safest and simplest solution,
          and I've made the setup process as easy as possible.
        </p>

        <h3>Need Help?</h3>
        <p>
          If you encounter any issues during setup, feel free to open an issue
          on the{" "}
          <StyledLink
            as="a"
            href="https://github.com/Daytuns/memix"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#f05033" }}
          >
            GitHub repository
          </StyledLink>
          .
        </p>
      </Page>
    </Background>
  );
};

export default Setup;
