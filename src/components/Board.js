import React, { useState, useEffect } from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import '../styles/Board.css';

const Board = ({ user }) => {
    const [posts, setPosts] = useState([]);
    const [postToEdit, setPostToEdit] = useState(null);

    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(savedPosts);
    }, []);

    const addPost = (post) => {
        const updatedPosts = [post, ...posts];
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    };

    const updatePost = (updatedPost) => {
        const updatedPosts = posts.map(post =>
            post.id === updatedPost.id ? updatedPost : post
        );
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        setPostToEdit(null);
    };

    return (
        <div className="board">
            <h1>게시판</h1>
            {user && user.role === 'admin' && (
                <PostForm addPost={addPost} postToEdit={postToEdit} updatePost={updatePost} />
            )}
            <PostList posts={posts} />
        </div>
    );
};

export default Board;
