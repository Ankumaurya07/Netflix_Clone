import React from 'react';
import useMovieById from '../hooks/useMovieById';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId, bool }) => {
  const trailerMovie = useSelector((store) => store.movie.trailerMovie);

  // Fetch the trailer when component mounts
  useMovieById(movieId);

  return (
    <div className="w-full overflow-hidden">
      {trailerMovie?.key && (
        <iframe
          className={bool ? 'w-full h-screen' : 'w-screen aspect-video'}
          src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerMovie.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoBackground;
