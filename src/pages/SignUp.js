import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const SignUp = () => (
  <>
    <Meta title="sign-up" />
    <BreadCrumb title="Create Account" />
    <Container class1="login-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-12">
          <div className="login-card">
            <h3 className="text-center mb-3">Create Account</h3>
            <form action="" className="d-flex flex-column gap-15">
              <CustomInput type="text" name="firstName" placeholder="First name" />
              <CustomInput type="text" name="lastName" placeholder="Last name" />
              <CustomInput type="email" name="email" placeholder="Email" />
              <CustomInput type="tel" name="mobile" placeholder="Mobile Number" />
              <CustomInput class1="mt-1" type="password" name="password" placeholder="Password" />
              <div>
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <button type="submit" className="button border-0">Create</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </Container>
  </>
);

export default SignUp;
