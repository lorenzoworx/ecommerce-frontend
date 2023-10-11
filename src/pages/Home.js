import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import FeaturedProductCard from "../components/FeaturedProductCard";
import SpecialProductCard from "../components/SpecialProductCard";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img className="img-fluid rounded-3" src="images/main-banner-1.jpg" alt="main-banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>M2 iPad Pro.</h5>
                  <p>From $999 or $41.62/mo.</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img className="img-fluid rounded-3" src="images/catbanner-01.jpg" alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>Laptops Max</h5>
                    <p>From $1699.00 <br />or $64.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img className="img-fluid rounded-3" src="images/catbanner-02.jpg" alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>New arrival</h4>
                    <h5>Apple Watch Ultra</h5>
                    <p>From $999 <br />or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img className="img-fluid rounded-3" src="images/catbanner-03.jpg" alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>new arrival</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $499 <br />or $49.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img className="img-fluid rounded-3" src="images/catbanner-04.jpg" alt="main-banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS</h4>
                    <h5>M2 iPad Pro.</h5>
                    <p>From $999 <br />or $41.62/mo.</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Speak with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <FeaturedProductCard />
            <FeaturedProductCard />
            <FeaturedProductCard />
            <FeaturedProductCard />
          </div>
        </div>
      </section>

      <section className="new-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="new-card position-relative">
                <img src="images/apple-watch.webp" alt="apple watch ultra" className="new-image img-fluid"/>
                <div className="new-content position-absolute" >
                  <h5>Big Screen</h5>
                  <h6>Apple Watch Ultra</h6>
                  <p>From $399 or $16.62/mo</p>
                </div>                
              </div>
            </div>
            <div className="col-3">
              <div className="new-card position-relative">
                <img src="images/apple-watch.webp" alt="apple watch ultra" className="new-image img-fluid"/>
                <div className="new-content position-absolute" >
                  <h5>Studio Display</h5>
                  <h6>600 nits of brightness</h6>
                  <p>From $399 or $16.62/mo</p>
                </div>                
              </div>
            </div>
            <div className="col-3">
              <div className="new-card position-relative">
                <img src="images/macbook-pro.png" alt="apple watch ultra" className="new-image img-fluid"/>
                <div className="new-content position-absolute" >
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of brightness</h6>
                  <p className="text-dark">From $399 or $16.62/mo</p>
                </div>                
              </div>
            </div>
            <div className="col-3">
              <div className="new-card position-relative">
                <img src="images/macbook-pro.png" alt="apple watch ultra" className="new-image img-fluid"/>
                <div className="new-content position-absolute" >
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of brightness</h6>
                  <p className="text-dark">From $399 or $16.62/mo</p>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProductCard />
            <SpecialProductCard />
            <SpecialProductCard />
            <SpecialProductCard />
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
            {/* <div className="col-2">
              <div className="card"></div>
            </div>
            <div className="col-2">
              <div className="card"></div>
            </div> */}
            <FeaturedProductCard />
            <FeaturedProductCard />
            <FeaturedProductCard />
            <FeaturedProductCard />
          </div>
        </div>
      </section>

      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand-logo" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand-logo" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand-logo" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand-logo" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand-logo" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand-logo" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand-logo" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand-logo" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Articles</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
};

export default Home;