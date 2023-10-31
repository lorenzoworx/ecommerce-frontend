import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import cross from '../images/cross.svg';
import watch from '../images/watch.jpg';

const Wishlist = () => (
  <>
    <Meta title="Wishlist" />
    <BreadCrumb title="Wishlist" />
    <Container class1="wishlist-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-3">
          <div className="wishlist-card position-relative">
            <img src={cross} alt="cross" className="position-absolute cross img-fluid" />
            <div className="wishlist-card-image">
              <img src={watch} alt="watch" className="img-fluid w-100" />
            </div>
            <div className="py-3 px-3">
              <h5 className="title">Honor T1</h5>
              <h6 className="price mb-3 mt-3">$100</h6>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="wishlist-card position-relative">
            <img src={cross} alt="cross" className="position-absolute cross img-fluid" />
            <div className="wishlist-card-image">
              <img src={watch} alt="watch" className="img-fluid w-100" />
            </div>
            <div className="py-3 px-3">
              <h5 className="title">Honor T1</h5>
              <h6 className="price mb-3 mt-3">$100</h6>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="wishlist-card position-relative">
            <img src={cross} alt="cross" className="position-absolute cross img-fluid" />
            <div className="wishlist-card-image">
              <img src={watch} alt="watch" className="img-fluid w-100" />
            </div>
            <div className="py-3 px-3">
              <h5 className="title">Honor T1</h5>
              <h6 className="price mb-3 mt-3">$100</h6>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="wishlist-card position-relative">
            <img src={cross} alt="cross" className="position-absolute cross img-fluid" />
            <div className="wishlist-card-image">
              <img src={watch} alt="watch" className="img-fluid w-100" />
            </div>
            <div className="py-3 px-3">
              <h5 className="title">Honor T1</h5>
              <h6 className="price mb-3 mt-3">$100</h6>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </>
);

export default Wishlist;
