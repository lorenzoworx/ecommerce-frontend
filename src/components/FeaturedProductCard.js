import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const FeaturedProductCard = (props) => {
  const {grid} = props
  let location = useLocation();
  
  return (
    <>
      <div className={` ${location.pathname === '/store' ? `gr-${grid}` : 'col-3'}`}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />          
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="Product" />
            <img src="images/laptop.jpg" className="img-fluid" alt="Product" />
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
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
    
  )
};

export default FeaturedProductCard;