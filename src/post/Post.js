import { Link, useLocation } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';

const Post = () => {
  const post = useLocation().state.post;

  return (
    <Container>
      <h1>Post Read</h1>
      <Form.Group className="mb-3" controlId="id">
        <Form.Label>글번호</Form.Label>
        <Form.Control type="text" value={post.id} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>제목</Form.Label>
        <Form.Control type="text" value={post.title} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>내용</Form.Label>
        <Form.Control as="textarea" rows={3} value={post.content} disabled />
      </Form.Group>
      <Link to="/">
        <Button variant="secondary">목록</Button>
      </Link>
      <Link to="/edit/" state={{ post: post }}>
        <Button variant="primary">수정</Button>
      </Link>
    </Container>
  );
};

export default Post;
