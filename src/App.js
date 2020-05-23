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
            <section className="blog_post">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-9">
                    <div className="entry-detail">
                      <div className="page-title">
                        <h1>IELTS Listening: Dạng câu hỏi Flowcharts, Notes, Tables, Summaries And Forms
                            </h1>
                      </div>
                      <div className="entry-photo">
                        <figure><img src="images/products/mau1.jpg" alt="Blog" /></figure>
                      </div>
                      <div className="entry-meta-data"> <span className="author"> <i className="fa fa-user" />&nbsp; by: <a href="#">Admin</a></span>
                        <span className="fa fa-eye" style={{ paddingTop: '4px' }}> </span>28924 &nbsp;&nbsp;
                            <span className="comment-count"> <i className="fa fa-comment" />&nbsp; 3 </span> <span className="date"><i className="fa fa-calendar">&nbsp;</i>&nbsp; 2015-08-05</span>
                        <div className="rating"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" />&nbsp; <span>(5 votes)</span></div>
                      </div>
                      <div className="content-text clearfix">
                        <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna.
                        Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consecvtetuer
                        adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus
                              eget, elementum vel.</p>
                        <p>Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.
                        Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam
                              cursus leo vel metus. Nulla facilisi. Aenean nec eros.</p>
                        <blockquote> Lorem ipsum dolor sit amet, verenam operibus furiam conclusoque sponte profundo. Conservus
                        mihi esse haec aliquam inlido laetare quod eam ad per. Antiochia videns quia quod non ait est
                        Apollonius non dum animae tertio eam ad te princeps ea docentur Hellenicus ut diem finito convocatis
                        secessit civitatis civium takimata. Parem luctu gubernatori usque vero rex Dionysiadi me missam ne
                              alicuius altum pervenit est amet amet Cur meae. </blockquote>
                        <div className="post_content">
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Trong bài thi IELTS Listening Test, bạn
                                  sẽ gặp dạng <strong>Flowcharts, Notes, Tables, Summaries And Forms</strong> thường xuyên. Đây là
                                  một dạng câu hỏi điền từ, yêu cầu người thi phải điền chính xác theo yêu cầu.</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Vậy cụ thể dạng câu hỏi này như thế
                          nào? Có chiến lược gì để trả lời câu hỏi đúng và chính xác hơn không? Cần chú ý điều gì để điền
                                  chính xác đáp án?</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Flowcharts, Notes, Tables, Summaries
                          And Forms là dạng câu hỏi về bảng biểu, ghi chú, bảng, bản tóm tắt, bản đăng ký, bảng thông
                                  tin…Bài viết dưới đây sẽ giới thiệu cho bạn về cách để hoàn thành câu hỏi này dễ dàng hơn.</span>
                          </p>
                          <p style={{ textAlign: 'left' }}><span style={{ fontSize: '11pt' }}>Ngoài ra, bạn hãy cùng tham gia khóa học
                                  Listening Free với thực hành chi tiết do Ms.Quỳnh chia sẻ nhé:</span></p>
                          <table style={{ backgroundColor: '#c7d6df', marginLeft: 'auto', marginRight: 'auto' }}>
                            <tbody>
                              <tr>
                                <td>
                                  <p><span style={{ fontSize: '11pt', color: '#0000ff' }}><strong><a style={{ color: '#0000ff' }} title="Unit 1: Tổng quan Listening" href="https://www.youtube.com/watch?v=K3iBagohwKw" target="_blank">Unit&nbsp;0: Tổng
                                              quan Listening</a></strong></span></p>
                                  <p><span style={{ fontSize: '11pt', color: '#0000ff' }}><strong><a style={{ color: '#0000ff', textDecoration: 'underline' }} title="Unit 1: Form Completion" href="https://ielts-fighter.com/tin-tuc/IELTS-Listening-Huong-dan-cach-lam-dang-bai-Form-Completion_mt1576612737.html" target="_blank">Unit 1: Form Completion</a></strong></span></p>
                                  <p><span style={{ textDecoration: 'underline', color: '#0000ff', fontSize: '11pt' }}><strong><a style={{ color: '#0000ff', textDecoration: 'underline' }} title="Unit 2: Maps/Plans Labelling" href="https://ielts-fighter.com/tin-tuc/IELTS-Listening-Huong-dan-cach-lam-dang-bai-Map-Plans-Labelling_mt1576784923.html" target="_blank">Unit 2: Maps/Plans Labelling</a></strong></span></p>
                                  <p><span style={{ fontSize: '11pt', color: '#0000ff' }}><strong><a style={{ color: '#0000ff' }} title="Unit 3:Multiple Choice" href="https://ielts-fighter.com/tin-tuc/Huong-dan-cach-lam-bai-Multiple-Choice-trong-IELTS-Listening_mt1577674448.html" target="_blank">Unit 3:Multiple Choice</a></strong></span></p>
                                  <p><span style={{ fontSize: '11pt', color: '#0000ff' }}><strong><a style={{ color: '#0000ff' }} title="Unit 4:Note Completion" href="https://ielts-fighter.com/tin-tuc/IELTS-Listening-Huong-dan-cach-lam-bai-NOTE-COMPLETION_mt1577926894.html" target="_blank">Unit 4:Note Completion</a></strong></span></p>
                                  <p><span style={{ fontSize: '11pt', color: '#0000ff' }}><strong><a style={{ color: '#0000ff' }} title="Unit 5: Practice Test" href="https://www.youtube.com/watch?v=_-VmPQpesO8&t=155s" target="_blank">Unit 5:
                                              Practice Test</a></strong></span></p>
                                  <p><span style={{ fontSize: '11pt', color: '#0000ff' }}><strong><strong><a style={{ color: '#0000ff' }} title="Unit 6: Sentence Summarry Completion  " href="https://ielts-fighter.com/tin-tuc/IELTS-Listening-Huong-dan-cach-lam-SENTENCE-SUMMARY-COMPLETION_mt1578344508.html" target="_blank">Unit 6: Sentence Summarry
                                                Completion</a></strong>&nbsp;</strong></span></p>
                                  <p><span style={{ fontSize: '11pt', color: '#0000ff' }}><strong><a style={{ color: '#0000ff' }} title="Unit 7: Matching/Classifying" href="https://ielts-fighter.com/tin-tuc/IELTS-Listening-Huong-dan-cach-lam-bai-MATCHING-CLASSIFYING_mt1578599495.html" target="_blank">Unit 7: Matching/Classifying</a></strong></span></p>
                                  <p><span style={{ fontSize: '11pt', color: '#0000ff' }}><strong><a style={{ color: '#0000ff' }} title="Unit 8: Short answer" href="https://www.youtube.com/watch?v=J_NF0ao6X64&t=337s" target="_blank">Unit 8:
                                              Short answer</a></strong></span></p>
                                  <p><span style={{ fontSize: '11pt', color: '#0000ff' }}><strong><a style={{ color: '#0000ff' }} title="Unit 9: Diagram/Flow chart Completion" href="https://www.youtube.com/watch?v=ysWsyzD2QrU&t=127s" target="_blank">Unit 9:
                                              Diagram/Flow chart Completion</a></strong></span></p>
                                  <p><span style={{ fontSize: '11pt', color: '#0000ff' }}><strong><a style={{ color: '#0000ff' }} title="Unit 10: Practice Test" href="https://www.youtube.com/watch?v=_-VmPQpesO8&t=155s" target="_blank">Unit 10:
                                              Practice Test</a></strong></span></p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <h2 style={{ textAlign: 'justify' }}><span style={{ fontSize: '12pt', color: '#ff0000' }}><strong>Lưu ý quan
                                    trọng với dạng câu hỏi Flowcharts, Notes, Tables, Summaries And Forms</strong></span></h2>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Trước khi bắt đầu tìm hiểu từng câu hỏi
                                  và cách làm bài <strong><a title="IELTS Listening" href="http://ielts-fighter.com/listening" target="_blank">IELTS Listening</a></strong>, điều quan trọng bạn cần ghi nhớ là hãy chú ý
                                  những yêu cầu mà câu hỏi đề ra.</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Có nhiều thí sinh đã không đọc kỹ câu
                                  hỏi và làm chính xác theo yêu cầu dẫn đến mất điểm trầm trọng. Bạn cần chú ý nhé.</span></p>
                          <p style={{ textAlign: 'justify' }}><strong><span style={{ fontSize: '11pt' }}>Ví dụ các điều kiện yêu cầu
                                    theo câu hỏi:</span></strong></p>
                          <ul style={{ textAlign: 'justify' }}>
                            <li><span style={{ fontSize: '11pt' }}>Write NO MORE THAN ONE WORD for each answer</span></li>
                            <li><span style={{ fontSize: '11pt' }}>Write NO MORE THAN ONE WORD AND/OR A NUMBER for each
                                    answer</span></li>
                            <li><span style={{ fontSize: '11pt' }}>Write NO MORE THAN TWO WORDS for each answer</span></li>
                          </ul>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Nếu như các bạn không làm đúng yêu cầu
                                  viết không được hơn 1 từ, 1 số hay 2 từ…thì sẽ mất điểm ngay lập tức.</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Chú ý, số ở đây không phải là một chữ
                          số. Đó có thể là số năm, số điện thoại (dãy số), số tuổi…Vì thế hãy đọc kỹ yêu cầu và câu hỏi để
                                  biết mình cần điền gì.</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Câu trả lời bạn phải thực hiện theo
                          đúng yêu cầu về số lượng từ hoặc số. Nên, theo từng câu hỏi mà các bạn phải sử dụng kiến thức của
                          mình để chia động từ hay thay đổi các động từ thành danh từ, danh từ thành danh từ, động từ, kết
                                  hợp từ này với từ khác…đáp ứng yêu cầu số lượng và vẫn đúng ý câu hỏi.</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Ví dụ về Add – thêm và các dạng từ của
                                  nó với đáp án đúng theo từng câu:</span></p>
                          <ul style={{ textAlign: 'justify' }}>
                            <li><span style={{ fontSize: '11pt' }}>Once the ingredients had been <strong>added</strong> the mixture
                                    was pliable.</span></li>
                            <li><span style={{ fontSize: '11pt' }}>When you <strong>add</strong> the ingredients you will see the
                                    mixture start to change.</span></li>
                            <li><span style={{ fontSize: '11pt' }}>After <strong>adding</strong> the two main ingredients, the
                                    mixture was ready to be stirred.</span></li>
                          </ul>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Ở câu 1, bạn dùng thì quá khứ hoàn
                                  thành, ở câu hai dạng của add lại là thì hiện tại đơn, câu ba thì lại là dạng V-ing.</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Bên cạnh đó, những từ đồng nghĩa, từ
                          trái nghĩa cũng được sử dụng trong bài nghe nên hãy để ý. Bài Nghe sẽ kiểm tra khả năng nghe và sử
                                  dụng ngôn ngữ đó của bạn nên cần có sự biến chuyển theo đúng yêu cầu đề bài.</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Bạn có thể thấy ví dụ: trong bài nghe,
                          họ nói về travel, nhưng trên câu hỏi bảng của bạn là excursion. Nếu không hiểu rõ và biết được hai
                          ý đồng nghĩa này, bạn sẽ thấy rối và không hiểu câu hỏi ban đầu đấy. Đây cũng là một bẫy trong
                                  Listening mà khi nghe, bạn hãy để ý.</span></p>
                          <h3 style={{ textAlign: 'justify' }}><span style={{ fontSize: '12pt', color: '#ff0000' }}>Chiến lược làm
                                  bài&nbsp;<strong>Flowcharts, Notes, Tables, Summaries And Forms</strong></span></h3>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Theo dạng câu hỏi<strong> Flowcharts,
                                    Notes, Tables, Summaries And Forms</strong> thì bạn trước hết hãy đọc kỹ yêu cầu câu hỏi và áp
                                  dụng các chiến lược dưới đây sẽ giúp bạn nghe tốt và điền đúng đáp án hơn.</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}><strong>Bước 1:</strong> Hãy đọc kỹ câu
                                  hỏi từ yêu cầu số lượng từ, số cần điền như đã nói ở trên đến những thông tin được cung cấp trong
                                  bảng, bản, biểu.</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Hãy suy nghĩ về bối cảnh của bài nghe
                          bạn sẽ được nghe. Đây là một bước dự đoán câu trả lời. Ví dụ với một form đăng ký thì đó là đăng
                                  ký trường học, thư viện hay mua vé máy bay, đặt hàng…</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}><strong>Bước 2:</strong> Xác định từ
                                  thông tin được cung cấp những từ khóa mà bạn cho rằng quan trọng, cần để ý khi nghe.</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Tiếp tục dự đoán câu trả lời sẽ điền
                          vào từng phần. Bởi bạn có từ khóa và “đoán” được dạng từ cần điền, số hay những từ như thế nào…thì
                                  khi nghe sẽ nhanh chóng nắm được keys hơn.</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Phần dự đoán câu trả lời, bạn có thể
                                  luyện tập thêm với :</span></p>
                          <ul>
                            <li style={{ textAlign: 'justify' }}><strong><span style={{ fontSize: '11pt', color: '#0000ff' }}><a style={{ color: '#0000ff' }} title="Unit 30: Luyện tập đọc câu hỏi đoán thông tin IELTS Listening" href="http://ielts-fighter.com/listening/Unit-30-Luyen-tap-doc-cau-hoi-doan-thong-tin-IELTS-Listening_mt1556038533.html" target="_blank">Unit 30: Luyện tập đọc câu hỏi đoán thông tin IELTS
                                        Listening</a></span></strong></li>
                            <li style={{ textAlign: 'justify' }}><strong><span style={{ fontSize: '11pt', color: '#0000ff' }}><a style={{ color: '#0000ff' }} title="Unit 21: Luyện tập " href="http://ielts-fighter.com/listening/Unit-21-Luyen-tap-34-du-doan-34-khi-lam-bai-Listening_mt1508236979.html" target="_blank">Unit 21: Luyện tập "dự đoán" khi làm bài Listening</a>
                                      &nbsp;</span></strong></li>
                          </ul>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}><strong>Bước 3:</strong> Bạn chỉ được
                                  nghe một lần nên nghe cẩn thận để nắm thông tin. Hãy chú ý những thông tin “nhiễu” ảnh hưởng đến
                                  câu trả lời.</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Bạn luyện tập tránh nhiễu thêm với bài
                                  học:</span></p>
                          <p style={{ textAlign: 'center' }}><span style={{ fontSize: '11pt' }}><iframe src="//www.youtube.com/embed/KIpVNhf5Nqk" width={425} height={350} /></span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Một ví dụ dưới đây và bạn hãy thử làm
                                  bài nhé:</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}><audio controls="controls">
                            <source src="http://static.ielts-fighter.com/uploads/2019/04/file%20nghe%20test%20listening/notes.mp3" type="audio/mpeg" /></audio></span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Write NO MORE THAN THREE WORDS AND/OR A
                                  NUMBER for each answer.</span></p>
                          <p style={{ textAlign: 'justify' }}>&nbsp;</p>
                          <table border="-">
                            <tbody>
                              <tr>
                                <td>
                                  <p style={{ textAlign: 'center' }}><strong><span style={{ fontSize: '11pt' }}>History of The
                                            Acropolis</span></strong></p>
                                  <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>The Beginning</span></p>
                                  <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>A temple to the goddess 31.
                                          ..............................</span></p>
                                  <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>A symbol of culture and 32.
                                          ............................................</span></p>
                                  <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Aesthetics</span></p>
                                  <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Full of decoration, the
                                  Parthenon was home to a detailed 33. .................................. above the
                                          columns.</span></p>
                                  <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>The Parthenon had been built
                                          for 34. ........................... years.</span></p>
                                  <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Under Attack</span></p>
                                  <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>&nbsp;</span></p>
                                  <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>The Parthenon was attacked
                                          during 35. .........................</span></p>
                                  <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Later on, Lord Elgin wanted to
                                          remove the 36. ......................................... and take them to England.</span>
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <p style={{ textAlign: 'justify' }}><strong><span style={{ fontSize: '11pt' }}>Đáp án</span></strong></p>
                          <p><span style={{ fontSize: '11pt' }}>31. Athena</span></p>
                          <p><span style={{ fontSize: '11pt' }}>32. refinement</span></p>
                          <p><span style={{ fontSize: '11pt' }}>33. frieze</span></p>
                          <p><span style={{ fontSize: '11pt' }}>34. 2000</span></p>
                          <p><span style={{ fontSize: '11pt' }}>35. 1687</span></p>
                          <p><span style={{ fontSize: '11pt' }}>36. marble friezes</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>&nbsp;</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ backgroundColor: '#ffff00', fontSize: '12pt' }}><strong>COMPLETING A TABLE</strong></span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Câu hỏi này yêu cầu bạn hoàn thành một
                          bảng ở những chỗ trống. Khi đọc tiêu đề trong bảng thì bạn sẽ biết được loại thông tin sẽ nghe và
                                  cần phải điền.</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Bạn cần nghe và điền đáp án mà mình cho
                          là đúng khi nghe bài test sau đó kiểm tra. Ở các câu hỏi sẽ quy định số lượng từ và số cho đáp
                                  án.</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Một ví dụ ở đây:</span></p>
                          <p style={{ textAlign: 'justify' }}><audio controls="controls">
                            <source src="http://static.ielts-fighter.com/uploads/2019/05/bai-hoc-listening/complting-a-table-5-dang.mp3" type="audio/mpeg" /></audio></p>
                          <table border="-">
                            <tbody>
                              <tr>
                                <td style={{ textAlign: 'center' }} colSpan={3}><span style={{ fontSize: '11pt' }}>'Student Life' video
                                        project</span><br /><br /></td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td><span style={{ fontSize: '11pt' }}>Cristina</span></td>
                                <td><span style={{ fontSize: '11pt' }}>Ibrahim</span></td>
                              </tr>
                              <tr>
                                <td><span style={{ fontSize: '11pt' }}>Enjoyed:</span></td>
                                <td><span style={{ fontSize: '11pt' }}>• using the camera</span><br /><span style={{ fontSize: '11pt' }}>•
                                        going to British (21) .................</span></td>
                                <td>
                                  <p><span style={{ fontSize: '11pt' }}>contact with students doing other courses</span></p>
                                  <p><span style={{ fontSize: '11pt' }}> (has asked some to (22) ................. with him)</span>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td><span style={{ fontSize: '11pt' }}>Most useful</span><br /><span style={{ fontSize: '11pt' }}>language</span><br /><span style={{ fontSize: '11pt' }}>practice:</span>
                                </td>
                                <td><span style={{ fontSize: '11pt' }}>• listening to instructions</span><br /><span style={{ fontSize: '11pt' }}>• learning (23) ................. vocabulary</span></td>
                                <td><span style={{ fontSize: '11pt' }}>listening to British students'</span><br /><span style={{ fontSize: '11pt' }}>language because of</span><br /><span style={{ fontSize: '11pt' }}>-
                                        normal speed</span><br /><span style={{ fontSize: '11pt' }}>- large amount of (24)
                                        .................</span></td>
                              </tr>
                              <tr>
                                <td><span style={{ fontSize: '11pt' }}>General</span><br /><span style={{ fontSize: '11pt' }}>usefulness:</span></td>
                                <td><span style={{ fontSize: '11pt' }}>• operating video camera</span><br /><span style={{ fontSize: '11pt' }}>• working with other people:</span><br /><span style={{ fontSize: '11pt' }}> - learning about (25) ................. </span><br /><span style={{ fontSize: '11pt' }}> - compromising</span><br /><span style={{ fontSize: '11pt' }}> - (26)
                                        ................. people who have different views</span></td>
                                <td><span style={{ fontSize: '11pt' }}>the importance of (27) .................</span></td>
                              </tr>
                              <tr>
                                <td><span style={{ fontSize: '11pt' }}>Things to do</span><br /><span style={{ fontSize: '11pt' }}>differently in</span><br /><span style={{ fontSize: '11pt' }}>future:</span></td>
                                <td><span style={{ fontSize: '11pt' }}>• decide when to (28) ................. each stage at the
                                        beginning</span><br /><span style={{ fontSize: '11pt' }}>• make more effort to (29)
                                        ................. with the camera</span></td>
                                <td><span style={{ fontSize: '11pt' }}>don't make the film too (30) .................</span></td>
                              </tr>
                            </tbody>
                          </table>
                          <p>&nbsp;</p>
                          <p><span style={{ fontSize: '11pt' }}>Đáp án:</span></p>
                          <p><span style={{ fontSize: '11pt' }}>21. home / student's home</span></p>
                          <p><span style={{ fontSize: '11pt' }}>22. (have) dinner / come to dinner / go to dinner</span></p>
                          <p><span style={{ fontSize: '11pt' }}>23. techincal</span></p>
                          <p><span style={{ fontSize: '11pt' }}>24. slang</span></p>
                          <p><span style={{ fontSize: '11pt' }}>25. cooperating / cooperation </span></p>
                          <p><span style={{ fontSize: '11pt' }}>26. persuading</span></p>
                          <p><span style={{ fontSize: '11pt' }}>27. editing</span></p>
                          <p><span style={{ fontSize: '11pt' }}>28. complete</span></p>
                          <p><span style={{ fontSize: '11pt' }}>29. experiment</span></p>
                          <p><span style={{ fontSize: '11pt' }}>30. long</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ backgroundColor: '#ffff00', fontSize: '12pt' }}><strong>COMPLETING A SUMMARY</strong></span>
                          </p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Hoàn thành một bản tóm tắt thường là
                          nghe giới thiệu về một cuốn sách, nhà hàng, sự kiện, bộ phim…Câu hỏi giống như bài tập tóm tắt
                          khác với một đoạn văn ngắn để bạn điền vào chỗ trống. Ngữ pháp rất quan trọng trọng ở câu hỏi
                                  này.</span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Các thông tin trong bài nghe được cung
                                  cấp giúp bạn điền từ. Hãy luyện tập đọc và dự đoán từ phù hợp điền vào chỗ trống.</span></p>
                          <p style={{ textAlign: 'center' }}><span style={{ fontSize: '11pt' }}><iframe src="//www.youtube.com/embed/ZrpTrsJOoAE" width={425} height={350} /></span></p>
                          <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '11pt' }}>Một ví dụ ở đây:</span></p>
                          <p style={{ textAlign: 'justify' }}>&nbsp;<audio controls="controls">
                            <source src="http://static.ielts-fighter.com/uploads/2019/04/file%20nghe%20test%20listening/sumary.mp3" type="audio/mpeg" /></audio></p>
                          <p style={{ textAlign: 'justify' }}>&nbsp;</p>
                          <table border="-">
                            <tbody>
                              <tr>
                                <td>
                                  <p><span style={{ fontSize: '11pt' }}>Complete the summary below.</span></p>
                                  <p><span style={{ fontSize: '11pt' }}>Choose ONE WORD ONLY from the passage for each
                                          answer.</span></p>
                                  <p style={{ textAlign: 'center' }}><strong><span style={{ fontSize: '11pt' }}>How To Write A
                                            Speech</span></strong></p>
                                  <p><span style={{ fontSize: '11pt' }}>This is the second most important thing you need to do when
                                  you are creating your speech. The first thing you should do is understand what your 37.
                                  ................................... will be. How do you plan on getting people's
                                  attention? You need to think of something that will link to the 38. ................ this
                                  is the idea that you are trying to sell or the point you are making to your audience. The
                                  next thing you need to include is the 39. ............................. this would be the
                                  main points you are getting across. Next, you would have a call to action, telling them
                                  what you want them to do. Finally, you will 40. ............................... and link
                                          this back to the opening.</span></p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="pagination-area ">
                        <ul>
                          <li><a href="?page=1">Đầu</a></li>
                          <li>
                            <a href="?page=1">
                              <i className="fa fa-angle-left" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a href="?page=1">1</a>
                          </li>
                          <li>
                            <a className="active" href="javascript:;">2</a>
                          </li>
                          <li>
                            <a href="?page=3">3</a>
                          </li>
                          <li>
                            <a href="?page=4">4</a>
                          </li>
                          <li>
                            <a href="?page=3">
                              <i className="fa fa-angle-right" aria-hidden="true" />
                            </a>
                          </li>
                          <li><a href="?page=4">Cuối</a></li>
                        </ul>
                      </div>
                    </div>
                    {/* Related Posts */}
                    <div className="single-box">
                      <h2>Related Posts</h2>
                      <div className="slider-items-products">
                        <div id="related-posts" className="product-flexslider hidden-buttons">
                          <div className="slider-items slider-width-col4 fadeInUp">
                            <div className="product-item">
                              <article className="entry">
                                <div className="entry-thumb image-hover2"> <a href="#"> <img src="images/blog-img2.jpg" alt="Blog" />
                                </a> </div>
                                <div className="entry-info">
                                  <h3 className="entry-title"><a href="#">Qui ut ceteros comprehensam</a></h3>
                                  <div className="entry-meta-data"> <span className="comment-count"> <i className="fa fa-comment-o">&nbsp;</i> 1 </span> <span className="date"> <i className="fa fa-calendar">&nbsp;</i> 2015-12-05 </span> </div>
                                  <div className="entry-more"> <a href="#">Read more</a> </div>
                                </div>
                              </article>
                            </div>
                            <div className="product-item">
                              <article className="entry">
                                <div className="entry-thumb image-hover2"> <a href="#"> <img src="images/blog-img3.jpg" alt="Blog" />
                                </a> </div>
                                <div className="entry-info">
                                  <h3 className="entry-title"><a href="#">Perspiciatis unde omnis</a></h3>
                                  <div className="entry-meta-data"> <span className="comment-count"> <i className="fa fa-comment-o">&nbsp;</i> 5 </span> <span className="date"> <i className="fa fa-calendar">&nbsp;</i> 2015-12-15 </span> </div>
                                  <div className="entry-more"> <a href="#">Read more</a> </div>
                                </div>
                              </article>
                            </div>
                            <div className="product-item">
                              <article className="entry">
                                <div className="entry-thumb image-hover2"> <a href="#"> <img src="images/blog-img4.jpg" alt="Blog" />
                                </a> </div>
                                <div className="entry-info">
                                  <h3 className="entry-title"><a href="#">Lorem ipsum dolor</a></h3>
                                  <div className="entry-meta-data"> <span className="comment-count"> <i className="fa fa-comment-o">&nbsp;</i> 6 </span> <span className="date"> <i className="fa fa-calendar">&nbsp;</i> 2015-12-11 </span> </div>
                                  <div className="entry-more"> <a href="#">Read more</a> </div>
                                </div>
                              </article>
                            </div>
                            <div className="product-item">
                              <article className="entry">
                                <div className="entry-thumb image-hover2"> <a href="#"> <img src="images/blog-img5.jpg" alt="Blog" />
                                </a> </div>
                                <div className="entry-info">
                                  <h3 className="entry-title"><a href="#">Sed ut perspiciatis</a></h3>
                                  <div className="entry-meta-data"> <span className="comment-count"> <i className="fa fa-comment-o">&nbsp;</i> 10 </span> <span className="date"> <i className="fa fa-calendar">&nbsp;</i> 2016-01-05 </span> </div>
                                  <div className="entry-more"> <a href="#">Read more</a> </div>
                                </div>
                              </article>
                            </div>
                            <div className="product-item">
                              <article className="entry">
                                <div className="entry-thumb image-hover2"> <a href="#"> <img src="images/blog-img6.jpg" alt="Blog" />
                                </a> </div>
                                <div className="entry-info">
                                  <h3 className="entry-title"><a href="#">Iste natus error</a></h3>
                                  <div className="entry-meta-data"> <span className="comment-count"> <i className="fa fa-comment-o">&nbsp;</i> 0 </span> <span className="date"> <i className="fa fa-calendar">&nbsp;</i> 2015-12-25 </span> </div>
                                  <div className="entry-more"> <a href="#">Read more</a> </div>
                                </div>
                              </article>
                            </div>
                            <div className="product-item">
                              <article className="entry">
                                <div className="entry-thumb image-hover2"> <a href="#"> <img src="images/blog-img7.jpg" alt="Blog" />
                                </a> </div>
                                <div className="entry-info">
                                  <h3 className="entry-title"><a href="#">omnis iste natus</a></h3>
                                  <div className="entry-meta-data"> <span className="comment-count"> <i className="fa fa-comment-o">&nbsp;</i> 8 </span> <span className="date"> <i className="fa fa-calendar">&nbsp;</i> 2016-01-09 </span> </div>
                                  <div className="entry-more"> <a href="#">Read more</a> </div>
                                </div>
                              </article>
                            </div>
                            <div className="product-item">
                              <article className="entry">
                                <div className="entry-thumb image-hover2"> <a href="#"> <img src="images/blog-img1.jpg" alt="Blog" />
                                </a> </div>
                                <div className="entry-info">
                                  <h3 className="entry-title"><a href="#">unde omnis iste</a></h3>
                                  <div className="entry-meta-data"> <span className="comment-count"> <i className="fa fa-comment-o">&nbsp;</i> 2 </span> <span className="date"> <i className="fa fa-calendar">&nbsp;</i> 2016-01-02 </span> </div>
                                  <div className="entry-more"> <a href="#">Read more</a> </div>
                                </div>
                              </article>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ./Related Posts */}
                    {/* Comment */}
                    <div className="single-box">
                      <h2 className>Comments</h2>
                      <div className="comment-list">
                        <ul>
                          <div className="my-comment">
                            <li>
                              <div className="avartar"> <img src="images/avatar.png" alt="Avatar" /> </div>
                              <div className="comment-body">
                                <div className="comment-meta"> <span className="author"><a href="#">Admin</a></span> <span className="date">2015-04-01</span> </div>
                                <div className="comment"> Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer
                                rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.
                                    </div>
                                <div className="comment_like"><a href="#">Thích</a><span aria-hidden="true"> · </span>
                                  <a className="respone" href="javascript:;">Phản hồi</a><span aria-hidden="true"> · </span>
                                  <span><i className="fas fa-thumbs-up" />&nbsp; 1</span> <span aria-hidden="true"> · </span>
                                  <span className="comment-count"> <a href="javascript:;"> <i className="fa fa-comment-o" aria-hidden="true">&nbsp;</i> 5 </a></span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <ul className="my-sub-comment-group">
                                <li>
                                  <div className="avartar"> <img src="images/avatar.png" alt="Avatar" /> </div>
                                  <div className="comment-body">
                                    <div className="comment-meta"> <span className="author"><a href="#">Admin</a></span> <span className="date">2015-04-01</span> </div>
                                    <div className="comment"> Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer
                                    rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.
                                        </div>
                                    <div className="comment_like"><a href="#">Thích</a><span aria-hidden="true"> · </span><a className="respone" href="javascript:;">Phản hồi</a><span aria-hidden="true"> ·
                                          </span><span><i className="fas fa-thumbs-up" />&nbsp; 1</span>
                                    </div>
                                  </div>
                                </li>
                                <li className="my-sub-comment">
                                  <div className="avartar">
                                    <img src="images/avatar.png" alt="Avatar" />
                                  </div>
                                  <div className="comment-body">
                                    <div className="my-comment-form">
                                      <textarea name="message" id="message" rows={8} className="form-control" defaultValue={""} />
                                      <button className="button">
                                        <span>Post Comment</span></button>
                                      <button className="button cancel"><span>Hủy</span>
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </div>
                    {/* ./Comment */}
                  </div>
                  {/* right colunm */}
                  <aside className="right sidebar col-xs-12 col-sm-3">
                    {/* Blog category */}
                    <div className="block blog-module">
                      <p className="title_block">Blog Categories</p>
                      <div className="block_content">
                        {/* layered */}
                        <div className="layered layered-category">
                          <div className="layered-content">
                            <ul className="tree-menu">
                              <li><a href="#"><i className="fa fa-angle-right" />&nbsp; Images</a></li>
                              <li><i className="fa fa-angle-right" />&nbsp; <a href="#">Audio</a></li>
                              <li><i className="fa fa-angle-right" />&nbsp; <a href="#">Photos</a></li>
                              <li><i className="fa fa-angle-right" />&nbsp; <a href="#">Diet &amp; Fitness</a></li>
                              <li><i className="fa fa-angle-right" />&nbsp; <a href="#">Slider</a></li>
                            </ul>
                          </div>
                        </div>
                        {/* ./layered */}
                      </div>
                    </div>
                    {/* ./blog category  */}
                    {/* Popular Posts */}
                    <div className="block blog-module wow fadeInUp">
                      <p className="title_block">Popular Posts</p>
                      <div className="block_content">
                        {/* layered */}
                        <div className="layered">
                          <div className="layered-content">
                            <ul className="blog-list-sidebar">
                              <li>
                                <div className="post-thumb"> <a href="#"><img src="images/blog-img1.jpg" alt="Blog" /></a> </div>
                                <div className="post-info">
                                  <h5 className="entry_title"><a href="#">Lorem ipsum dolor sit amet</a></h5>
                                  <div className="post-meta"> <span className="date"><i className="fa fa-calendar">&nbsp;</i>
                                          2014-08-05</span> <span className="comment-count"> <i className="fa fa-comment-o">&nbsp;</i> 8
                                        </span> </div>
                                </div>
                              </li>
                              <li>
                                <div className="post-thumb"> <a href="#"><img src="images/blog-img2.jpg" alt="Blog" /></a> </div>
                                <div className="post-info">
                                  <h5 className="entry_title"><a href="#">Lorem ipsum dolor sit amet</a></h5>
                                  <div className="post-meta"> <span className="date"><i className="fa fa-calendar">&nbsp;</i>
                                          2014-08-05</span> <span className="comment-count"> <i className="fa fa-comment-o">&nbsp;</i> 5
                                        </span> </div>
                                </div>
                              </li>
                              <li>
                                <div className="post-thumb"> <a href="#"><img src="images/blog-img3.jpg" alt="Blog" /></a> </div>
                                <div className="post-info">
                                  <h5 className="entry_title"><a href="#">Lorem ipsum dolor sit amet</a></h5>
                                  <div className="post-meta"> <span className="date"><i className="fa fa-calendar">&nbsp;</i>
                                          2014-08-05</span> <span className="comment-count"> <i className="fa fa-comment-o">&nbsp;</i> 1
                                        </span> </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* ./layered */}
                      </div>
                    </div>
                    {/* ./Popular Posts */}
                    {/* Recent Comments */}
                    <div className="block blog-module wow fadeInUp">
                      <p className="title_block">Recent Comments</p>
                      <div className="block_content">
                        {/* layered */}
                        <div className="layered">
                          <div className="layered-content">
                            <ul className="recent-comment-list">
                              <li>
                                <h5><a href="#">Lorem ipsum dolor sit amet</a></h5>
                                <div className="comment"> "Consectetuer adipis. Mauris accumsan nulla vel diam. Sed in..." </div>
                                <div className="author">Posted by <a href="#">Admin</a></div>
                              </li>
                              <li>
                                <h5><a href="#">Lorem ipsum dolor sit amet</a></h5>
                                <div className="comment"> "Consectetuer adipis. Mauris accumsan nulla vel diam. Sed in..." </div>
                                <div className="author">Posted by <a href="#">Admin</a></div>
                              </li>
                              <li>
                                <h5><a href="#">Lorem ipsum dolor sit amet</a></h5>
                                <div className="comment"> "Consectetuer adipis. Mauris accumsan nulla vel diam. Sed in..." </div>
                                <div className="author">Posted by <a href="#">Admin</a></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* ./layered */}
                      </div>
                    </div>
                    {/* ./Recent Comments */}
                    {/* tags */}
                    <div className="popular-tags-area wow fadeInUp">
                      <div className="sidebar-bar-title">
                        <h3>Popular Tags</h3>
                      </div>
                      <div className="tag">
                        <ul>
                          <li><a href="#">Boys</a></li>
                          <li><a href="#">Camera</a></li>
                          <li><a href="#">good</a></li>
                          <li><a href="#">Computers</a></li>
                          <li><a href="#">Phone</a></li>
                          <li><a href="#">clothes</a></li>
                          <li><a href="#">girl</a></li>
                          <li><a href="#">shoes</a></li>
                          <li><a href="#">women</a></li>
                          <li><a href="#">accessoties</a></li>
                          <li><a href="#">View All Tags</a></li>
                        </ul>
                      </div>
                    </div>
                    {/* ./tags */}
                    {/* Banner */}
                    <div className="single-img-add sidebar-add-slider wow fadeInUp">
                      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                          <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                          <li data-target="#carousel-example-generic" data-slide-to={1} />
                          <li data-target="#carousel-example-generic" data-slide-to={2} />
                        </ol>
                        {/* Wrapper for slides */}
                        <div className="carousel-inner" role="listbox">
                          <div className="item active"> <img src="images/add-slide1.jpg" alt="slide1" />
                            <div className="carousel-caption">
                              <h3><a href="single_product.html" title=" Sample Product">Sale Up to 50% off</a></h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <a href="#" className="info">shopping Now</a>
                            </div>
                          </div>
                          <div className="item"> <img src="images/add-slide2.jpg" alt="slide2" />
                            <div className="carousel-caption">
                              <h3><a href="single_product.html" title=" Sample Product">Smartwatch Collection</a></h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <a href="#" className="info">All Collection</a>
                            </div>
                          </div>
                          <div className="item"> <img src="images/add-slide3.jpg" alt="slide3" />
                            <div className="carousel-caption">
                              <h3><a href="single_product.html" title=" Sample Product">Summer Sale</a></h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                        </div>
                        {/* Controls */}
                        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"> <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" /> <span className="sr-only">Previous</span> </a> <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next"> <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" /> <span className="sr-only">Next</span> </a>
                      </div>
                    </div>
                    {/* ./Banner */}
                  </aside>
                  {/* ./right colunm */}
                </div>
              </div>
            </section>
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
