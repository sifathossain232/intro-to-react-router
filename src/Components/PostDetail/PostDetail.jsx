import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id, title, useId, body} = post;
    const naviget = useNavigate();
    
    const handleGoBack = () =>{
        naviget(-1)
    }
    return (
        <div className='mt-10'>
            <h3 className='mb-5 text-xl font-medium'>Details about your post of: {id}</h3>
            <h5 className='text-2xl font-normal mb-5'>{title}</h5>
            <p className='text-lg font-normal'><small>{body}</small></p>
            <div className='flex items-center justify-center mt-5 gap-3'>
                <button onClick={handleGoBack} className='font-semibold'>Go Back</button>
                <span className='font-semibold text-xl'><GoArrowLeft /></span>
            </div>
        </div>
    );
};

export default PostDetail;