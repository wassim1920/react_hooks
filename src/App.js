import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieForm from './components/MovieCard';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm2902801408/',
      rating: 9.3
    },
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://www.imdb.com/title/tt0068646/mediaviewer/rm4233297920/',
      rating: 9.2
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://www.imdb.com/title/tt0468569/mediaviewer/rm2873059328/',
      rating: 9.0
    }
  ]);
  
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleTitleFilter = (event) => {
    setFilterTitle(event.target.value);
  };

  const handleRatingFilter = (event) => {
    setFilterRating(event.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(filterTitle.toLowerCase()) && movie.rating >= filterRating;
  });

  return (
    <div className="App">
      <h1>Movie List</h1>
      <Filter handleTitleFilter={handleTitleFilter} handleRatingFilter={handleRatingFilter} />
      <MovieForm handleAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
