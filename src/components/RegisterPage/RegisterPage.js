import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div id="page">
         {/* Home Slider Start */}
      <div className="slider">
        <div className="tp-banner-container clearfix">
          <div className="tp-banner">
            <ul>
              {/* SLIDE 1 */}
              <li data-transition="slidehorizontal" data-slotamount={5} data-masterspeed={700}>
                {/* MAIN IMAGE */}
                <img src="images/slider/slider-img1.jpg" alt="slidebg1" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" />
                {/* LAYERS */}
                {/* LAYER NR. 1 */}
                <div className="tp-caption very_big_white skewfromrightshort fadeout" data-x="center" data-y={100} data-speed={500} data-start={1200} data-easing="Circ.easeInOut" style={{fontSize: '70px', fontWeight: 800, color: '#fe0100'}}>Huge <span style={{color: '#000'}}>sale</span>
                </div>
                {/* LAYER NR. 2 */}
                <div className="tp-caption tp-caption medium_text skewfromrightshort fadeout" data-x="center" data-y={165} data-hoffset={0} data-voffset={-73} data-speed={500} data-start={1200} data-easing="Power4.easeOut" style={{fontSize: '20px', fontWeight: 500, color: '#337ab7'}}> Sale off 75% all products </div>
                {/* LAYER NR. 3 */}
                <div className="tp-caption customin tp-resizeme rs-parallaxlevel-0" data-x="center" data-y={210} data-hoffset={0} data-voffset={98} data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed={500} data-start={1500} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-linktoslide="next" style={{border: '2px solid #fed700', borderRadius: '50px', fontSize: '14px', backgroundColor: '#fed700', color: '#333', zIndex: 12, whiteSpace: 'nowrap', letterSpacing: '1px'}}>
                  <a href="#" className="largebtn slide1">Learn More</a> </div>
              </li>
              {/* SLIDE 2 */}
              <li data-transition="slidehorizontal" data-slotamount={5} data-masterspeed={700}>
                {/* MAIN IMAGE */}
                <img src="images/slider/slider-img2.jpg" alt="slidebg1" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" />
                {/* LAYERS */}
                {/* LAYER NR. 1 */}
                <div className="tp-caption white_heavy_60 customin ltl tp-resizeme" data-x={310} data-y={140} data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed={1200} data-start={700} data-easing="Power4.easeOut" data-splitin="chars" data-splitout="none" data-elementdelay="0.1" data-endelementdelay="0.1" data-endspeed={1000} data-endeasing="Power4.easeIn" style={{fontSize: '70px', fontWeight: 800, color: '#333'}}>GREAT LOOKS </div>
                {/* LAYER NR. 2 */}
                <div className="tp-caption black_thin_blackbg_30 customin ltl tp-resizeme" data-x={310} data-y={220} data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;" data-speed={1500} data-start={1000} data-easing="Power4.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-endspeed={1000} data-endeasing="Power4.easeIn" style={{zIndex: 3, whiteSpace: 'nowrap', color: '#34bcec', fontSize: '20px', fontWeight: 500}}>The perfect
                  synthesis of innovative thinking </div>
                {/* LAYER NR. 4 */}
                <div className="tp-caption lfb ltb start tp-resizeme" data-x={310} data-y={270} data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed={1500} data-start={1600} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-linktoslide="next" style={{zIndex: 12, whiteSpace: 'nowrap'}}><a href="#" className="largebtn solid">Get It Now!</a> </div>
              </li>
              {/* SLIDE 3 */}
              <li data-transition="slidehorizontal" data-slotamount={5} data-masterspeed={700}>
                {/* MAIN IMAGE */}
                <img src="images/slider/slider-img3.jpg" alt="slidebg3" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" />
                {/* LAYERS */}
                {/* LAYER NR. 1 */}
                <div className="tp-caption big_100_white lft start fadeout" data-x={310} data-y={120} data-speed={500} data-start={1200} data-easing="Circ.easeInOut" style={{fontSize: '70px', fontWeight: 800, color: '#fff'}}>
                  High</div>
                <div className="tp-caption big_100_white lft fadeout" data-x={310} data-y={180} data-speed={500} data-start={1200} data-easing="Circ.easeInOut" style={{fontSize: '50px', fontWeight: 800, color: '#fed700'}}>
                  Definition</div>
                {/* LAYER NR. 2 */}
                <div className="tp-caption tp-caption medium_text lfb fadeout" data-x={310} data-y={260} data-speed={500} data-start={1200} data-easing="Power4.easeOut" style={{zIndex: 3, whiteSpace: 'nowrap', color: '#34bcec', fontSize: '20px', fontWeight: 500}}>Best Camera For
                  You?</div>
                {/* LAYER NR. 3 */}
                <div className="tp-caption fade fadeout tp-resizeme" data-x={310} data-y={320} data-hoffset={-100} data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;" data-speed={1500} data-start={800} data-easing="Power3.easeInOut" data-splitin="none" data-splitout="none" data-elementdelay="0.01" data-endelementdelay="0.1" data-linktoslide="next" style={{zIndex: 12, whiteSpace: 'nowrap'}}><a href="#" className="largebtn solid">Get It Now!</a> </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
        
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