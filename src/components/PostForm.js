import React, { useState, useEffect } from 'react';
import '../styles/Board.css';

const PostForm = ({ addPost, postToEdit, updatePost }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [important, setImportant] = useState(false);
    const [bold, setBold] = useState(false);
    const [font, setFont] = useState('Arial');

    useEffect(() => {
        if (postToEdit) {
            setTitle(postToEdit.title);
            setContent(postToEdit.content);
            setImage(postToEdit.image);
            setImportant(postToEdit.important);
            setBold(postToEdit.bold);
            setFont(postToEdit.font);
        }
    }, [postToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            content,
            image,
            important,
            bold,
            font,
            id: postToEdit ? postToEdit.id : Date.now(),
        };
        if (postToEdit) {
            updatePost(newPost);
        } else {
            addPost(newPost);
        }
        setTitle('');
        setContent('');
        setImage(null);
        setImportant(false);
        setBold(false);
        setFont('Arial');
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="post-form">
            <div className="editor-toolbar">
                <label>
                    <input
                        type="checkbox"
                        checked={important}
                        onChange={(e) => setImportant(e.target.checked)}
                    />
                    중요 공지사항
                </label>
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <select value={font} onChange={(e) => setFont(e.target.value)}>
                    <option value="Arial">Arial</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Verdana">Verdana</option>
                </select>
                <button type="button" onClick={() => setBold(!bold)}>{bold ? '굵게 해제' : '굵게'}</button>
            </div>
            <div>
                <label>제목</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>내용</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit">{postToEdit ? '수정' : '작성'}</button>
        </form>
    );
};

export default PostForm;
