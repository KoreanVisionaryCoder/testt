import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Board.css';

const PostDetail = ({ posts }) => {
    const { id } = useParams();
    const post = posts.find(post => post.id === parseInt(id));

    if (!post) {
        return <div>게시글을 찾을 수 없습니다.</div>;
    }

    return (
        <div className="post-detail">
            {post.image && <img src={post.image} alt="post" />}
            <h1 style={{ fontWeight: post.bold ? 'bold' : 'normal', fontFamily: post.font }}>
                {post.title}
            </h1>
            <p style={{ fontFamily: post.font }}>{post.content}</p>
        </div>
    );
};

export default PostDetail;
