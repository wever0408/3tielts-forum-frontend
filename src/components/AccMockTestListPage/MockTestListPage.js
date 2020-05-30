import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div id="page">
          {/* Main Container */}
      <section className="main-container col2-right-layout">
        <div className="main container">
          <div className="row">
            <div className="col-main col-sm-9 col-xs-12">
              <div className="my-account">
                <div className="page-title">
                  <h2>My Wishlist</h2>
                </div>
                <div className="wishlist-item table-responsive">
                  <table className="col-md-12">
                    <thead>
                      <tr>
                        <th className="th-delate">Xóa</th>
                        <th className="th-product">Ảnh đại diện</th>
                        <th className="th-details">Thông tin sản phẩm</th>
                        <th className="th-price">Giá đấu</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="th-delate"><a href="#"><i className="fas fa-times-circle" /></a></td>
                        <td className="th-product"><a href="#"><img src="images/products/img03.jpg" alt="cart" /></a></td>
                        <td className="th-details"><h2><a href="#">Lorem Ipsum is simply</a></h2></td>
                        <td className="th-price">$125.00</td>
                      </tr>
                      <tr>
                        <td className="th-delate"><a href="#"><i className="fas fa-times-circle" /></a></td>
                        <td className="th-product"><a href="#"><img src="images/products/img13.jpg" alt="cart" /></a></td>
                        <td className="th-details"><h2><a href="#">Leo quis molestie</a></h2></td>
                        <td className="th-price">$99.00</td>
                      </tr>
                      <tr>
                        <td className="th-delate"><a href="#"><i className="fas fa-times-circle" /></a></td>
                        <td className="th-product"><a href="#"><img src="images/products/img02.jpg" alt="cart" /></a></td>
                        <td className="th-details"><h2><a href="#">Lorem Ipsum is simply</a></h2></td>
                        <td className="th-price">$179.89</td>
                      </tr>
                      <tr>
                        <td className="th-delate"><a href="#"><i className="fas fa-times-circle" /></a></td>
                        <td className="th-product"><a href="#"><img src="images/products/img01.jpg" alt="cart" /></a></td>
                        <td className="th-details"><h2><a href="#">Leo quis molestie</a></h2></td>
                        <td className="th-price">$199.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="checkout.html" className="delete-all">Xóa tất cả</a> </div>
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
      </div>
        );
    }
}

export default HomePage;