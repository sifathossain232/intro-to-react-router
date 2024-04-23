import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDtail = () => {
    const friend = useLoaderData();
    const naviget = useNavigate();

    const handleGoBack = () => {
        naviget(-1)
    }
    // console.log(friend);
    return (
        <div>
            <h3 className='text-2xl font-bold mt-10'>Everything about this person is here</h3>
            <h4 className='text-2xl font-medium my-5'>Name: {friend.name}</h4>
            <p className='text-xl font-normal'>Phone: {friend.phone}</p>
            <div className='flex items-center justify-center mt-5 gap-5'>
                <button onClick={handleGoBack} className='font-semibold'>Go Back </button>
                <span className='font-semibold text-xl'><GoArrowLeft /></span>
            </div>
        </div>
    );
};

export default FriendDtail;