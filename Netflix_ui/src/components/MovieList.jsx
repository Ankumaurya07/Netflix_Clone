import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies, searchMovie = false }) => {
  return (
    <section className="px-4 md:px-12 my-8">
      <h2
        className={`text-xl md:text-3xl font-bold ${
          searchMovie ? 'text-black' : 'text-white'
        } mb-5`}
      >
        {title}
      </h2>

      <div className="overflow-x-auto no-scrollbar ">
        <div className="flex gap-4 shadow-amber-50 ">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                posterPath={movie.poster_path}
              />
            ))
          ) : (
            <p className="text-gray-400">No movies found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieList;
