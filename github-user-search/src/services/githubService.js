// src/services/githubService.js
import axios from "axios";

// Base URL for GitHub API
const BASE_URL = "https://api.github.com/users/";

/**
 * Fetch GitHub user data by username
 * @param {string} username - GitHub username
 * @returns {Promise<Object>} - User data object
 */
export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${BASE_URL}${username}`, {
      headers: {
        // Optional: Use API key if you added one in .env
        Authorization: import.meta.env.VITE_APP_GITHUB_API_KEY
          ? `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
          : undefined,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error fetching user data");
  }
}
