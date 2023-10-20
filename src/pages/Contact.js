import React from 'react';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const Contact = () => (
  <>
    <Meta title="Contact Us" />
    <BreadCrumb title="Contact Us" />
    <div className="contact-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.728860102751!2d3.5521390739921372!3d6.428868993562202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7a4bff5b171%3A0x10bd07ac5a3d32a9!2sOcean%20Bay%20Estate!5e0!3m2!1sen!2sng!4v1697638111374!5m2!1sen!2sng" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="office-address" />
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between gap-15">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div>
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div>
                    <input type="tel" className="form-control" placeholder="Mobile Number" />
                  </div>
                  <div>
                    <textarea className="w-100 form-control" name="" id="" cols="30" rows="4" placeholder="Comments" />
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Hno: 1 Nowhere drive, Near Orchid Hotel, Lekki, Lagos.
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel:+2340000000000">+234 000 000 0000</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:test@test.com">test@test.com</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">
                        Monday to Friday
                        <br />
                        {' '}
                        10 AM to 8 PM
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Contact;
