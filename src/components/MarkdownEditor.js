import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "../styles/App.css";

const MarkdownEditor = () => {
  const [text, setText] = useState("");

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter markdown here..."
      />

      <div className="preview">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
