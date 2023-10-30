/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from 'react-icons/ai'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import watch from '../images/watch.jpg';

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1" >Product</h4>
                <h4 className="cart-col-2" >Price</h4>
                <h4 className="cart-col-3" >Quantity</h4>
                <h4 className="cart-col-4" >Total</h4>
              </div>
              <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
               <div className="cart-col-1 gap-15 d-flex align-items-center" >
                <div className="w-25">
                  <img src={watch} className="img-fluid" alt="watch" />
                </div>
                <div className="w-75">
                  <p>Lorem Ipsum</p>
                  <p>Size: </p>
                  <p>Color: </p>
                </div>
               </div>
               <div className="cart-col-2" >
                <h5 className="price">$ 100.00</h5>
               </div>
               <div className="cart-col-3 d-flex align-items-center gap-15" >
                <div>
                  <input type="number" min={1} max={10} name="" id="" className="form-control" />
                </div>
                <div>
                  <AiFillDelete className="text-danger"/>
                </div>
               </div>
               <div className="cart-col-4" ></div>
              </div>              
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <div className="d-flex flex-column justify-content-between">
                  <Link to='/store' className="button" >Continue Shopping</Link>
                  {/* <a href="#">Special Order Instructions?</a> */}
                </div>
                <div className="d-flex align-items-end flex-column">
                  <h4>SubTotal: $ 1000.00</h4>
                  <p>Taxes and Shipping</p>
                  <Link to="/checkout" className="button">Checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Cart;

