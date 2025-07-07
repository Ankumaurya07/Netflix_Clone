import React from 'react';
import { TMDB_IMG_URL } from '../utils/constent';
import { useDispatch } from 'react-redux';
import { getId, setOpen } from '../redux/movieSlice';

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();

  if (!posterPath) return null;

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  };

  return (
    <div
  className="w-40 md:w-48 shadow-2xl lg:w-52 flex-shrink-0 cursor-pointer transition-transform transform hover:scale-105"
  onClick={handleOpen}
  role="button"
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' && handleOpen()}
>
  <img
    src={`${TMDB_IMG_URL}/${posterPath}`}
    alt="Movie poster"
    className="rounded-md shadow-md w-full h-auto object-cover"
  />
</div>
  
  );
};

export default MovieCard;
