import React, { Component } from 'react';

class AccWishlistPage extends Component {
    render() {
        return (
            <div id="page">
           {/* Main Container */}
      <section className="main-container col1-layout">
        <div className="main container">
          <div className="col-main">
            <div className="cart">
              <div className="page-content page-order"><div className="page-title">
                  <h2>Shopping Cart</h2>
                </div>
                <div className="order-detail-content">
                  <div className="table-responsive">
                    <table className="table table-bordered cart_summary">
                      <thead>
                        <tr>
                          <th className="cart_product">Product</th>
                          <th>Description</th>
                          <th>Avail.</th>
                          <th>Unit price</th>
                          <th>Qty</th>
                          <th>Total</th>
                          <th className="action"><i className="fa fa-trash-o" /></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="cart_product"><a href="#"><img src="images/products/img01.jpg" alt="Product" /></a></td>
                          <td className="cart_description"><p className="product-name"><a href="#">Ipsums Dolors Untra </a></p>
                            <small><a href="#">Color : Red</a></small><br />
                            <small><a href="#">Size : M</a></small></td>
                          <td className="availability in-stock"><span className="label">In stock</span></td>
                          <td className="price"><span>$49.88</span></td>
                          <td className="qty"><input className="form-control input-sm" type="text" defaultValue={1} /></td>
                          <td className="price"><span>$49.88</span></td>
                          <td className="action"><a href="#"><i className="icon-close" /></a></td>
                        </tr>
                        <tr>
                          <td className="cart_product"><a href="#"><img src="images/products/img02.jpg" alt="Product" /></a></td>
                          <td className="cart_description"><p className="product-name"><a href="#">Ipsums Dolors Untra </a></p>
                            <small><a href="#">Color : Green</a></small><br />
                            <small><a href="#">Size : XL</a></small></td>
                          <td className="availability out-of-stock"><span className="label">No stock</span></td>
                          <td className="price"><span>$00.00</span></td>
                          <td className="qty"><input className="form-control input-sm" type="text" defaultValue={0} /></td>
                          <td className="price"><span>00.00</span></td>
                          <td className="action"><a href="#"><i className="icon-close" /></a></td>
                        </tr>
                        <tr>
                          <td className="cart_product"><a href="#"><img src="images/products/img03.jpg" alt="Product" /></a></td>
                          <td className="cart_description"><p className="product-name"><a href="#">Ipsums Dolors Untra </a></p>
                            <small><a href="#">Color : Blue</a></small><br />
                            <small><a href="#">Size : S</a></small></td>
                          <td className="availability in-stock"><span className="label">In stock</span></td>
                          <td className="price"><span>$99.00</span></td>
                          <td className="qty"><input className="form-control input-sm" type="text" defaultValue={2} /></td>
                          <td className="price"><span>$188.00</span></td>
                          <td className="action"><a href="#"><i className="icon-close" /></a></td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={2} rowSpan={2} />
                          <td colSpan={3}>Total products (tax incl.)</td>
                          <td colSpan={2}>$237.88 </td>
                        </tr>
                        <tr>
                          <td colSpan={3}><strong>Total</strong></td>
                          <td colSpan={2}><strong>$237.88 </strong></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="cart_navigation"> <a className="continue-btn" href="#"><i className="fa fa-arrow-left"> </i>&nbsp; Continue shopping</a> <a className="checkout-btn" href="#"><i className="fa fa-check" /> Proceed to checkout</a> </div>
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
        
      </div>
        );
    }
}

export default AccWishlistPage;