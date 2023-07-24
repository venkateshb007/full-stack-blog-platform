import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../services/api';

const EditBlog = () => {
  const { id } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await api.get(`/blogs/${id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
        setImage(response.data.image);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    }
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = { title, content, image };
    try {
      await api.put(`/blogs/${id}`, blogData);
      history.push('/');
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div>
      <h2>Edit Blog Post</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form inputs for title, content, and image here */}
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
