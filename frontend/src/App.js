import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import EditBlog from './pages/EditBlog';
import BlogList from './pages/BlogList';
import BlogDetails from './pages/BlogDetails';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/create-blog" component={CreateBlog} />
          <Route path="/edit-blog/:id" component={EditBlog} />
          <Route path="/blogs" component={BlogList} />
          <Route path="/blogs/:id" component={BlogDetails} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;


