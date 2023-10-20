import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const ResetPassword = () => (
  <>
    <Meta title="reset password" />
    <BreadCrumb title="Reset Password" />
    <div className="login-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Update Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input type="password" name="newPassword" placeholder="New Password" className="form-control" />
                </div>
                <div className="mt-1">
                  <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control" />
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button type="submit" className="button border-0">Update</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  </>
);

export default ResetPassword;
