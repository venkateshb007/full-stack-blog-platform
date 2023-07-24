import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import api from '../services/api';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await api.get('/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>All Blog Posts</h2>
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4" key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

