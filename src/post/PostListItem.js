import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = (props) => {
  const post = props.post;

  return (
    <tr>
      <td>{post.id}</td>
      <td>
        <Link to="/posts/" state={{ post: post }}>
          {post.title}
        </Link>
      </td>
    </tr>
  );
};

export default PostListItem;
