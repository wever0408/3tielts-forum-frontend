import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (

          <div>
             {/* Main Container */}
      <section className="main-container col2-right-layout">
        <div className="main container">
          <div className="row">
            <div className="col-main col-sm-9 col-xs-12">
              {/* <div class="col-main col-sm-12 col-xs-12"></div> */}
              <div className="page-content checkout-page">
                <div className="page-title">
                  <h2>Thông tin cá nhân</h2>
                </div>
                <div className="box-border">
                  <ul>
                    <li className="row">
                      <div className="col-sm-6">
                        <label htmlFor="first_name" className="required">First Name</label>
                        <input type="text" className="input form-control" name id="first_name" defaultValue="Duong Van Thuong" />
                      </div>
                      {/*/ [col] */}
                      <div className="col-sm-6">
                        <label htmlFor="last_name" className="required">Last Name</label>
                        <input type="text" name className="input form-control" id="last_name" defaultValue="Duong Van Thuong" />
                      </div>
                      {/*/ [col] */}
                    </li>
                    {/*/ .row */}
                    <li className="row">
                      <div className="col-sm-6">
                        <label htmlFor="company_name">Điện thoại</label>
                        <input type="text" name className="input form-control" id="phone_number" defaultValue="0123 456 789" />
                      </div>
                      {/*/ [col] */}
                      <div className="col-sm-6">
                        <label htmlFor="email_address" className="required">Email Address</label>
                        <input type="text" className="input form-control" name id="email_address" defaultValue="DOREMON@gamil.com" />
                      </div>
                      {/*/ [col] */}
                    </li>
                    {/*/ .row */}
                    <li className="row">
                      <div className="col-xs-12">
                        <label htmlFor="address" className="required">Address</label>
                        <input type="text" className="input form-control" name id="address" defaultValue="27/12, Tân Kỳ" />
                      </div>
                    </li>{/* / .row */}
                    <br />
                    <li className="row">
                      <div className="checkbox">
                        <label><input type="checkbox" id="is_change_pass" name="is_change_pass" />
                          Thay đổi mật khẩu</label>
                      </div>
                    </li>
                    <div className="password-group" style={{display: 'block'}}>
                      <div className="form-group">
                        <label className="control-label" htmlFor="old_password">Mật khẩu cũ</label>
                        <div className="input-wrap">
                          <input type="password" name="old_password" className="form-control" id="old_password" defaultValue autoComplete="off" placeholder="Nhập mật khẩu cũ" />
                          <span className="help-block" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label" htmlFor="new-password">Mật khẩu mới</label>
                        <div className="input-wrap">
                          <input type="password" name="new_password" className="form-control" id="new_password" defaultValue autoComplete="off" placeholder="Mật khẩu từ 6 đến 32 ký tự" />
                          <span className="help-block" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label" htmlFor="re_new_password">Nhập lại</label>
                        <div className="input-wrap">
                          <input type="password" name="re_new_password" className="form-control" id="re_new_password" defaultValue autoComplete="off" placeholder="Nhập lại mật khẩu mới" />
                          <span className="help-block" />
                        </div>
                      </div>
                    </div>
                    {/* end of password-group */}
                    <li>
                      <button className="button" id="change_info"><i className="fa fa-angle-double-right" />&nbsp;
                        <span>Sửa thông tin</span></button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <aside className="right sidebar col-sm-3 col-xs-12">
              <div className="sidebar-account block">
                <div className="sidebar-bar-title">
                  <h3>Tài khoản cá nhân</h3>
                </div>
                <div className="block-content">
                  <ul>
                    <li className="current"><a>Thông tin tài khoản</a></li>
                    <li><a href="bidder-wishlist.html">Danh sách yêu thích</a></li>
                    <li><a href="bidder-biddings.html">Các bài kiểm tra thử </a></li>
                    <li><a href="bidder-won.html"> Câu hỏi trong forum</a></li>
                    <li className="last"><a href="bidder-evaluate.html">Nâng cấp học viên</a></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      {/* Main Container End */}
          </div>
            
       );
    }
}

export default HomePage;