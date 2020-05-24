import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Menu from './common-components/Menu/Menu';
import Categories from './common-components/Categories/Categories';
import routes from './navigation/routes';

class App extends Component {
  render() {
    return (
      // <Router>
      //   <div>
      //     <Menu />

      //     <div className="container">
      //       <div className="row">

      //         {this.showContentMenus(routes)}
      //       </div>
      //     </div>

      //   </div>
      // </Router>

      <Router>

        <div>
          {/* mobile menu */}
          <div id="mobile-menu">
            <ul>
              <li><a href="index.html" className="home1">Home</a>
                <ul>
                  <li><a href="index.html"><span>Home Version 1</span></a></li>
                  <li><a href="Version2/index.html"><span>Home Version 2</span></a></li>
                  <li><a href="Version3/index.html"><span>Home Version 3</span></a></li>
                  <li><a href="Version4/index.html"><span>Home Version 4</span></a></li>
                  <li><a href="Version5/index.html"><span>Home Version 5</span></a></li>
                  <li><a href="rtl-version/index.html"><span>RTL Version</span></a></li>
                  <li><a href="rtl-version1/index.html"><span>Home Version 1 RTL</span></a></li>
                </ul>
              </li>
              <li><a href="shop_grid.html">Pages</a>
                <ul>
                  <li><a href="#" className>Shop Pages </a>
                    <ul>
                      <li> <a href="shop_grid.html"> Shop grid </a> </li>
                      <li> <a href="shop_grid_right_sidebar.html"> Shop grid right sidebar</a> </li>
                      <li> <a href="shop_list.html"> Shop list </a> </li>
                      <li> <a href="shop_list_right_sidebar.html"> Shop list right sidebar</a> </li>
                      <li> <a href="shop_grid_full_width.html"> Shop Full width </a> </li>
                    </ul>
                  </li>
                  <li><a href="#">Ecommerce Pages </a>
                    <ul>
                      <li> <a href="wishlist.html"> Wishlists </a> </li>
                      <li> <a href="checkout.html"> Checkout </a> </li>
                      <li> <a href="compare.html"> Compare </a> </li>
                      <li> <a href="shopping_cart.html"> Shopping cart </a> </li>
                      <li> <a href="quick_view.html"> Quick View </a> </li>
                    </ul>
                  </li>
                  <li> <a href="#">Static Pages </a>
                    <ul>
                      <li> <a href="account_page.html"> Create Account Page </a> </li>
                      <li> <a href="about_us.html"> About Us </a> </li>
                      <li> <a href="contact_us.html"> Contact us </a> </li>
                      <li> <a href="404error.html"> Error 404 </a> </li>
                      <li> <a href="faq.html"> FAQ </a> </li>
                    </ul>
                  </li>
                  <li> <a href="#">Product Categories </a>
                    <ul>
                      <li> <a href="cat-3-col.html"> 3 Column Sidebar </a> </li>
                      <li> <a href="cat-4-col.html"> 4 Column Sidebar</a> </li>
                      <li> <a href="cat-4-col-full.html"> 4 Column Full width </a> </li>
                      <li> <a href="cat-6-col.html"> 6 Columns Full width</a> </li>
                    </ul>
                  </li>
                  <li> <a href="#">Single Product Pages </a>
                    <ul>
                      <li><a href="single_product.html"> single product </a> </li>
                      <li> <a href="single_product_left_sidebar.html"> single product left sidebar</a> </li>
                      <li> <a href="single_product_right_sidebar.html"> single product right sidebar</a> </li>
                      <li> <a href="single_product_magnify_zoom.html"> single product magnify zoom</a> </li>
                    </ul>
                  </li>
                  <li> <a href="#"> Blog Pages </a>
                    <ul>
                      <li><a href="blog_right_sidebar.html">Blog – Right sidebar </a></li>
                      <li><a href="blog_left_sidebar.html">Blog – Left sidebar </a></li>
                      <li><a href="blog_full_width.html">Blog_ - Full width</a></li>
                      <li><a href="single_post.html">Single post </a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="contact_us.html">Contact us</a></li>
              <li><a href="about_us.html">About us</a></li>
              <li><a href="blog.html">Blog</a>
                <ul>
                  <li><a href="blog_right_sidebar.html">Blog – Right sidebar </a></li>
                  <li><a href="blog_left_sidebar.html">Blog – Left sidebar </a></li>
                  <li><a href="blog_full_width.html">Blog_ - Full width</a></li>
                  <li><a href="single_post.html">Single post </a></li>
                </ul>
              </li>
              <li><a href="shop_grid.html">Camera &amp; Photo</a>
                <ul>
                  <li><a href="#" className>Accessories</a>
                    <ul>
                      <li><a href="shop_grid.html">Cocktail</a></li>
                      <li><a href="shop_grid.html">Day</a></li>
                      <li><a href="shop_grid.html">Evening</a></li>
                      <li><a href="shop_grid.html">Sundresses</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dresses</a>
                    <ul>
                      <li><a href="shop_grid.html">Accessories</a></li>
                      <li><a href="shop_grid.html">Hats and Gloves</a></li>
                      <li><a href="shop_grid.html">Lifestyle</a></li>
                      <li><a href="shop_grid.html">Bras</a></li>
                    </ul>
                  </li>
                  <li> <a href="#">Shoes</a>
                    <ul>
                      <li> <a href="shop_grid.html">Flat Shoes</a> </li>
                      <li> <a href="shop_grid.html">Flat Sandals</a> </li>
                      <li> <a href="shop_grid.html">Boots</a> </li>
                      <li> <a href="shop_grid.html">Heels</a> </li>
                    </ul>
                  </li>
                  <li> <a href="#">Jwellery</a>
                    <ul>
                      <li> <a href="shop_grid.html">Bracelets</a> </li>
                      <li> <a href="shop_grid.html">Necklaces &amp; Pendent</a> </li>
                      <li> <a href="shop_grid.html">Pendants</a> </li>
                      <li> <a href="shop_grid.html">Pins &amp; Brooches</a> </li>
                    </ul>
                  </li>
                  <li> <a href="#">Dresses</a>
                    <ul>
                      <li> <a href="shop_grid.html">Casual Dresses</a> </li>
                      <li> <a href="shop_grid.html">Evening</a> </li>
                      <li> <a href="shop_grid.html">Designer</a> </li>
                      <li> <a href="shop_grid.html">Party</a> </li>
                    </ul>
                  </li>
                  <li> <a href="#">Swimwear</a>
                    <ul>
                      <li> <a href="shop_grid.html">Swimsuits</a> </li>
                      <li> <a href="shop_grid.html">Beach Clothing</a> </li>
                      <li> <a href="shop_grid.html">Clothing</a> </li>
                      <li> <a href="shop_grid.html">Bikinis</a> </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="shop_grid.html">Computers</a>
                <ul>
                  <li> <a href="#" className>Clothing</a>
                    <ul className="level1">
                      <li className="level2"><a href="shop_grid.html">Coats &amp; Jackets</a> </li>
                      <li className="level2"><a href="shop_grid.html">Raincoats</a> </li>
                      <li className="level2"><a href="shop_grid.html">Blazers</a> </li>
                      <li className="level2"><a href="shop_grid.html">Jackets</a> </li>
                    </ul>
                  </li>
                  <li> <a href="#">Dresses</a>
                    <ul className="level1">
                      <li className="level2"><a href="shop_grid.html">Casual Dresses</a> </li>
                      <li className="level2"><a href="shop_grid.html">Evening</a> </li>
                      <li className="level2"><a href="shop_grid.html">Designer</a> </li>
                      <li className="level2"><a href="shop_grid.html">Party</a> </li>
                    </ul>
                  </li>
                  <li> <a href="#" className>Shoes</a>
                    <ul className="level1">
                      <li className="level2"><a href="shop_grid.html">Sport Shoes</a> </li>
                      <li className="level2"><a href="shop_grid.html">Casual Shoes</a> </li>
                      <li className="level2"><a href="shop_grid.html">Leather Shoes</a> </li>
                      <li className="level2"><a href="shop_grid.html">canvas shoes</a> </li>
                    </ul>
                  </li>
                  <li> <a href="#">Jackets</a>
                    <ul className="level1">
                      <li className="level2"><a href="shop_grid.html">Coats</a> </li>
                      <li className="level2"><a href="shop_grid.html">Formal Jackets</a> </li>
                      <li className="level2"><a href="shop_grid.html">Leather Jackets</a> </li>
                      <li className="level2"><a href="shop_grid.html">Blazers</a> </li>
                    </ul>
                  </li>
                  <li> <a href="#">Accesories</a>
                    <ul className="level1">
                      <li className="level2"><a href="shop_grid.html">Backpacks</a> </li>
                      <li className="level2"><a href="shop_grid.html">Wallets</a> </li>
                      <li className="level2"><a href="shop_grid.html">Laptops Bags</a> </li>
                      <li className="level2"><a href="shop_grid.html">Belts</a> </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="shop_grid.html">Apple Store</a>
                <ul>
                  <li> <a href="shop_grid.html">Mobiles</a>
                    <ul>
                      <li> <a href="shop_grid.html">iPhone</a> </li>
                      <li> <a href="shop_grid.html">Samsung</a> </li>
                      <li> <a href="shop_grid.html">Nokia</a> </li>
                      <li> <a href="shop_grid.html">Sony</a> </li>
                    </ul>
                  </li>
                  <li> <a href="shop_grid.html" className>Music &amp; Audio</a>
                    <ul>
                      <li> <a href="shop_grid.html">Audio</a> </li>
                      <li> <a href="shop_grid.html">Cameras</a> </li>
                      <li> <a href="shop_grid.html">Appling</a> </li>
                      <li> <a href="shop_grid.html">Car Music</a> </li>
                    </ul>
                  </li>
                  <li> <a href="shop_grid.html">Accessories</a>
                    <ul>
                      <li> <a href="shop_grid.html">Home &amp; Office</a> </li>
                      <li> <a href="shop_grid.html">TV &amp; Home Theater</a> </li>
                      <li> <a href="shop_grid.html">Phones &amp; Radio</a> </li>
                      <li> <a href="shop_grid.html">All Electronics</a> </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* end mobile menu */}
          <div id="page">
            {/* Header */}
            <header>
              <div className="header-container">
                <div className="header-top">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-sm-4 hidden-xs">
                        {/* Default Welcome Message */}
                        <div className="welcome-msg ">Chào mừng đến MIELTS </div>
                        <span className="phone hidden-sm">Gọi ngay: 0987 127 394</span>
                      </div>
                      {/* top links */}
                      <div className="headerlinkmenu col-lg-8 col-md-7 col-sm-8 col-xs-12">
                        <div className="links">
                          <div className="myaccount"><a title="My Account" href="account_page.html"><i className="fa fa-user" /><span className="hidden-xs">My Account</span></a></div>
                          <div className="wishlist"><a title="My Wishlist" href="wishlist.html"><i className="fa fa-heart" /><span className="hidden-xs">Wishlist</span></a></div>
                          <div className="blog"><a title="Blog" href="blog.html"><i className="fa fa-rss" /><span className="hidden-xs">Blog</span></a></div>
                          <div className="login"><a href="account_page.html"><i className="fa fa-unlock-alt" /><span className="hidden-xs">Log In</span></a></div>
                        </div>
                        <div className="language-currency-wrapper">
                          <div className="inner-cl">
                            <div className="block block-language form-language">
                              <div className="lg-cur"> <span> <img src="images/flag-default.jpg" alt="French" /> <span className="lg-fr">French</span> <i className="fa fa-angle-down" /> </span> </div>
                              <ul>
                                <li> <a className="selected" href="#"> <img src="images/flag-english.jpg" alt="flag" />
                                  <span>English</span> </a> </li>
                                <li> <a href="#"> <img src="images/flag-default.jpg" alt="flag" /> <span>French</span> </a> </li>
                                <li> <a href="#"> <img src="images/flag-german.jpg" alt="flag" /> <span>German</span> </a> </li>
                                <li> <a href="#"> <img src="images/flag-brazil.jpg" alt="flag" /> <span>Brazil</span> </a> </li>
                                <li> <a href="#"> <img src="images/flag-chile.jpg" alt="flag" /> <span>Chile</span> </a> </li>
                                <li> <a href="#"> <img src="images/flag-spain.jpg" alt="flag" /> <span>Spain</span> </a> </li>
                              </ul>
                            </div>
                          </div>
                          {/* End Default Welcome Message */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-3 col-md-3 col-xs-12">
                      {/* Header Logo */}
                      <div className="logo"><a title="e-commerce" href="index.html"><img alt="responsive theme logo" src="images/logo.png" /></a> </div>
                      {/* End Header Logo */}
                    </div>
                    <div className="col-xs-9 col-sm-6 col-md-6">
                      {/* Search */}
                      <div className="top-search">
                        <div id="search">
                          <form>
                            <div className="input-group">
                              <select className="cate-dropdown hidden-xs" name="category_id">
                                <option>All Categories</option>
                                <option>women</option>
                                <option>&nbsp;&nbsp;&nbsp;Accessories </option>
                                <option>&nbsp;&nbsp;&nbsp;Dresses</option>
                                <option>&nbsp;&nbsp;&nbsp;Top</option>
                                <option>&nbsp;&nbsp;&nbsp;Handbags </option>
                                <option>&nbsp;&nbsp;&nbsp;Shoes </option>
                                <option>&nbsp;&nbsp;&nbsp;Clothing </option>
                                <option>Men</option>
                                <option>Electronics</option>
                                <option>&nbsp;&nbsp;&nbsp;Mobiles </option>
                                <option>&nbsp;&nbsp;&nbsp;Music &amp; Audio </option>
                              </select>
                              <input type="text" className="form-control" placeholder="Search" name="search" />
                              <button className="btn-search" type="button"><i className="fa fa-search" /></button>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* End Search */}
                    </div>
                    {/* top cart */}
                    <div className="col-lg-3 col-xs-3 top-cart">
                      <div className="top-cart-contain">
                        <div className="mini-cart">
                          <div data-toggle="dropdown" data-hover="dropdown" className="basket dropdown-toggle"> <a href="my_account.html">
                            <div className="cart-icon"><i className="fa fa-user" /></div>
                            <div className="shoppingcart-inner hidden-xs"><span className="cart-title">Dương Thưởng</span>
                              <span className="cart-total"> Tài khoản</span></div>
                          </a></div>
                          <div>
                            <div className="top-cart-content">
                              <ul className="nav" style={{ width: '200px', textAlign: 'left', marginLeft: '-1px' }}>
                                <li><a href="my_account.html"> <i className="icon fa fa-gamepad fa-fw" /> <span>Thông tin cá nhân</span></a></li>
                                <li><a href="my_account.html"> <i className="icon fa fa-phone fa-fw" /> <span>Bài đọc yêu thích</span></a></li>
                                <li><a href="my_account.html"> <i className="icon fa fa-pen fa-fw" /> <span>Bài test đã làm</span> </a></li>
                                <li><a href="my_account.html"><span> Nâng cấp học viên </span> </a></li>
                              </ul>
                              <div className="top-subtotal">Điểm: <span className="price">152</span></div>
                              <div className="actions">
                                <button className="btn-checkout" type="button"><i className="fa fa-check" /><span>Đăng suất</span></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* end header */}
            {/* Navbar */}
            <nav>
              <div className="container">
                <div className="row">
                  {/* CATEGORY */}
                  <div className="col-md-3 col-sm-4">
                    <div className="mm-toggle-wrap">
                      <div className="mm-toggle"> <i className="fa fa-align-justify" /> </div>
                      <span className="mm-label">Categories</span>
                    </div>
                   <Categories/>
                  </div>

