/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import watch from '../images/watch.jpg'

const Checkout = () => {
  return (
    <>
      <Meta title="checkout" />
      {/* <BreadCrumb title="checkout" /> */}
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Arogah</h3>
                <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/cart' className="text-dark total-price">cart</Link></li>
                    &nbsp; /
                    <li className="breadcrumb-item active total-price" aria-current="page">Information</li>
                    &nbsp; /
                    <li className="breadcrumb-item active total-price">Shipping</li>
                    &nbsp; /
                    <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">Admin (admin@test.com)</p>
                <h4 className="mb-3">Shipping Address</h4>
                <form action="" className="d-flex flex-wrap gap-15 justify-content-between">
                  <div className="w-100">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>Select Country</option>
                    </select>
                  </div>
                  <div className="flex-grow-1"><input type="text" name="" id="" className="form-control" placeholder="First Name" /></div>
                  <div className="flex-grow-1"><input type="text" name="" id="" className="form-control" placeholder="Last Name" /></div>
                  <div className="w-100"><input type="text" name="" id="" className="form-control" placeholder="Address"/></div>
                  <div className="w-100"><input type="text" name="" id="" className="form-control" placeholder="Apartment, Suite, etc. "/></div>
                  <div className="flex-grow-1"><input type="text" name="" id="" className="form-control" placeholder="City"/></div>
                  <div className="flex-grow-1">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>Select State</option>
                    </select>
                  </div>
                  <div className="flex-grow-1"><input type="text" name="" id="" className="form-control" placeholder="Zip Code"/></div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack className="me-2" />
                        Return to Cart
                      </Link>
                      <Link className="button">Continue to Shipping</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4" >
                <div className="d-flex gap-10 align-items-center mb-2">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span className="badge bg-secondary text-white rounded-circle p-2 position-absolute" style={{"top":"-10px", "right":"2px"}}>1</span>
                      <img src={watch} alt="Watch" className="img-fluid" />
                    </div>
                    <div>
                      <h5 className="total-price">Lorem</h5>
                      <p className="total-price">Ipsum</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">$ 100.00</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4" >
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total" >SubTotal</p>
                  <p className="total-price" >$ 1000.00</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total" >Shipping</p>
                  <p className="mb-0 total-price" >$ 1000.00</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-centre border-bottom py-4">
                <h4 className="total" >Total</h4>
                <h5 className="total-price" >$1000.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Checkout;