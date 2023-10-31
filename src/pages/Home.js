import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import FeaturedProductCard from '../components/FeaturedProductCard';
import SpecialProductCard from '../components/SpecialProductCard';
import Container from '../components/Container';
import services from '../utils/Data';
import mainBanner1 from '../images/main-banner-1.jpg';
import catBanner2 from '../images/catbanner-02.jpg';
import catBanner3 from '../images/catbanner-03.jpg';
import catBanner4 from '../images/catbanner-04.jpg';
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
    <Container class1="home-wrapper-1 py-5">
      <div className="row">
        <div className="col-6">
          <div className="main-banner position-relative">
            <img className="img-fluid rounded-3" src={mainBanner1} alt="main-banner" />
            <div className="main-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS</h4>
              <h5>M2 iPad Pro.</h5>
              <p>From $999 or $41.62/mo.</p>
              <Link to="/checkout" className="button">Buy Now</Link>
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
    </Container>

    <Container class1="home-wrapper-2 py-5">
      <div className="row">
        <div className="col-12">
          <div className="services d-flex align-items-center justify-content-between">
            {services?.map((i) => (
              <div className="d-flex align-items-center gap-15" key={i.id}>
                <img src={i.image} alt="services" />
                <div>
                  <h6>{i.title}</h6>
                  <p className="mb-0">{i.tagline}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </Container>

    <Container class1="home-wrapper-3 py-5">
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
    </Container>

    <Container class1="featured-wrapper py-5 home-wrapper-2">
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
    </Container>

    <Container class1="new-wrapper py-5 home-wrapper-2">
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
    </Container>

    <Container>
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
    </Container>

    <Container class1="popular-wrapper py-5 home-wrapper-2">
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
    </Container>

    <Container class1="marquee-wrapper py-5">
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
    </Container>

    <Container class1="blog-wrapper py-5 home-wrapper-2">
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
    </Container>
  </>
);

export default Home;
