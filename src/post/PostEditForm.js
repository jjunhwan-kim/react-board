import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

const PostEditForm = () => {
  const post = useLocation().state.post;
  const [modifiedPost, setModifiedPost] = useState({
    id: post.id,
    title: post.title,
    content: post.content,
  });

  const onChange = (e) => {
    const nextForm = {
      ...modifiedPost,
      [e.target.name]: e.target.value,
    };
    setModifiedPost(nextForm);
  };

  const navigate = useNavigate();

  const onModify = (e) => {
    axios
      .put('http://localhost/api/posts/' + modifiedPost.id, modifiedPost)
      .then((response) => {
        console.log('PUT /api/posts/' + modifiedPost.id + ' called.');
        navigate('/');
      });
  };

  const onDelete = (e) => {
    axios
      .delete('http://localhost/api/posts/' + modifiedPost.id, modifiedPost)
      .then((response) => {
        console.log('DELETE /api/posts/' + modifiedPost.id + ' called.');
        navigate('/');
      });
  };

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
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>내용</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          rows={3}
          value={modifiedPost.content}
          onChange={onChange}
        />
      </Form.Group>
      <Link to="/">
        <Button variant="secondary">목록</Button>
      </Link>
      <Button variant="primary" onClick={onModify}>
        수정
      </Button>
      <Button variant="danger" onClick={onDelete}>
        삭제
      </Button>
    </Container>
  );
};

export default PostEditForm;
