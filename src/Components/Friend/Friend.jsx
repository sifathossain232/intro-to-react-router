import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend);
    const {name, id, email, phone} = friend;
    return (
        <div className='border-[2px] border-orange-500 mt-3 w-72 h-48 rounded-lg m-auto p-2'>
            <h3 className='text-xl font-medium my-3'>{name}</h3>
            <p className='mb-3 text-base font-normal'>Email: {email}</p>
            <p className='my-3 text-base font-normal'>Phone: {phone}</p>
            <Link to={`/friend/${id}`} className='text-2xl text-sky-600'>Show me details</Link>
        </div>
    );
};

export default Friend;