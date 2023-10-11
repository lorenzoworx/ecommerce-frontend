import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" alt="blog thumbnail" className="img-fluid" />
        </div>
        <div className="blog-content">
          <p className="date">10th Oct, 2023</p>
          <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <Link className="button">Read More</Link>
        </div>
      </div>
    </div>
  )
};

export default BlogCard;