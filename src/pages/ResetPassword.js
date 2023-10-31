import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const ResetPassword = () => (
  <>
    <Meta title="reset password" />
    <BreadCrumb title="Reset Password" />
    <Container class1="login-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-12">
          <div className="login-card">
            <h3 className="text-center mb-3">Update Password</h3>
            <form action="" className="d-flex flex-column gap-15">
              <CustomInput type="password" name="newPassword" placeholder="New Password" />
              <CustomInput class1="mt-1" type="password" name="confirmPassword" placeholder="Confirm Password" />
              <div>
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <button type="submit" className="button border-0">Update</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </Container>
  </>
);

export default ResetPassword;