                  {/* MENU */}
                  <div className="col-md-9 col-sm-8">
                    <Menu />

                  </div>
                </div>
              </div>
            </nav>
            {/* end nav */}
            {/* Main Container */}
            {this.showContentMenus(routes)}
            {/* Main Container End */}
            {/* Footer */}
            <footer>
              <div className="footer-newsletter">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-sm-7">
                      <form id="newsletter-validate-detail" method="post" action="#">
                        <h3 className="hidden-sm">Sign up for newsletter</h3>
                        <div className="newsletter-inner">
                          <input className="newsletter-email" name="Email" placeholder="Enter Your Email" />
                          <button className="button subscribe" type="submit" title="Subscribe">Subscribe</button>
                        </div>
                      </form>
                    </div>
                    <div className="social col-md-4 col-sm-5">
                      <ul className="inline-mode">
                        <li className="social-network fb"><a title="Connect us on Facebook" target="_blank" href="https://www.facebook.com/"><i className="fa fa-facebook" /></a></li>
                        <li className="social-network googleplus"><a title="Connect us on Google+" target="_blank" href="https://plus.google.com/"><i className="fa fa-google-plus" /></a></li>
                        <li className="social-network tw"><a title="Connect us on Twitter" target="_blank" href="https://twitter.com/"><i className="fa fa-twitter" /></a></li>
                        <li className="social-network linkedin"><a title="Connect us on Linkedin" target="_blank" href="https://www.pinterest.com/"><i className="fa fa-linkedin" /></a></li>
                        <li className="social-network rss"><a title="Connect us on Instagram" target="_blank" href="https://instagram.com/"><i className="fa fa-rss" /></a></li>
                        <li className="social-network instagram"><a title="Connect us on Instagram" target="_blank" href="https://instagram.com/"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-md-4 col-xs-12 col-lg-3">
                    <div className="footer-logo"><a href="index.html"><img src="images/footer-logo.png" alt="fotter logo" /></a>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the print and typesetting industry.</p>
                    <div className="footer-content">
                      <div className="email"> <i className="fa fa-envelope" />
                        <p>Support@themes.com</p>
                      </div>
                      <div className="phone"> <i className="fa fa-phone" />
                        <p>(800) 0123 456 789</p>
                      </div>
                      <div className="address"> <i className="fa fa-map-marker" />
                        <p> My Company, 12/34 - West 21st Street, New York, USA</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 col-xs-12 col-lg-3 collapsed-block">
                    <div className="footer-links">
                      <h3 className="links-title">Information<a className="expander visible-xs" href="#TabBlock-1">+</a></h3>
                      <div className="tabBlock" id="TabBlock-1">
                        <ul className="list-links list-unstyled">
                          <li><a href="#s">Delivery Information</a></li>
                          <li><a href="#">Discount</a></li>
                          <li><a href="sitemap.html">Sitemap</a></li>
                          <li><a href="#">Privacy Policy</a></li>
                          <li><a href="faq.html">FAQs</a></li>
                          <li><a href="#">Terms &amp; Condition</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 col-xs-12 col-lg-3 collapsed-block">
                    <div className="footer-links">
                      <h3 className="links-title">Insider<a className="expander visible-xs" href="#TabBlock-3">+</a></h3>
                      <div className="tabBlock" id="TabBlock-3">
                        <ul className="list-links list-unstyled">
                          <li> <a href="sitemap.html"> Sites Map </a> </li>
                          <li> <a href="#">News</a> </li>
                          <li> <a href="#">Trends</a> </li>
                          <li> <a href="about_us.html">About Us</a> </li>
                          <li> <a href="contact_us.html">Contact Us</a> </li>
                          <li> <a href="#">My Orders</a> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-2 col-xs-12 col-lg-3 collapsed-block">
                    <div className="footer-links">
                      <h3 className="links-title">Service<a className="expander visible-xs" href="#TabBlock-4">+</a></h3>
                      <div className="tabBlock" id="TabBlock-4">
                        <ul className="list-links list-unstyled">
                          <li> <a href="account_page.html">Account</a> </li>
                          <li> <a href="wishlist.html">Wishlist</a> </li>
                          <li> <a href="shopping_cart.html">Shopping Cart</a> </li>
                          <li> <a href="#">Return Policy</a> </li>
                          <li> <a href="#">Special</a> </li>
                          <li> <a href="#">Lookbook</a> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-coppyright">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-xs-12 coppyright"> Copyright © 2016 <a href="#"> MyStore </a>. All Rights Reserved.
                        </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="payment">
                        <ul>
                          <li><a href="#"><img title="Visa" alt="Visa" src="images/visa.png" /></a></li>
                          <li><a href="#"><img title="Paypal" alt="Paypal" src="images/paypal.png" /></a></li>
                          <li><a href="#"><img title="Discover" alt="Discover" src="images/discover.png" /></a></li>
                          <li><a href="#"><img title="Master Card" alt="Master Card" src="images/master-card.png" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <a href="#" className="totop"> </a>
            {/* End Footer */}
            {/*Newsletter Popup Start*/}
            {/*End of Newsletter Popup*/}
          </div>
        </div>
      </Router>

    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  }

}

export default App;
