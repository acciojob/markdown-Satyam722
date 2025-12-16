import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [text, setText] = useState("");

  return (
    <div className="editor-container">
      <textarea
        className="textarea" // Required class name
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter markdown here..."
      />

      <div className="preview"> 
        {/* Required class name */}
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
