import React, { Component } from 'react';
import $ from 'jquery';
import Carousel from 'react-bootstrap/Carousel'
class HomePage extends Component {

  // componentDidMount() {
  //     $(document).ready(function () {
  //       $('.tp-banner').revolution(
  //         {
  //           delay: 9000,
  //           startwidth: 1170,
  //           startheight: 530,
  //           hideThumbs: 10,
  
  //           navigationType: "bullet",
  //           navigationStyle: "preview1",
  
  //           hideArrowsOnMobile: "on",
  
  //           touchenabled: "on",
  //           onHoverStop: "on",
  //           spinner: "spinner4"
  //         });
  //     });
 
  // }

    render() {
        return (
            <div id="page">

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       
        {/*special-products*/}
        <div className="container">
          <div className="special-products">
            <div className="page-header">
              <h2>TÀI LIỆU NỔI BẬT</h2>
            </div>
            <div className="special-products-pro">
              <div className="slider-items-products">
                <div id="special-products-slider" className="product-flexslider hidden-buttons">
                  <div className="slider-items slider-width-col4">
                    <div className="product-item">
                      <div className="item-inner">
                        <div className="product-thumbnail">
                          <div className="icon-sale-label sale-left">Sale</div>
                          <div className="icon-new-label new-right">New</div>
                          <div className="pr-img-area"> <a title="Ipsums Dolors Untra" href="single_product.html">
                              <figure> <img className="first-img" src="images/products/mau1.jpg" alt="html template" /> <img className="hover-img" src="images/products/mau1.jpg" alt="html template" /></figure>
                            </a>
                            <button type="button" className="add-to-cart-mt"> <i className="fa fa-shopping-cart" /><span> Tìm hiểu
                                thêm</span> </button>
                          </div>
                          <div className="pr-info-area">
                            <div className="pr-button">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart" />
                                </a> </div>
                            </div>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Ipsums Dolors Untra" href="single_product.html">IELTS Listening: Dạng câu hỏi Flowcharts, Notes, Tables, Summaries And Forms </a> </div>
                            <div className="item-content">
                              <div className="rating">
                                <div className="view_talk">
                                  <span className="fa fa-eye" style={{paddingTop: '4px'}}> 28924 &nbsp;&nbsp;</span>  
                                  <span className="comment-count"> <i className="fa fa-comment" />&nbsp; 3 </span>
                                </div>
                                <i style={{marginBottom: '5px'}}>April, 12, 2016</i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="item-inner">
                        <div className="product-thumbnail">
                          <div className="icon-sale-label sale-left">Sale</div>
                          <div className="icon-new-label new-right">New</div>
                          <div className="pr-img-area"> <a title="Ipsums Dolors Untra" href="single_product.html">
                              <figure> <img className="first-img" src="images/products/mau1.jpg" alt="html template" /> <img className="hover-img" src="images/products/mau1.jpg" alt="html template" /></figure>
                            </a>
                            <button type="button" className="add-to-cart-mt"> <i className="fa fa-shopping-cart" /><span> Tìm hiểu
                                thêm</span> </button>
                          </div>
                          <div className="pr-info-area">
                            <div className="pr-button">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart" />
                                </a> </div>
                            </div>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Ipsums Dolors Untra" href="single_product.html">IELTS Listening: Dạng câu hỏi Flowcharts, Notes, Tables, Summaries And Forms </a> </div>
                            <div className="item-content">
                              <div className="rating">
                                <div className="view_talk">
                                  <span className="fa fa-eye" style={{paddingTop: '4px'}}> 28924 &nbsp;&nbsp;</span>  
                                  <span className="comment-count"> <i className="fa fa-comment" />&nbsp; 3 </span>
                                </div>
                                <i style={{marginBottom: '5px'}}>April, 12, 2016</i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="item-inner">
                        <div className="product-thumbnail">
                          <div className="icon-sale-label sale-left">Sale</div>
                          <div className="icon-new-label new-right">New</div>
                          <div className="pr-img-area"> <a title="Ipsums Dolors Untra" href="single_product.html">
                              <figure> <img className="first-img" src="images/products/mau1.jpg" alt="html template" /> <img className="hover-img" src="images/products/mau1.jpg" alt="html template" /></figure>
                            </a>
                            <button type="button" className="add-to-cart-mt"> <i className="fa fa-shopping-cart" /><span> Tìm hiểu
                                thêm</span> </button>
                          </div>
                          <div className="pr-info-area">
                            <div className="pr-button">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart" />
                                </a> </div>
                            </div>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Ipsums Dolors Untra" href="single_product.html">IELTS Listening: Dạng câu hỏi Flowcharts, Notes, Tables, Summaries And Forms </a> </div>
                            <div className="item-content">
                              <div className="rating">
                                <div className="view_talk">
                                  <span className="fa fa-eye" style={{paddingTop: '4px'}}> 28924 &nbsp;&nbsp;</span>  
                                  <span className="comment-count"> <i className="fa fa-comment" />&nbsp; 3 </span>
                                </div>
                                <i style={{marginBottom: '5px'}}>April, 12, 2016</i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="item-inner">
                        <div className="product-thumbnail">
                          <div className="icon-sale-label sale-left">Sale</div>
                          <div className="icon-new-label new-right">New</div>
                          <div className="pr-img-area"> <a title="Ipsums Dolors Untra" href="single_product.html">
                              <figure> <img className="first-img" src="images/products/mau1.jpg" alt="html template" /> <img className="hover-img" src="images/products/mau1.jpg" alt="html template" /></figure>
                            </a>
                            <button type="button" className="add-to-cart-mt"> <i className="fa fa-shopping-cart" /><span> Tìm hiểu
                                thêm</span> </button>
                          </div>
                          <div className="pr-info-area">
                            <div className="pr-button">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart" />
                                </a> </div>
                            </div>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Ipsums Dolors Untra" href="single_product.html">IELTS Listening: Dạng câu hỏi Flowcharts, Notes, Tables, Summaries And Forms </a> </div>
                            <div className="item-content">
                              <div className="rating">
                                <div className="view_talk">
                                  <span className="fa fa-eye" style={{paddingTop: '4px'}}> 28924 &nbsp;&nbsp;</span>  
                                  <span className="comment-count"> <i className="fa fa-comment" />&nbsp; 3 </span>
                                </div>
                                <i style={{marginBottom: '5px'}}>April, 12, 2016</i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="item-inner">
                        <div className="product-thumbnail">
                          <div className="icon-sale-label sale-left">Sale</div>
                          <div className="icon-new-label new-right">New</div>
                          <div className="pr-img-area"> <a title="Ipsums Dolors Untra" href="single_product.html">
                              <figure> <img className="first-img" src="images/products/mau1.jpg" alt="html template" /> <img className="hover-img" src="images/products/mau1.jpg" alt="html template" /></figure>
                            </a>
                            <button type="button" className="add-to-cart-mt"> <i className="fa fa-shopping-cart" /><span> Tìm hiểu
                                thêm</span> </button>
                          </div>
                          <div className="pr-info-area">
                            <div className="pr-button">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart" />
                                </a> </div>
                            </div>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Ipsums Dolors Untra" href="single_product.html">IELTS Listening: Dạng câu hỏi Flowcharts, Notes, Tables, Summaries And Forms </a> </div>
                            <div className="item-content">
                              <div className="rating">
                                <div className="view_talk">
                                  <span className="fa fa-eye" style={{paddingTop: '4px'}}> 28924 &nbsp;&nbsp;</span>  
                                  <span className="comment-count"> <i className="fa fa-comment" />&nbsp; 3 </span>
                                </div>
                                <i style={{marginBottom: '5px'}}>April, 12, 2016</i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-item">
                      <div className="item-inner">
                        <div className="product-thumbnail">
                          <div className="icon-sale-label sale-left">Sale</div>
                          <div className="icon-new-label new-right">New</div>
                          <div className="pr-img-area"> <a title="Ipsums Dolors Untra" href="single_product.html">
                              <figure> <img className="first-img" src="images/products/mau1.jpg" alt="html template" /> <img className="hover-img" src="images/products/mau1.jpg" alt="html template" /></figure>
                            </a>
                            <button type="button" className="add-to-cart-mt"> <i className="fa fa-shopping-cart" /><span> Tìm hiểu
                                thêm</span> </button>
                          </div>
                          <div className="pr-info-area">
                            <div className="pr-button">
                              <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart" />
                                </a> </div>
                            </div>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title"> <a title="Ipsums Dolors Untra" href="single_product.html">IELTS Listening: Dạng câu hỏi Flowcharts, Notes, Tables, Summaries And Forms </a> </div>
                            <div className="item-content">
                              <div className="rating">
                                <div className="view_talk">
                                  <span className="fa fa-eye" style={{paddingTop: '4px'}}> 28924 &nbsp;&nbsp;</span>  
                                  <span className="comment-count"> <i className="fa fa-comment" />&nbsp; 3 </span>
                                </div>
                                <i style={{marginBottom: '5px'}}>April, 12, 2016</i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                 
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* chia sẻ từ chúng tôi */}
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* Testimonials Box */}
              <div className="testimonials">
                <div className="slider-items-products">
                  <div id="testimonials-slider" className="product-flexslider hidden-buttons home-testimonials">
                    <div className="slider-items slider-width-col4 ">
                      <div className="holder">
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. </p>
                        <div className="thumb"> <img src="images/testimonials-img3.jpg" alt="testimonials img" /> </div>
                        <strong className="name">John Doe</strong> <strong className="designation">CEO, Company</strong>
                      </div>
                      <div className="holder">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                        <div className="thumb"> <img src="images/testimonials-img1.jpg" alt="testimonials img" /> </div>
                        <strong className="name">Vince Roy</strong> <strong className="designation">CEO, Newspaper</strong>
                      </div>
                      <div className="holder">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud. </p>
                        <div className="thumb"> <img src="images/testimonials-img2.jpg" alt="testimonials img" /> </div>
                        <strong className="name">John Doe</strong> <strong className="designation">CEO, ABC Softwear</strong>
                      </div>
                      <div className="holder">
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.</p>
                        <div className="thumb"> <img src="images/testimonials-img4.jpg" alt="testimonials img" /> </div>
                        <strong className="name">Vince Roy</strong> <strong className="designation">CEO, XYZ Softwear</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Testimonials Box */}
            {/* our clients Slider */}
            <div className="col-md-6">
              <div className="our-clients">
                <div className="slider-items-products">
                  <div id="our-clients-slider" className="product-flexslider hidden-buttons">
                    <div className="slider-items slider-width-col6">
                      {/* Item */}
                      <div className="item"> <a href="#"><img src="images/brand1.png" alt="Image" /></a> <a href="#"><img src="images/brand2.png" alt="Image" /></a> </div>
                      {/* End Item */}
                      {/* Item */}
                      <div className="item"> <a href="#"><img src="images/brand3.png" alt="Image" /></a> <a href="#"><img src="images/brand4.png" alt="Image" /></a> </div>
                      {/* End Item */}
                      {/* Item */}
                      <div className="item"> <a href="#"><img src="images/brand5.png" alt="Image" /></a> <a href="#"><img src="images/brand6.png" alt="Image" /></a> </div>
                      {/* End Item */}
                      {/* Item */}
                      <div className="item"> <a href="#"><img src="images/brand7.png" alt="Image" /></a> <a href="#"><img src="images/brand3.png" alt="Image" /></a> </div>
                      {/* End Item */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Latest news start */}
        <div className="container">
          <div id="latest-news" className="news">
            <div className="page-header">
              <h2>BÁO ĐỌC NHIỀU</h2>
            </div>
            <div className="slider-items-products">
              <div id="latest-news-slider" className="product-flexslider hidden-buttons">
                <div className="slider-items slider-width-col6">
                  {/* Item */}
                  <div className="item">
                    <div className="jtv-blog">
                      <div className="blog-img">
                        <a href="single_post.html"> <img className="primary-img" src="images/blog-img1.jpg" alt="html template" /></a>
                        <span className="moretag" />
                        <div className="icon-sale-label sale-left" style={{marginLeft: '10px'}}>NEW</div>
                      </div>
                      <div className="blog-content-jtv">
                        <h2><a href="single_post.html">Sed do eiusmod sit amet</a></h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                        <span className="blog-likes"><i className="fa fa-heart" /> 149 likes</span> <span className="blog-comments"><i className="fa fa-comment" /> 80 comments</span>
                        <div className="blog-action"> <span>Jan, 20, 2016</span> <a className="read-more" href="single_post.html">read more</a> </div>
                      </div>
                    </div>
                  </div>
                  {/* End Item */}
                  <div className="item">
                    <div className="jtv-blog">
                      <div className="blog-img"> <a href="single_post.html"><img className="primary-img" src="images/blog-img2.jpg" alt="html template" /></a> </div>
                      <div className="blog-content-jtv">
                        <h2><a href="single_post.html">Lorem ipsum dolor sit amet</a></h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        <span className="blog-likes"><i className="fa fa-heart" /> 89 likes</span> <span className="blog-comments"><i className="fa fa-comment" /> 10 comments</span>
                        <div className="blog-action"><span>May, 25, 2016</span> <a className="read-more" href="single_post.html">read more</a> </div>
                      </div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="item">
                    <div className="jtv-blog">
                      <div className="blog-img"> <a href="single_post.html"><img className="primary-img" src="images/blog-img3.jpg" alt="html template" /></a> </div>
                      <div className="blog-content-jtv">
                        <h2><a href="single_post.html">Integer scelerisque diam vitae</a></h2>
                        <p>Ut sit amet turpis. In est arcu, sollicitudin eu, vehicula venenatis. Maecenas eu enim in lorem
                        </p>
                        <span className="blog-likes"><i className="fa fa-heart" /> 125 likes</span> <span className="blog-comments"><i className="fa fa-comment" /> 30 comments</span>
                        <div className="blog-action"><span>April, 12, 2016</span> <a className="read-more" href="single_post.html">read more</a> </div>
                      </div>
                    </div>
                  </div>
                  {/* End Item */}
                  {/* Item */}
                  <div className="item">
                    <div className="jtv-blog">
                      <div className="blog-img"> <a href="single_post.html"> <img className="primary-img" src="images/blog-img1.jpg" alt="html template" /></a> <span className="moretag" /> </div>
                      <div className="blog-content-jtv">
                        <h2><a href="single_post.html">Sed do eiusmod sit amet</a></h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                        <span className="blog-likes"><i className="fa fa-heart" /> 149 likes</span> <span className="blog-comments"><i className="fa fa-comment" /> 80 comments</span>
                        <div className="blog-action"> <span>Jan, 20, 2016</span> <a className="read-more" href="single_post.html">read more</a> </div>
                      </div>
                    </div>
                  </div>
                  {/* End Item */}
                  {/* Item */}
                  <div className="item">
                    <div className="jtv-blog">
                      <div className="blog-img"> <a href="single_post.html"> <img className="primary-img" src="images/blog-img3.jpg" alt="html template" /></a> <span className="moretag" /> </div>
                      <div className="blog-content-jtv">
                        <h2><a href="single_post.html">Sed do eiusmod sit amet</a></h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
                        <span className="blog-likes"><i className="fa fa-heart" /> 149 likes</span> <span className="blog-comments"><i className="fa fa-comment" /> 80 comments</span>
                        <div className="blog-action"> <span>Jan, 20, 2016</span> <a className="read-more" href="single_post.html">read more</a> </div>
                      </div>
                    </div>
                  </div>
                  {/* End Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
       <br></br>


       
      </div>
      
        );
    }
}

export default HomePage;