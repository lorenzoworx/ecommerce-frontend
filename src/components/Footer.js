/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsLinkedin, BsYoutube, BsGithub, BsInstagram,
} from 'react-icons/bs';
import newsLetter from '../images/newsletter.png';

const Footer = () => (
  <>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src={newsLetter} alt="newsletter" />
              <h2 className="mb-0 text-white">Subscribe to the newsletter</h2>
            </div>
          </div>
          <div className="col-7">
            <div className="input-group">
              <input type="text" className="form-control py-1" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2" />
              <span className="input-group-text p-2" id="basic-addon2">
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className="text-white">Contact Us</h4>
            <div>
              <address className="text-white fs-6">
                Hno: 1 Nowhere drive,
                Neither here
                {' '}
                <br />
                {' '}
                Nor There
                Post Code: 000000
              </address>
              <a href="tel:+2340000000000" className="mt-3 d-block mb-2 text-white">+234 000 000 0000</a>
              <a href="mailto:test@test.com" className="mt-3 d-block mb-2 text-white">test@test.com</a>
              <div className="social_icons d-flex align-items-center gap-30">
                <a className="text-white" href="/">
                  <BsInstagram />
                </a>
                <a className="text-white" href="/">
                  <BsLinkedin />
                </a>
                <a className="text-white" href="/">
                  <BsYoutube />
                </a>
                <a className="text-white" href="/">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white">Information</h4>
            <div className="footer-links d-flex flex-column">
              <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
              <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
              <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
              <Link to="/terms-conditions" className="text-white py-2 mb-1">Terms and Conditions</Link>
              <Link to="/blogs" className="text-white py-2 mb-1">Blogs</Link>

            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white">Account</h4>
            <div className="footer-links d-flex flex-column">
              <Link to="/about" className="text-white py-2 mb-1">About Us</Link>
              <Link to="/" className="text-white py-2 mb-1">FAQ&apos;s</Link>
              <Link to="/contact" className="text-white py-2 mb-1">Contact</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className="text-white">Quick Links</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white py-2 mb-1">Laptops</Link>
              <Link className="text-white py-2 mb-1">Headphones</Link>
              <Link className="text-white py-2 mb-1">Tablets</Link>
              <Link className="text-white py-2 mb-1">Shoes</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              {' '}
              &copy;
              { new Date().getFullYear()}
              . Powered by Arogah The Store
              {' '}
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
