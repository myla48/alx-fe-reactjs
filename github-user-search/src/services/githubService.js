// src/services/githubService.js
import axios from "axios";

/**
 * Search GitHub users with optional filters
 * @param {string} query - GitHub username or keyword
 * @param {string} location - Optional location filter
 * @param {string|number} minRepos - Optional minimum repositories filter
 * @returns {Promise<Array>} - List of matching users
 */
export async function searchUsers(query, location, minRepos) {
  try {
    // Build search query string
    let searchQuery = query;
    if (location) searchQuery += ` location:${location}`;
    if (minRepos) searchQuery += ` repos:>=${minRepos}`;

    // Call GitHub Search API
    const response = await axios.get(
      `https://api.github.com/search/users?q=${searchQuery}`
    );

    return response.data.items; // array of users
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error fetching users");
  }
}
