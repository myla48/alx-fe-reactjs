// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    setUser(null);

    if (!username) {
      setError("Please enter a GitHub username.");
      return;
    }

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("User not found or API error.");
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {user && (
        <div style={styles.result}>
          <img src={user.avatar_url} alt="avatar" style={styles.avatar} />
          <h2>{user.name || user.login}</h2>
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    marginTop: "20px",
  },
  input: {
    padding: "10px",
    width: "250px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#0366d6",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  result: {
    marginTop: "20px",
  },
  avatar: {
    width: "100px",
    borderRadius: "50%",
  },
};

export default Search;
