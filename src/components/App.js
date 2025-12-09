import React, { useState, useEffect } from 'react';
import '../styles/App.css';

const App = () => {
  const [text, setText] = useState('# Hello, Markdown!');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Simple markdown parser
  const parseMarkdown = (markdown) => {
    return markdown.split('\n').map((line, i) => {
      if (line.startsWith('# ')) {
        return <h1 key={i}>{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={i}>{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={i}>{line.substring(4)}</h3>;
      } else if (line.includes('**')) {
        const parts = line.split('**');
        if (parts.length === 3) {
          return <p key={i}>{parts[0]}<strong>{parts[1]}</strong>{parts[2]}</p>;
        }
      }
      return <p key={i}>{line}</p>;
    });
  };

  return (
    <div className="app">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="container">
          <div className="editor">
            <h2>Editor</h2>
            <textarea
              className="textarea"
              value={text}
              onChange={handleChange}
              placeholder="Type your markdown here..."
            />
          </div>
          <div className="preview">
            <h2>Preview</h2>
            <div className="preview-content">
              {parseMarkdown(text)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
