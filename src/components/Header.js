/* eslint-disable */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => (
  <>
    <header className="header-top-strip py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <p className="text-start text-white mb-0">Free shipping on orders over $100 & Free Returns</p>
          </div>
          <div className="col-6">
            <p className="text-end text-white mb-0">
              Telephone:
              <a className="text-white" href="tel:+2340000000000">+234 000 000 0000</a>
            </p>
          </div>
        </div>
      </div>
    </header>
    <header className="header-middle py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-2">
            <h2>
              <Link to="/" className="text-white">Arogah</Link>
            </h2>
          </div>
          <div className="col-5">
            <div className="input-group">
              <input type="text" className="form-control py-2" placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="basic-addon2" />
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className="fs-5" />
              </span>
            </div>
          </div>
          <div className="col-5">
            <div className="header-middle-links d-flex align-items-center justify-content-between">
              <div>
                <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
                  <img src="images/compare.svg" alt="compare products icon" />
                  <p className="mb-0">
                    Compare
                    <br />
                    {' '}
                    Products
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                  <img src="images/wishlist.svg" alt="wishlist" />
                  <p className="mb-0">
                    Favourite
                    <br />
                    Wishlist
                    {' '}
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                  <img src="images/user.svg" alt="user" />
                  <p className="mb-0">
                    Log in
                    <br />
                    My account
                    {' '}
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                  <img src="images/cart.svg" alt="cart" />
                  <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark">0</span>
                    <p className="mb-0">$500</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header className="header-bottom py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownMenuButton1">
                    <img src="images/menu.svg" alt="" />
                    <span className="me-5 d-inline-block">Shop Categories</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="">Action</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="">Another action</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="">Something else here</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-15">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/store">Our Store</NavLink>
                  <NavLink to="/blogs">Blogs</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
