import React from 'react';
import { Link } from 'react-router-dom';

function Features() {
  const features = [
    {
      title: '🔧 Tool Integration',
      description: 'Read, write, and edit files. Execute bash commands. Search codebases with grep and glob patterns.'
    },
    {
      title: '🤖 AI-Powered Assistance',
      description: "Get intelligent code suggestions, refactoring help, and bug fixes powered by Claude's advanced AI."
    },
    {
      title: '📝 Context Awareness',
      description: 'Claude understands your entire project structure and maintains context throughout your session.'
    },
    {
      title: '🚀 Task Automation',
      description: 'Automate complex workflows with specialized agents for testing, reviewing, and deploying code.'
    },
    {
      title: '🔍 Code Search',
      description: 'Quickly find files and code patterns across your entire codebase with intelligent search.'
    },
    {
      title: '💬 Natural Language',
      description: 'Describe what you want in plain English, and Claude translates it into working code.'
    }
  ];

  return (
    <div className="page">
      <h1>Claude Code Features</h1>
      <p className="subtitle">Powerful capabilities at your fingertips</p>

      <div className="content">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="cta">
          <Link to="/" className="button">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Features;
