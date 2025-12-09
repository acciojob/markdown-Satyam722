import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [markdownText, setMarkdownText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div className="app">
      <h1>Markdown Editor</h1>
      
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="editor-container">
          <div className="input-section">
            <h2>Markdown Input</h2>
            <textarea
              className="textarea"
              value={markdownText}
              onChange={handleChange}
              placeholder="Start typing your markdown here..."
            />
          </div>
          
          <div className="output-section">
            <h2>Preview</h2>
            <div 
              className="preview"
              dangerouslySetInnerHTML={{ 
                __html: markdownText
                  .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                  .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                  .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                  .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
                  .replace(/\*(.*)\*/gim, '<em>$1</em>')
                  .replace(/\n/g, '<br />')
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
