import React from 'react';

function GenreFilter({ genres, onFilterChange }) {
  return (
    <div>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => {
          console.log(`Genre selected: ${genre}`);
          onFilterChange(genre);
        }}>
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
