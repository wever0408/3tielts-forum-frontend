import React, { Component } from 'react';
import  './RegisterPage.css';
class HomePage extends Component {
    render() {

        return (
            <div id="page">
        <section className="main-container col1-layout">
        <div className="main container">
<div className="my-login-class">
          <div className="page-content">
            <div className="account-login">
              <div className="box-authentication">
                {'{'}{'{'}#if this.success_message{'}'}{'}'}
                <div className="alert alert-success alert-dismissible" style={{width: '300px'}}>
                  <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
                  <strong>Thành công!</strong> {'{'}{'{'}success_message{'}'}{'}'}
                </div>
                {'{'}{'{'}/if{'}'}{'}'}
                {'{'}{'{'}#if this.err_message{'}'}{'}'}
                <div className="alert alert-danger alert-dismissible" style={{width: '300px'}}>
                  <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
                  <strong>Lỗi!</strong> {'{'}{'{'}err_message{'}'}{'}'}
                </div>
                {'{'}{'{'}/if{'}'}{'}'}
                <h2 style={{fontWeight: 'bold'}}>ĐĂNG KÝ TÀI KHOẢN</h2>
                <form onsubmit="return validate();" method="POST" id="frmRegister" name="frmRegister">
                  <div className="form-group">
                    <label htmlFor="txtUsername">Username</label>
                    <input type="text" className="form-control" id="txtUsername" name="username" placeholder="john" autofocus />
                  </div>
                  <div className="form-group">
                    <label htmlFor="txtPassword">Password</label>
                    <input type="password" className="form-control" id="txtPassword" name="raw_password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="txtConfirm">Confirm</label>
                    <input type="password" className="form-control" id="txtConfirm" />
                  </div>
                  <hr className="mb-4" />
                  <h5 className="mb-3">Information</h5>
                  <div className="form-group">
                    <label htmlFor="txtName">Name</label>
                    <input type="text" className="form-control" id="txtName" name="fullname" placeholder="John Witch" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="txtEmail">Email</label>
                    <input type="text" className="form-control" id="txtEmail" name="email" placeholder="jw@movie.db" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="txtDOB">Date of Birth</label>
                    <input type="text" className="form-control" id="txtDOB" name="dob" />
                  </div>
                  <div className="g-recaptcha" data-sitekey="6LcjNswUAAAAAP41Ew0r-yzS4K__xHX3APgs3yHk" name="capcha" />
                  <button type="submit" className="btn btn-warning" style={{marginTop: '10px'}}>
                    <i className="fa fa-check" aria-hidden="true" />ĐĂNG KÝ
                  </button>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      {/* Main Container End */}
       <br></br>
      </div>
        );
    }
}

export default HomePage;