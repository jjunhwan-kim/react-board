import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PostList from './post/PostList';
import Post from './post/Post';
import PostCreateForm from './post/PostCreateForm';
import PostEditForm from './post/PostEditForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/posts" element={<Post />} />
      <Route path="/create" element={<PostCreateForm />} />
      <Route path="/edit" element={<PostEditForm />} />
    </Routes>
  );
}

export default App;
