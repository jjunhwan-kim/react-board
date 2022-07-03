import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Table } from 'react-bootstrap';
import PostListItem from './PostListItem';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts').then((response) => {
      console.log('GET /api/posts called.');
      setPosts(response.data.posts);
    });
  }, []);

  const postList = posts.map((post) => {
    return <PostListItem key={post.id} post={post} />;
  });

  return (
    <Container>
      <h1>Post List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>{postList}</tbody>
      </Table>
      <Link to="/create">
        <Button variant="primary">등록</Button>
      </Link>
    </Container>
  );
};

export default PostList;
