import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Board from './components/Board';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FinalSection from './components/FinalSection';
import './App.css';

function App() {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem('user'));
        if (savedUser) {
            setUser(savedUser);
        }
        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        setPosts(savedPosts);
    }, []);

    return (
        <Router>
            <div className="App">
                <Header user={user} setUser={setUser} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                    <Route path="/page4" element={<Page4 />} />
                    <Route path="/admin-login" element={<Login setUser={setUser} />} />
                    <Route path="/board" element={<Board user={user} />} />
                    <Route path="/post/:id" element={<PostDetail posts={posts} />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <FinalSection />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
