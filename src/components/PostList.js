import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import '../styles/Board.css';

const PostList = ({ posts }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 10;

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * postsPerPage;
    const currentPosts = posts.slice(offset, offset + postsPerPage);

    const sortedPosts = [...posts].sort((a, b) => b.important - a.important);

    return (
        <div>
            <ul className="post-list">
                {currentPosts.map((post) => (
                    <li key={post.id} className={`post-item ${post.important ? 'important' : ''}`}>
                        <Link to={`/post/${post.id}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                            <div className="title">{post.title}</div>
                            <div className="date">
                                {new Date(post.id).toLocaleDateString()}{' '}
                                {new Date(post.id).toLocaleTimeString()}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <ReactPaginate
                previousLabel={'이전'}
                nextLabel={'다음'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(posts.length / postsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                disabledClassName={'disabled'}
            />
        </div>
    );
};

export default PostList;
