import React, { useState, useEffect } from 'react';
import '../styles/App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('# Hello, Markdown!');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <h1>Markdown Editor</h1>
      
      {loading && <div className="loading">Loading...</div>}
      
      <div className="editor-container">
        <div className="editor-section">
          <h2>Editor</h2>
          <textarea
            className="textarea"
            value={markdown}
            onChange={handleChange}
            placeholder="Type your markdown here..."
          />
        </div>
        
        <div className="preview-section">
          <h2>Preview</h2>
          <div className="preview">
            {markdown.split('\n').map((line, i) => {
              if (line.startsWith('# ')) {
                return <h1 key={i}>{line.substring(2)}</h1>;
              } else if (line.startsWith('## ')) {
                return <h2 key={i}>{line.substring(3)}</h2>;
              } else if (line.startsWith('### ')) {
                return <h3 key={i}>{line.substring(4)}</h3>;
              } else if (line.startsWith('#### ')) {
                return <h4 key={i}>{line.substring(5)}</h4>;
              } else if (line.startsWith('##### ')) {
                return <h5 key={i}>{line.substring(6)}</h5>;
              } else if (line.startsWith('###### ')) {
                return <h6 key={i}>{line.substring(7)}</h6>;
              } else if (line.includes('**') && line.split('**').length === 3) {
                const parts = line.split('**');
                return <p key={i}>{parts[0]}<strong>{parts[1]}</strong>{parts[2]}</p>;
              } else if (line.includes('*') && line.split('*').length === 3 && !line.startsWith('*')) {
                const parts = line.split('*');
                return <p key={i}>{parts[0]}<em>{parts[1]}</em>{parts[2]}</p>;
              } else if (line.trim() === '') {
                return <br key={i} />;
              } else {
                return <p key={i}>{line}</p>;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
