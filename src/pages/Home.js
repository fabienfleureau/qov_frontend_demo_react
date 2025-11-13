import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Claude Code</h1>
      <p className="subtitle">Your AI-powered coding assistant in the terminal</p>

      <div className="content">
        <section>
          <h2>What is Claude Code?</h2>
          <p>
            Claude Code is Anthropic's official CLI tool that brings Claude's powerful AI capabilities
            directly to your development environment. Work seamlessly with files, execute commands,
            and get intelligent coding assistance without leaving your terminal.
          </p>
        </section>

        <section>
          <h2>Why Claude Code?</h2>
          <ul>
            <li>Direct integration with your terminal workflow</li>
            <li>Context-aware code suggestions and completions</li>
            <li>File and project understanding</li>
            <li>Execute and test code in real-time</li>
            <li>Natural language interface for complex tasks</li>
          </ul>
        </section>

        <div className="cta">
          <Link to="/features" className="button">Explore Features →</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
