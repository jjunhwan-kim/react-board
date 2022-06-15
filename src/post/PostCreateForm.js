import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';

const PostCreateForm = () => {
  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  const onChange = (e) => {
    const nextForm = {
      ...post,
      [e.target.name]: e.target.value,
    };
    setPost(nextForm);
  };

  const navigate = useNavigate();

  const onSubmit = (e) => {
    axios.post('http://localhost/api/posts', post).then((response) => {
      console.log('POST /api/posts called.');
      navigate('/');
    });
  };

  return (
    <Container>
      <h1>Post Create</h1>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>제목</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="제목을 입력하세요"
          value={post.title}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>내용</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          rows={3}
          placeholder="내용을 입력하세요"
          value={post.content}
          onChange={onChange}
        />
      </Form.Group>
      <Link to="/">
        <Button variant="secondary">목록</Button>
      </Link>
      <Button variant="primary" onClick={onSubmit}>
        등록
      </Button>
    </Container>
  );
};

export default PostCreateForm;
