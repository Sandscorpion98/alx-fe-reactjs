import axios from 'axios';

const apiUrl = 'https://api.github.com/users';
const apiKey = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${apiUrl}/${username}`, {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user data:', error);
    throw error;
  }
};

export default fetchUserData;
