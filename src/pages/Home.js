/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import FeaturedProductCard from '../components/FeaturedProductCard';
import SpecialProductCard from '../components/SpecialProductCard';
import mainBanner1 from '../images/main-banner-1.jpg';
import catBanner2 from '../images/catbanner-02.jpg';
import catBanner3 from '../images/catbanner-03.jpg';
import catBanner4 from '../images/catbanner-04.jpg';
import service from '../images/service.png';
import service2 from '../images/service-02.png';
import service3 from '../images/service-03.png';
import service4 from '../images/service-04.png';
import service5 from '../images/service-05.png';
import camera from '../images/camera.jpg';
import tv from '../images/tv.jpg';
import headphone from '../images/headphone.jpg';
import appleWatch from '../images/apple-watch.webp';
import macbookPro from '../images/macbook-pro.png';
import brand1 from '../images/brand-01.png';
import brand2 from '../images/brand-02.png';
import brand3 from '../images/brand-03.png';
import brand4 from '../images/brand-04.png';
import brand5 from '../images/brand-05.png';
import brand6 from '../images/brand-06.png';
import brand7 from '../images/brand-07.png';
import brand8 from '../images/brand-08.png';

const Home = () => (
  <>
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img className="img-fluid rounded-3" src={mainBanner1} alt="main-banner" />
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
                <img className="img-fluid rounded-3" src={mainBanner1} alt="main-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>Laptops Max</h5>
                  <p>
                    From $1699.00
                    <br />
                    or $64.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img className="img-fluid rounded-3" src={catBanner2} alt="main-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>New arrival</h4>
                  <h5>Apple Watch Ultra</h5>
                  <p>
                    From $999
                    <br />
                    or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img className="img-fluid rounded-3" src={catBanner3} alt="main-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>new arrival</h4>
                  <h5>Buy iPad Air</h5>
                  <p>
                    From $499
                    <br />
                    or $49.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img className="img-fluid rounded-3" src={catBanner4} alt="main-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>M2 iPad Pro.</h5>
                  <p>
                    From $999
                    <br />
                    or $41.62/mo.
                  </p>
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
                <img src={service} alt="" />
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0">From all orders over $100</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={service2} alt="" />
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className="mb-0">Save up to 25% off</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={service3} alt="" />
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Speak with an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={service4} alt="" />
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Get Factory Default Price</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={service5} alt="" />
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
                <img src={camera} alt="" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src={tv} alt="" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src={camera} alt="" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src={headphone} alt="" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src={camera} alt="" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src={tv} alt="" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src={camera} alt="" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src={headphone} alt="" />
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
              <img src={appleWatch} alt="apple watch ultra" className="new-image img-fluid" />
              <div className="new-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Apple Watch Ultra</h6>
                <p>From $399 or $16.62/mo</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="new-card position-relative">
              <img src={appleWatch} alt="apple watch ultra" className="new-image img-fluid" />
              <div className="new-content position-absolute">
                <h5>Studio Display</h5>
                <h6>600 nits of brightness</h6>
                <p>From $399 or $16.62/mo</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="new-card position-relative">
              <img src={macbookPro} alt="apple watch ultra" className="new-image img-fluid" />
              <div className="new-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness</h6>
                <p className="text-dark">From $399 or $16.62/mo</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="new-card position-relative">
              <img src={macbookPro} alt="apple watch ultra" className="new-image img-fluid" />
              <div className="new-content position-absolute">
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
                  <img src={brand1} alt="brand-logo" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand2} alt="brand-logo" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand3} alt="brand-logo" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand4} alt="brand-logo" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand5} alt="brand-logo" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand6} alt="brand-logo" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand7} alt="brand-logo" />
                </div>
                <div className="mx-4 w-25">
                  <img src={brand8} alt="brand-logo" />
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
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Home;
