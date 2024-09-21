import axios from 'axios';

const apiKey = process.env.REACT_APP_GITHUB_API_KEY;

export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub repos', error);
  }
};
