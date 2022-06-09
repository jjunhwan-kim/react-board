import React, { useState } from 'react';

import { Button, Container, Form } from 'react-bootstrap';

const Post = () => {
  const [edit, setEdit] = useState(false);

  return (
    <Container>
      <h1>Post Read</h1>
      <Form.Group className="mb-3" controlId="id">
        <Form.Label>글번호</Form.Label>
        <Form.Control type="text" disabled={!edit} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>제목</Form.Label>
        <Form.Control
          type="text"
          placeholder="제목을 입력하세요"
          disabled={!edit}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>내용</Form.Label>
        <Form.Control
          type="text"
          placeholder="내용을 입력하세요"
          disabled={!edit}
        />
      </Form.Group>
      <Button variant="secondary">목록</Button>
      <Button variant="primary">수정</Button>
      {edit === true && <Button variant="danger">삭제</Button>}
    </Container>
  );
};

export default Post;
