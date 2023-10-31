import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import wish from '../images/wish.svg';
import watch from '../images/watch.jpg';
import laptop from '../images/laptop.jpg';
import compare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import addCart from '../images/add-cart.svg';

const FeaturedProductCard = (props) => {
  const { grid } = props;
  const location = useLocation();

  return (
    <>
      <div className={` ${location.pathname === '/store' ? `gr-${grid}` : 'col-3'}`}>
        <Link to="/product/id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button type="button" className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="Product" />
            <img src={laptop} className="img-fluid" alt="Product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} activeColor="#ffd700" value={4} edit={false} />
            <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button type="button" className="border-0 bg-transparent">
                <img src={compare} alt="compare" />
              </button>
              <button type="button" className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button type="button" className="border-0 bg-transparent">
                <img src={addCart} alt="add cart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>

  );
};

FeaturedProductCard.propTypes = {
  grid: PropTypes.number,
};

FeaturedProductCard.defaultProps = {
  grid: 12,
};

export default FeaturedProductCard;
