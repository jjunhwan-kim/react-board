import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import PostList from './post/PostList';
import PostForm from './post/PostForm';
import Post from './post/Post';

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios.get('http://localhost/api/posts').then((response) => {
      console.log('get posts called.');
      setPosts(response.data.posts);
    });
  };

  useEffect(getPosts, []);

  return (
    <Routes>
      <Route path="/" element={<PostList posts={posts} />} />
      <Route path="/new" element={<PostForm />} />
      <Route path="/read" element={<Post />} />
    </Routes>
  );
}

export default App;
