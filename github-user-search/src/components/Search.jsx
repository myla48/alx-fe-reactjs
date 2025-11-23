// src/components/Search.jsx
import React, { useState } from "react";
import { searchUsers } from "../services/githubService"; // ✅ advanced search function

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setUsers([]);
    setLoading(true);

    if (!query) {
      setError("Looks like we cant find the user");
      setLoading(false);
      return;
    }

    try {
      // ✅ Use searchUsers instead of fetchUserData
      const results = await searchUsers(query, location, minRepos);
      if (results.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setUsers(results);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map((u) => (
          <div key={u.id} className="border p-4 rounded flex items-center space-x-4">
            <img src={u.avatar_url} alt="avatar" className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="font-bold">{u.login}</h2>
              <a
                href={u.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
