// src/App.jsx
import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>GitHub User Search</h1>
      <p style={styles.subtitle}>
        Enter a GitHub username below to fetch profile details.
      </p>
      <Search />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    marginTop: "50px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#333",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "20px",
  },
};

export default App;
