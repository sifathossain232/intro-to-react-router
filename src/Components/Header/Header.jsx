import React from 'react';
<<<<<<< HEAD
// import { Link} from 'react-router-dom';
=======

>>>>>>> c3e0af0ceeb8d63defe778932ea95d7b5ec1a262
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='flex gap-5 items-center justify-center text-2xl font-normal '>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink  to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
        </nav>
    );
};

export default Header;
