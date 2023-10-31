import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import blog1 from '../images/blog-1.jpg';

const SingleBlog = () => (
  <>
    <Meta title="Dynamic Blog Name" />
    <BreadCrumb title="Dynamic Blog Name" />
    <Container class1="blog-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-12">
          <div className="single-blog-card">
            <Link to="/blogs" className="d-flex align-items-center gap-10">
              <HiOutlineArrowLeft className="fs-4" />
              Go back to Blogs
            </Link>
            <h3 className="title">A beautiful Sunday Morning Renaissance</h3>
            <img src={blog1} alt="blog" className="img-fluid w-100 my-4" />
            <p>
              You&apos;re only as good as your last collection, which is an enormous pressure.
              I think there is something about luxury - it&apos;s not something people need,
              but it&apos;s what they want. It really pulls at their heart. I have a fantastic
              relationship with money. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </>
);

export default SingleBlog;
