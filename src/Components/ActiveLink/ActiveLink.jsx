import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink  ink
            to={to}
            className={({ isActive }) => isActive ?'text-orange-500 font-bold underline' : ''}
        >
            {children}
            <></>
        </NavLink>
    );
};

export default ActiveLink;