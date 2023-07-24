import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await api.get(`/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    }
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const { title, content, image } = blog;

  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{content}</p>
    </div>
  );
};

export default BlogDetails;
