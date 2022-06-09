import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const PostForm = () => {
  return (
    <Container>
      <h1>Post Create</h1>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>제목</Form.Label>
        <Form.Control type="text" placeholder="제목을 입력하세요" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>내용</Form.Label>
        <Form.Control type="text" placeholder="내용을 입력하세요" />
      </Form.Group>
      <Button variant="secondary">목록</Button>
      <Button variant="primary">등록</Button>
    </Container>
  );
};

export default PostForm;
