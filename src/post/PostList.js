import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Table } from 'react-bootstrap';
import PostListItem from './PostListItem';

const PostList = ({ posts }) => {
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
