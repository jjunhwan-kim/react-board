import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import PostList from './post/PostList';
import Post from './post/Post';
import PostCreateForm from './post/PostCreateForm';
import PostEditForm from './post/PostEditForm';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/api/posts').then((response) => {
      console.log('api/posts called.');
      setPosts(response.data.posts);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<PostList posts={posts} />} />
      <Route path="/posts" element={<Post />} />
      <Route path="/create" element={<PostCreateForm />} />
      <Route path="/edit" element={<PostEditForm />} />
    </Routes>
  );
}

export default App;
