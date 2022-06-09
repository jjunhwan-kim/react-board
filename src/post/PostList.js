import React from 'react';
import { Container, Table } from 'react-bootstrap';

const PostList = ({ posts }) => {
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
        <tbody>
          {posts.map((post) => {
            return (
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default PostList;
