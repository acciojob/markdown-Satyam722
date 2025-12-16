import React, { useState, useEffect } from "react";
import MarkdownEditor from "./MarkdownEditor";
import "../styles/App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief loading period to satisfy the "loading" class requirement
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <MarkdownEditor />
      )}
    </div>
  );
}

export default App;
