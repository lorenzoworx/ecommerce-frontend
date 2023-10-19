import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import FeaturedProductCard from "../components/FeaturedProductCard";
import Colors from "../components/Colors";

const OurStore = () => {
  const [grid,setGrid] = useState(3);
  
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Shop By Categories
                </h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Filter By
                </h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="inStock" />
                      <label className="form-check-label" htmlFor="inStock">
                        In Stock (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="noStock" />
                      <label className="form-check-label" htmlFor="noStock">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10" >
                    <span>$</span>
                    <div className="form-floating">
                      <input type="number" className="form-control" id="minPriceInput" placeholder="From"/>
                      <label htmlFor="minPriceInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input type="number" className="form-control" id="maxPriceInput" placeholder="To"/>
                      <label htmlFor="maxPriceInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <Colors />
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="smallSize" />
                      <label className="form-check-label" htmlFor="smallSize">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="mediumSize" />
                      <label className="form-check-label" htmlFor="mediumSize">
                      M (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="largeSize" />
                      <label className="form-check-label" htmlFor="largeSize">
                        L (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="xLargeSize" />
                      <label className="form-check-label" htmlFor="xLargeSize">
                      XL (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="xxLargeSize" />
                      <label className="form-check-label" htmlFor="xxLargeSize">
                      XXL (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphones
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Tablet
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Random Product
                </h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars count={5} size={24} activeColor="#ffd700" value={4} edit={false} />
                      <b>$ 300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" alt="watch" className="img-fluid" />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars count={5} size={24} activeColor="#ffd700" value={4} edit={false} />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{"width":"78px"}} >Sort By: </p>
                    <select name="" id="" className="form-control form-select">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected>Best Selling</option>
                      <option value="title-ascending">Alphabetically, A to Z</option>
                      <option value="title-descending">Alphabetically, Z to A</option>
                      <option value="price-ascending">Alphabetically, Low to High</option>
                      <option value="price-descending">Alphabetically, High to Low</option>
                      <option value="created-ascending">Date, Old to New</option>
                      <option value="created-descending">Date, New to Old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 products</p>
                    <div className="d-flex align-items-center gap-10 grid">
                      <img src="images/gr4.svg" alt="" className="d-block img-fluid" onClick={()=>{setGrid(3);}} />
                      <img src="images/gr3.svg" alt="" className="d-block img-fluid" onClick={()=>{setGrid(4);}} />
                      <img src="images/gr2.svg" alt="" className="d-block img-fluid" onClick={()=>{setGrid(6);}} />
                      <img src="images/gr.svg" alt="" className="d-block img-fluid" onClick={()=>{setGrid(12);}} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                <FeaturedProductCard grid={grid}/>
                <FeaturedProductCard grid={grid}/>
                <FeaturedProductCard grid={grid}/>
                <FeaturedProductCard grid={grid}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default OurStore;