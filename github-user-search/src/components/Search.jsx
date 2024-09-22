import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { items, total_count } = await fetchUserData(username, location, minRepos, page);
      setUsers(items);
      setTotalCount(total_count);
      setLoading(false);
    } catch (err) {
      setError('Looks like we cant find users matching the criteria.');
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setPage(prevPage => prevPage + 1);
    setLoading(true);
    try {
      const { items } = await fetchUserData(username, location, minRepos, page + 1);
      setUsers(prevUsers => [...prevUsers, ...items]); 
      setLoading(false);
    } catch (err) {
      setError('Error loading more users');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            GitHub Username
          </label>
          <input 
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter GitHub username"
          />
        </div>
        
        <div>
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
            Location
          </label>
          <input 
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter location (optional)"
          />
        </div>

        <div>
          <label htmlFor="minRepos" className="block text-gray-700 font-bold mb-2">
            Minimum Repositories
          </label>
          <input 
            type="number"
            id="minRepos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter minimum number of repositories (optional)"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {users.length > 0 && (
        <div className="mt-4">
          <p className="font-bold text-gray-700 mb-2">Search Results ({totalCount} users found):</p>
          <ul className="space-y-4">
            {users.map(user => (
              <li key={user.id} className="border-b py-4">
                <div className="flex items-center space-x-4">
                  <img src={user.avatar_url} alt="Avatar" className="rounded-full w-12 h-12" />
                  <div>
                    <p><strong>Name:</strong> {user.login}</p>
                    <p><strong>Location:</strong> {user.location || 'Not specified'}</p>
                    <p><strong>Public Repositories:</strong> {user.public_repos}</p>
                    <a 
                      href={user.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline">
                      View GitHub Profile
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {users.length < totalCount && (
            <button
              onClick={handleLoadMore}
              className="w-full bg-gray-200 text-gray-700 py-2 px-4 mt-4 rounded-md hover:bg-gray-300 transition">
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
