import React from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { API_END_POINT } from '../utils/constent';
import axios from 'axios';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice';

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setUser(null));
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <header className="absolute z-10 w-full flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black to-transparent">
      <img
        className="w-40 md:w-56"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      {user && (
        <div className="flex items-center gap-4">
          <IoIosArrowDropdown size={24} color="white" />
          <h1 className="text-white text-sm md:text-lg font-medium">{user.fullName}</h1>
          <div className="flex gap-2">
            <button
              onClick={logoutHandler}
              className="bg-red-700 hover:bg-red-800 text-white px-4 py-1.5 rounded-md text-sm"
            >
              Logout
            </button>
            <button
              onClick={toggleHandler}
              className="bg-red-700 hover:bg-red-800 text-white px-4 py-1.5 rounded-md text-sm"
            >
              {toggle ? 'Home' : 'Search Movie'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
