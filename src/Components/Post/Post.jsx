import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const naviget = useNavigate();


    const handleNaviget = () =>{
        naviget(`/post/${id}`);
    }
    return (
        <div className='border-[2px] border-purple-500 mt-3 m-auto gap-3 w-7/12 p-3 rounded-lg'>
            <h5 className='text-xl font-medium'>ID: {id}</h5>
            <h4 className='text-xl font-normal my-4'>{title}</h4>
            <div className='text-xl font-medium flex gap-3 justify-center'>
                <Link to={`/post/${id}`} className='text-blue-500'>Show Details </Link>
                <Link to={`/post/${id}`}><button>Show Post Details </button></Link>
                <button onClick={handleNaviget}>With button handler</button>
            </div>
        </div>
    );
};

export default Post;