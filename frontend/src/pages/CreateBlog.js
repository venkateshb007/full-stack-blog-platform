import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api';

const CreateBlog = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = { title, content, image };
    try {
      await api.post('/blogs', blogData);
      history.push('/');
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form inputs for title, content, and image here */}
        <button type="submit" className="btn btn-primary">
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
