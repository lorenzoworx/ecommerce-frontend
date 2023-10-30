import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../images/blog-1.jpg';

const BlogCard = () => (
  <div className="blog-card">
    <div className="card-image">
      <img src={blog1} alt="blog thumbnail" className="img-fluid w-100" />
    </div>
    <div className="blog-content">
      <p className="date">10th Oct, 2023</p>
      <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      <Link to="/blogs/id" className="button">Read More</Link>
    </div>
  </div>
);

export default BlogCard;
