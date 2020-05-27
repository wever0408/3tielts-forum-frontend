import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div id="page">
          {/* Main Container */}
      <div className="main-container col1-layout">
        <div className="container">
          <div className="row">
            <div className="col-main">
            </div>
            <div className="product-overview-tab">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="product-tab-inner">
                      <ul id="product-detail-tab" className="nav nav-tabs product-tabs">
                        <li className="active"> <a href="#description" data-toggle="tab"> Câu hỏi </a> </li>
                        <li> <a href="#reviews" data-toggle="tab">Top câu hỏi</a> </li>
                        <li><a href="#product_tags" data-toggle="tab">Cá nhân</a></li>
                        <li> <a href="#custom_tabs" data-toggle="tab">Xếp hạng</a> </li>
                      </ul>
                      <div id="productTabContent" className="tab-content">
                        <div className="tab-pane fade in active" id="description">
                          <div className="std">
                            <div className="box-collateral box-tags">
                              <div className="tags">
                                <form id="addTagForm" action="#" method="get">
                                  <div className="form-add-tags">
                                    <div className="input-box"><label htmlFor="productTagName">Tìm câu hỏi:</label>
                                      <input className="input-text" name="productTagName" id="productTagName" type="text" />
                                      <button type="button" title="Add Tags" className="button add-tags"><i className="fa fa-search" aria-hidden="true" /> </button>
                                    </div>
                                    {/*input-box*/}
                                  </div>
                                </form>
                              </div>
                              {/* tìm thông tin */}
                              {/*tags*/}
                              <p className="note">Use spaces to separate tags. Use single quotes (') for phrases.</p>
                            </div>
                            <div className="block popular-tags-area ">
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
                            {/* Comment */}
                            <div className="single-box">
                              <h2 className>Comments</h2>
                              <div className="comment-list">
                                <ul>
                                  <div className="my-comment">
                                    <li>
                                      <div className="avartar"> <img src="images/avatar.png" alt="Avatar" />
                                        Admin
                                      </div>
                                      <div className="comment-body">
                                        <div className="comment-meta"> <span className="author"><a href="#">TIÊU ĐỀ</a></span> <span className="date">2015-04-01</span> </div>
                                        <div className="comment"> Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac
                                          turpis. Integer
                                          rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget,
                                          malesuada at, neque.
                                        </div>
                                        <div className="comment_like"><a href="#">Thích</a><span aria-hidden="true"> · </span>
                                          <a className="respone" href="javascript:;">Phản hồi</a><span aria-hidden="true"> ·
                                          </span>
                                          <span><i className="fas fa-thumbs-up" />&nbsp; 1</span> <span aria-hidden="true">
                                            · </span>
                                          <span className="comment-count"> <a href="javascript:;"> <i className="fa fa-comment-o" aria-hidden="true">&nbsp;</i> 5 </a></span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <ul className="my-sub-comment-group">
                                        <li>
                                          <div className="avartar"> <img src="images/avatar.png" alt="Avatar" /> </div>
                                          <div className="comment-body">
                                            <div className="comment-meta"> <span className="author"><a href="#">Admin</a></span>
                                              <span className="date">2015-04-01</span> </div>
                                            <div className="comment"> Aenean auctor wisi et urna. Aliquam erat volutpat. Duis
                                              ac turpis. Integer
                                              rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget,
                                              malesuada at, neque.
                                            </div>
                                            <div className="comment_like"><a href="#">Thích</a><span aria-hidden="true"> ·
                                              </span><a className="respone" href="javascript:;">Phản hồi</a><span aria-hidden="true"> ·
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
                          </div>
                        </div>
                        <div id="reviews" className="tab-pane fade">
                          <div className="single-box comment-box">
                            <h2>ĐẶT CÂU HỎI?</h2>
                            <div className="coment-form">
                              <p>Make sure you enter the () required information where indicated. HTML code is not allowed.</p>
                              <div className="row">
                                <div className="col-sm-12">
                                  <label htmlFor="website">Tiêu đề</label>
                                  <input id="website" type="text" className="form-control" />
                                </div>
                                <div className="col-sm-6">
                                  <label htmlFor="name">Loại</label>
                                  <select className="input form-control" name="name">
                                    <option selected="true" disabled="disabled">Chọn </option>
                                    <option value={1}>Apple Watch</option>
                                    <option value={6}>&nbsp;&nbsp;&nbsp;AP1 </option>
                                    <option value={7}>&nbsp;&nbsp;&nbsp;AP2 </option>
                                    <option value={2}>Phụ kiện</option>
                                    <option value={8}>&nbsp;&nbsp;&nbsp;PK1 </option>
                                    <option value={9}>&nbsp;&nbsp;&nbsp;PK2 </option>
                                    <option value={10}>&nbsp;&nbsp;&nbsp;PK3 </option>
                                    <option value={3}>iPhone</option>
                                    <option value={4}>iPad Pro</option>
                                    <option value={5}>Macbook Pro Retina</option>
                                    <option value={11}>Xiaomi</option>
                                    <option value={13}>&nbsp;&nbsp;&nbsp;Điện thoại </option>
                                    <option value={17}>&nbsp;&nbsp;&nbsp;Xiaomi khác </option>
                                  </select>
                                </div>
                                <div className="col-sm-12">
                                  <label htmlFor="message">Message</label>
                                  <textarea name="message" id="message" rows={8} className="form-control" defaultValue={""} />
                                </div>
                              </div>
                              <button className="button"><span>Post Comment</span></button>
                            </div>
                          </div>
                          <div className="single-box">
                            <h2 className>Comments</h2>
                            <div className="comment-list">
                              <ul>
                                <div className="my-comment">
                                  <li>
                                    <div className="avartar"> <img src="images/avatar.png" alt="Avatar" /> </div>
                                    <div className="comment-body">
                                      <div className="comment-meta"> <span className="author"><a href="#">Admin</a></span> <span className="date">2015-04-01</span> </div>
                                      <div className="comment"> Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac
                                        turpis. Integer
                                        rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget,
                                        malesuada at, neque.
                                      </div>
                                      <div className="comment_like"><a href="#">Thích</a><span aria-hidden="true"> · </span>
                                        <a className="respone" href="javascript:;">Phản hồi</a><span aria-hidden="true"> ·
                                        </span>
                                        <span><i className="fas fa-thumbs-up" aria-hidden="true" />&nbsp; 1</span> <span aria-hidden="true">
                                          · </span>
                                        <span className="comment-count"> <a href="javascript:;"> <i className="fa fa-comment-o" aria-hidden="true">&nbsp;</i> 5 </a></span>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <ul className="my-sub-comment-group" style={{display: 'none'}}>
                                      <li>
                                        <div className="avartar"> <img src="images/avatar.png" alt="Avatar" /> </div>
                                        <div className="comment-body">
                                          <div className="comment-meta"> <span className="author"><a href="#">Admin</a></span>
                                            <span className="date">2015-04-01</span> </div>
                                          <div className="comment"> Aenean auctor wisi et urna. Aliquam erat volutpat. Duis
                                            ac turpis. Integer
                                            rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget,
                                            malesuada at, neque.
                                          </div>
                                          <div className="comment_like"><a href="#">Thích</a><span aria-hidden="true"> ·
                                            </span><a className="respone" href="javascript:;">Phản hồi</a><span aria-hidden="true"> ·
                                            </span><span><i className="fas fa-thumbs-up" aria-hidden="true" />&nbsp; 1</span>
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
                        </div>
                        <div className="tab-pane fade" id="product_tags">
                          <div className="single-box">
                            <h2 className>Comments</h2>
                            <div className="comment-list">
                              <ul>
                                <div className="my-comment">
                                  <li>
                                    <div className="avartar"> <img src="images/avatar.png" alt="Avatar" /> </div>
                                    <div className="comment-body">
                                      <div className="comment-meta"> <span className="author"><a href="#">Admin</a></span> <span className="date">2015-04-01</span> </div>
                                      <div className="comment"> Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac
                                        turpis. Integer
                                        rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget,
                                        malesuada at, neque.
                                      </div>
                                      <div className="comment_like"><a href="#">Thích</a><span aria-hidden="true"> · </span>
                                        <a className="respone" href="javascript:;">Phản hồi</a><span aria-hidden="true"> ·
                                        </span>
                                        <span><i className="fas fa-thumbs-up" aria-hidden="true" />&nbsp; 1</span> <span aria-hidden="true">
                                          · </span>
                                        <span className="comment-count"> <a href="javascript:;"> <i className="fa fa-comment-o" aria-hidden="true">&nbsp;</i> 5 </a></span>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <ul className="my-sub-comment-group" style={{display: 'none'}}>
                                      <li>
                                        <div className="avartar"> <img src="images/avatar.png" alt="Avatar" /> </div>
                                        <div className="comment-body">
                                          <div className="comment-meta"> <span className="author"><a href="#">Admin</a></span>
                                            <span className="date">2015-04-01</span> </div>
                                          <div className="comment"> Aenean auctor wisi et urna. Aliquam erat volutpat. Duis
                                            ac turpis. Integer
                                            rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget,
                                            malesuada at, neque.
                                          </div>
                                          <div className="comment_like"><a href="#">Thích</a><span aria-hidden="true"> ·
                                            </span><a className="respone" href="javascript:;">Phản hồi</a><span aria-hidden="true"> ·
                                            </span><span><i className="fas fa-thumbs-up" aria-hidden="true" />&nbsp; 1</span>
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
                        </div>
                        <div className="tab-pane fade" id="custom_tabs">
                          <div className="product-tabs-content-inner clearfix">
                            <p><strong>Lorem Ipsum</strong><span>&nbsp;is
                                simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when
                                an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem
                                Ipsum.</span></p>
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
      {/* Main Container End */}
      </div>
        );
    }
}

export default HomePage;