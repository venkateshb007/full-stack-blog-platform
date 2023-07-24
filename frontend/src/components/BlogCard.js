import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const { id, title, content, image } = blog;

  return (
    <div className="card mb-4">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content.substring(0, 100)}...</p>
        <Link to={`/blogs/${id}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

