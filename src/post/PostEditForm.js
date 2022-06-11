import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';

const PostEditForm = () => {
  const post = useLocation().state.post;
  const [modifiedPost, setModifiedPost] = useState({
    title: post.title,
    content: post.content,
  });

  return (
    <Container>
      <h1>Post Edit</h1>
      <Form.Group className="mb-3" controlId="id">
        <Form.Label>글번호</Form.Label>
        <Form.Control type="text" value={post.id} readOnly />
      </Form.Group>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>제목</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={modifiedPost.title}
          onChange={(e) => {
            const nextForm = {
              ...modifiedPost,
              [e.target.name]: e.target.value,
            };
            setModifiedPost(nextForm);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>내용</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          rows={3}
          value={modifiedPost.content}
          onChange={(e) => {
            const nextForm = {
              ...modifiedPost,
              [e.target.name]: e.target.value,
            };
            setModifiedPost(nextForm);
          }}
        />
      </Form.Group>
      <Link to="/">
        <Button variant="secondary">목록</Button>
      </Link>
      <Button variant="primary" onClick={(e) => console.log(e)}>
        수정
      </Button>
      <Button variant="danger" onClick={(e) => console.log(e)}>
        삭제
      </Button>
    </Container>
  );
};

export default PostEditForm;
