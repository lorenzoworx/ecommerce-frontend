/* eslint-disable */
import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import { TbGitCompare } from 'react-icons/tb';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import FeaturedProductCard from '../components/FeaturedProductCard';
import Colors from '../components/Colors';

const SingleProduct = () => {
  const props = { width: 400, height: 600, zoomWidth: 600, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpohHKVxuvIvc8y8LZQnQzdc-OIaH_LU6W-W1eXnA&s' };
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }
  return (
    <>
      <Meta title="Dynamic Product Name" />
      <BreadCrumb title="Dynamic Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl p-3">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpohHKVxuvIvc8y8LZQnQzdc-OIaH_LU6W-W1eXnA&s" alt="watch" className="img-fluid" /></div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpohHKVxuvIvc8y8LZQnQzdc-OIaH_LU6W-W1eXnA&s" alt="watch" className="img-fluid" /></div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpohHKVxuvIvc8y8LZQnQzdc-OIaH_LU6W-W1eXnA&s" alt="watch" className="img-fluid" /></div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpohHKVxuvIvc8y8LZQnQzdc-OIaH_LU6W-W1eXnA&s" alt="watch" className="img-fluid" /></div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Kids Headphones Bulk 10 pack. Multi Colored For Students</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$100.00</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <a href="#review" className="review-btn">Write a Review</a>
                </div>
                <div className="py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type: </h3>
                    <p className="product-data" >Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand: </h3>
                    <p className="product-data" >Havels</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Categories: </h3>
                    <p className="product-data" >Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags: </h3>
                    <p className="product-data" >Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability: </h3>
                    <p className="product-data" >In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size: </h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark">S</span>
                      <span className="badge border border-1 bg-white text-dark">M</span>
                      <span className="badge border border-1 bg-white text-dark">L</span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color: </h3>
                    <Colors />
                  </div>
                  <div className="d-flex gap-15 flex-row mt-2 mb-3">
                    <h3 className="product-heading">Quantity: </h3>
                    <div>
                      <input type="number" className="form-control" min={1} max={10} style={{width: "70px"}} name="" id="" />
                    </div>
                    <div className="d-flex align-items-center gap-30 mt-2 mb-3">
                      <button type="submit" className="button border-0">Add to cart</button>
                      <button to="/sign-up" className="button signup">Buy it now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" />
                        Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <BsBookmarkHeartFill className="fs-5 me-2" />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Shipping and Returns: </h3>
                    <p className="product-data" >Free shipping and returns available on all orders! <br /> We ship all US domestic orders within <b>5-10 business days!</b> </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Product Link </h3>
                    <a href="javascript:void(0);" onClick={()=> {copyToClipboard('http://localhost:3000/store/product/id');}}>Copy Product Link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3 product-description">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was popularised in
                  the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {
                    orderedProduct && (
                      <div>
                        <a href="/" className="text-dark text-decoration-underline">Write a Review</a>
                      </div>
                    )
                  }
                </div>
                <div className="review-form py-4">
                  <div className="form">
                    <h4>Write a Review</h4>
                    <form action="" className="d-flex flex-column gap-15">
                      <div>
                        <ReactStars count={5} size={24} value={4} activeColor="#ffd700" />
                      </div>
                      <div>
                        <textarea className="w-100 form-control" name="" id="" cols="30" rows="4" placeholder="Comments" />
                      </div>
                      <div className="d-flex justify-content-end">
                        <button type="submit" className="button border-0">Submit Review</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="reviews mt-3">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars count={5} size={24} value={4} activeColor="#ffd700" />
                    </div>
                    <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                    <p className="mt-3">Dynamic Text</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Community Picks</h3>
            </div>
          </div>
          <div className="row">
            <FeaturedProductCard />
            <FeaturedProductCard />
            <FeaturedProductCard />
            <FeaturedProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
