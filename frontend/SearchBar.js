import React, { useState } from 'react';

const SearchImage = ({ imageData }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Filter the images based on the search query and name field
    const filteredResults = imageData.filter((image) =>
      image.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by image name..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <div>
            {searchResults.map((image) => (
              <img
                key={image.id}
                src={image.url}
                alt={image.name}
                style={{ width: '500px', height: '500px', margin: '5px' }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchImage;
