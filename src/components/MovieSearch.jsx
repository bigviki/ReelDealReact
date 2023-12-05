import React, { useState } from 'react';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const searchMovies = async () => {
    try {
      const response = await fetch(`http://localhost:5000/searchMovies?title=${searchTerm}`);
      const data = await response.json();
      setSearchResult(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h2>Movie Search</h2>
      <div>
        <label htmlFor="searchTerm">Search by Title:</label>
        <input
          type="text"
          id="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={searchMovies}>Search</button>
      </div>
      {searchResult ? (
        <div>
          <h3>Search Result:</h3>
          {searchResult.map((movie) => (
            <div key={movie._id}>
              <p>Title: {movie.original_title}</p>
              {/* Add other movie details as needed */}
            </div>
          ))}
        </div>
      ) : (
        <p>No search result yet. Enter a title and click Search.</p>
      )}
    </div>
  );
};

export default MovieSearch;