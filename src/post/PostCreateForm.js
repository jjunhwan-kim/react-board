import React from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostCreateForm = () => {
  return (
    <Container>
      <h1>Post Create</h1>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>제목</Form.Label>
        <Form.Control type="text" placeholder="제목을 입력하세요" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>내용</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="내용을 입력하세요" />
      </Form.Group>
      <Link to="/">
        <Button variant="secondary">목록</Button>
      </Link>
      <Button variant="primary">등록</Button>
    </Container>
  );
};

export default PostCreateForm;
