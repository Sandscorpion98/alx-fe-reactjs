import axios from 'axios';

const apiUrl = 'https://api.github.com/search/users?q={query}';
const apiKey = import.meta.env.VITE_GITHUB_API_KEY; 

export const fetchUserData = async (username, location, minRepos, page = 1) => {
  try {
    let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;
    
    const response = await axios.get(`${apiUrl}?${query}&page=${page}`, {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    });
    
    return { items: response.data.items, total_count: response.data.total_count };
  } catch (error) {
    console.error('Error fetching GitHub user data:', error);
    throw error;
  }
};


export default fetchUserData;
