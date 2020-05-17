import React, { Component } from "react";
import {
  HashRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
// import { connect } from 'react-redux';

import "./Home.scss";

class Home extends Component {
  render() {
    return (
      // <div className="Home">
      //     <div className="Home__table">
      //         <span> TABLE </span>
      //     </div>
      // </div>
      <div>
        {/* <div className="preloader">
        <div className="loader">
          <div className="loader__figure" />
          <p className="loader__label">Elite admin</p>
        </div>
      </div> */}
        <div id="main-wrapper">
          <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
              <div className="navbar-header">
                <a className="navbar-brand" href="index.html">
                  {/* Logo icon */}
                  <b>
                    <img
                      src="images/logo-icon.png"
                      alt="homepage"
                      className="dark-logo"
                    />
                    <img
                      src="images/logo-light-icon.png"
                      alt="homepage"
                      className="light-logo"
                    />
                  </b>
                  <span className="hidden-xs">
                    <span className="font-bold">elite</span>university
                  </span>
                </a>
              </div>
              <div className="navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark"
                      href="javascript:void(0)"
                    >
                      <i className="ti-menu" />
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark"
                      href="javascript:void(0)"
                    >
                      <i className="icon-menu" />
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    <form className="app-search d-none d-md-block d-lg-block">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search & enter"
                      />
                    </form>
                  </li>
                </ul>
                <ul className="navbar-nav my-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle waves-effect waves-dark"
                      href
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="ti-email" />
                      <div className="notify">
                        {" "}
                        <span className="heartbit" /> <span className="point" />{" "}
                      </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">
                      <ul>
                        <li>
                          <div className="drop-title">Notifications</div>
                        </li>
                        <li>
                          <div className="message-center">
                            <a href="javascript:void(0)">
                              <div className="btn btn-danger btn-circle">
                                <i className="fa fa-link" />
                              </div>
                              <div className="mail-contnet">
                                <h5>Luanch Admin</h5>{" "}
                                <span className="mail-desc">
                                  Just see the my new admin!
                                </span>{" "}
                                <span className="time">9:30 AM</span>
                              </div>
                            </a>
                            <a href="javascript:void(0)">
                              <div className="btn btn-success btn-circle">
                                <i className="ti-calendar" />
                              </div>
                              <div className="mail-contnet">
                                <h5>Event today</h5>{" "}
                                <span className="mail-desc">
                                  Just a reminder that you have event
                                </span>{" "}
                                <span className="time">9:10 AM</span>
                              </div>
                            </a>
                            <a href="javascript:void(0)">
                              <div className="btn btn-info btn-circle">
                                <i className="ti-settings" />
                              </div>
                              <div className="mail-contnet">
                                <h5>Settings</h5>{" "}
                                <span className="mail-desc">
                                  You can customize this template as you want
                                </span>{" "}
                                <span className="time">9:08 AM</span>
                              </div>
                            </a>
                            <a href="javascript:void(0)">
                              <div className="btn btn-primary btn-circle">
                                <i className="ti-user" />
                              </div>
                              <div className="mail-contnet">
                                <h5>Pavan kumar</h5>{" "}
                                <span className="mail-desc">
                                  Just see the my admin!
                                </span>{" "}
                                <span className="time">9:02 AM</span>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <a
                            className="nav-link text-center link"
                            href="javascript:void(0);"
                          >
                            {" "}
                            <strong>Check all notifications</strong>{" "}
                            <i className="fa fa-angle-right" />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle waves-effect waves-dark"
                      href
                      id={2}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="icon-note" />
                      <div className="notify">
                        {" "}
                        <span className="heartbit" /> <span className="point" />{" "}
                      </div>
                    </a>
                    <div
                      className="dropdown-menu mailbox dropdown-menu-right animated bounceInDown"
                      aria-labelledby={2}
                    >
                      <ul>
                        <li>
                          <div className="drop-title">
                            You have 4 new messages
                          </div>
                        </li>
                        <li>
                          <div className="message-center">
                            <a href="javascript:void(0)">
                              <div className="user-img">
                                {" "}
                                <img
                                  src="images/users/1.jpg"
                                  alt="user"
                                  className="img-circle"
                                />{" "}
                                <span className="profile-status online pull-right" />{" "}
                              </div>
                              <div className="mail-contnet">
                                <h5>Pavan kumar</h5>{" "}
                                <span className="mail-desc">
                                  Just see the my admin!
                                </span>{" "}
                                <span className="time">9:30 AM</span>
                              </div>
                            </a>
                            <a href="javascript:void(0)">
                              <div className="user-img">
                                {" "}
                                <img
                                  src="images/users/2.jpg"
                                  alt="user"
                                  className="img-circle"
                                />{" "}
                                <span className="profile-status busy pull-right" />{" "}
                              </div>
                              <div className="mail-contnet">
                                <h5>Sonu Nigam</h5>{" "}
                                <span className="mail-desc">
                                  I've sung a song! See you at
                                </span>{" "}
                                <span className="time">9:10 AM</span>
                              </div>
                            </a>
                            <a href="javascript:void(0)">
                              <div className="user-img">
                                {" "}
                                <img
                                  src="../assets/images/users/3.jpg"
                                  alt="user"
                                  className="img-circle"
                                />{" "}
                                <span className="profile-status away pull-right" />{" "}
                              </div>
                              <div className="mail-contnet">
                                <h5>Arijit Sinh</h5>{" "}
                                <span className="mail-desc">
                                  I am a singer!
                                </span>
                                <span className="time">9:08 AM</span>
                              </div>
                            </a>
                            <a href="javascript:void(0)">
                              <div className="user-img">
                                {" "}
                                <img
                                  src="images/users/4.jpg"
                                  alt="user"
                                  className="img-circle"
                                />{" "}
                                <span className="profile-status offline pull-right" />{" "}
                              </div>
                              <div className="mail-contnet">
                                <h5>Pavan kumar</h5>{" "}
                                <span className="mail-desc">
                                  Just see the my admin!
                                </span>{" "}
                                <span className="time">9:02 AM</span>
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <a
                            className="nav-link text-center link"
                            href="javascript:void(0);"
                          >
                            {" "}
                            <strong>See all e-Mails</strong>{" "}
                            <i className="fa fa-angle-right" />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item dropdown mega-dropdown">
                    {" "}
                    <a
                      className="nav-link dropdown-toggle waves-effect waves-dark"
                      href
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ti-layout-width-default" />
                    </a>
                    <div className="dropdown-menu animated bounceInDown">
                      <ul className="mega-dropdown-menu row">
                        <li className="col-lg-3 col-xlg-2 m-b-30">
                          <h4 className="m-b-20">CAROUSEL</h4>
                          <div
                            id="carouselExampleControls"
                            className="carousel slide"
                            data-ride="carousel"
                          >
                            <div className="carousel-inner" role="listbox">
                              <div className="carousel-item active">
                                <div className="container">
                                  {" "}
                                  <img
                                    className="d-block img-fluid"
                                    src="images/big/img1.jpg"
                                    alt="First slide"
                                  />
                                </div>
                              </div>
                              <div className="carousel-item">
                                <div className="container">
                                  <img
                                    className="d-block img-fluid"
                                    src="images/big/img2.jpg"
                                    alt="Second slide"
                                  />
                                </div>
                              </div>
                              <div className="carousel-item">
                                <div className="container">
                                  <img
                                    className="d-block img-fluid"
                                    src="images/big/img3.jpg"
                                    alt="Third slide"
                                  />
                                </div>
                              </div>
                            </div>
                            <a
                              className="carousel-control-prev"
                              href="#carouselExampleControls"
                              role="button"
                              data-slide="prev"
                            >
                              {" "}
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              />{" "}
                              <span className="sr-only">Previous</span>{" "}
                            </a>
                            <a
                              className="carousel-control-next"
                              href="#carouselExampleControls"
                              role="button"
                              data-slide="next"
                            >
                              {" "}
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              />{" "}
                              <span className="sr-only">Next</span>{" "}
                            </a>
                          </div>
                        </li>
                        <li className="col-lg-3 m-b-30">
                          <h4 className="m-b-20">ACCORDION</h4>
                          <div className="accordion" id="accordionExample">
                            <div className="card m-b-0">
                              <div
                                className="card-header bg-white p-0"
                                id="headingOne"
                              >
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                  >
                                    Collapsible Group Item #1
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseOne"
                                className="collapse show"
                                aria-labelledby="headingOne"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high.
                                </div>
                              </div>
                            </div>
                            <div className="card m-b-0">
                              <div
                                className="card-header bg-white p-0"
                                id="headingTwo"
                              >
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                  >
                                    Collapsible Group Item #2
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseTwo"
                                className="collapse"
                                aria-labelledby="headingTwo"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high.
                                </div>
                              </div>
                            </div>
                            <div className="card m-b-0">
                              <div
                                className="card-header bg-white p-0"
                                id="headingThree"
                              >
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                  >
                                    Collapsible Group Item #3
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseThree"
                                className="collapse"
                                aria-labelledby="headingThree"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high.
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="col-lg-3  m-b-30">
                          <h4 className="m-b-20">CONTACT US</h4>
                          <form>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputname1"
                                placeholder="Enter Name"
                              />{" "}
                            </div>
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                              />
                            </div>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                id="exampleTextarea"
                                rows={3}
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                            <button type="submit" className="btn btn-info">
                              Submit
                            </button>
                          </form>
                        </li>
                        <li className="col-lg-3 col-xlg-4 m-b-30">
                          <h4 className="m-b-20">List style</h4>
                          <ul className="list-style-none">
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-check text-success" />
                                You can give link
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-check text-success" />
                                Give link
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-check text-success" />
                                Another Give link
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-check text-success" />
                                Forth link
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-check text-success" />
                                Another fifth link
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item dropdown u-pro">
                    <a
                      className="nav-link dropdown-toggle waves-effect waves-dark profile-pic"
                      href
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src="images/users/1.jpg"
                        alt="user"
                        className
                      />{" "}
                      <span className="hidden-md-down">
                        Mark &nbsp;
                        <i className="fa fa-angle-down" />
                      </span>{" "}
                    </a>
                    <div className="dropdown-menu dropdown-menu-right animated flipInY">
                      <a href="javascript:void(0)" className="dropdown-item">
                        <i className="ti-user" /> My Profile
                      </a>
                      <a href="javascript:void(0)" className="dropdown-item">
                        <i className="ti-wallet" /> My Balance
                      </a>
                      <a href="javascript:void(0)" className="dropdown-item">
                        <i className="ti-email" /> Inbox
                      </a>
                      <div className="dropdown-divider" />
                      <a href="javascript:void(0)" className="dropdown-item">
                        <i className="ti-settings" /> Account Setting
                      </a>
                      <div className="dropdown-divider" />
                      <a href="pages-login.html" className="dropdown-item">
                        <i className="fa fa-power-off" />
                        Logout
                      </a>
                    </div>
                  </li>
                  <li className="nav-item right-side-toggle">
                    {" "}
                    <a
                      className="nav-link  waves-effect waves-light"
                      href="javascript:void(0)"
                    >
                      <i className="ti-settings" />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <aside className="left-sidebar">
            <div className="scroll-sidebar">
              <nav className="sidebar-nav">
                <ul id="sidebarnav">
                  <li className="user-pro">
                    {" "}
                    <a
                      className="has-arrow waves-effect waves-dark"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <img
                        src="images/users/1.jpg"
                        alt="user-img"
                        className="img-circle"
                      />
                      <span className="hide-menu">Prof. Mark</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="ti-user" /> My Profile
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="ti-wallet" /> My Balance
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="ti-email" /> Inbox
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="ti-settings" /> Account Setting
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fa fa-power-off" /> Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-small-cap">--- PERSONAL</li>
                  <li>
                    {" "}
                    <a className="waves-effect waves-dark" href="index.html">
                      <i className="icon-speedometer" />
                      <span className="hide-menu">Dashboard</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
          <div className="page-wrapper">
            <div className="container-fluid">
              <div className="row page-titles">
                <div className="col-md-5 align-self-center">
                  <h4 className="text-themecolor">Widget Data</h4>
                </div>
                <div className="col-md-7 align-self-center text-right">
                  <div className="d-flex justify-content-end align-items-center">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="javascript:void(0)">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Widget Data</li>
                    </ol>
                    <button
                      type="button"
                      className="btn btn-info d-none d-lg-block m-l-15"
                      data-target="#add-class"
                      data-toggle="modal"
                    >
                      <i className="fa fa-plus-circle" /> Create New
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Tabel name</h4>
                      <a
                        type="button"
                        className="btn waves-effect waves-light block btn-primary m-l-5"
                        data-toggle="collapse"
                        data-target="#search-form"
                        aria-expanded="false"
                      >
                        <i
                          className="fa fa-search-plus"
                          style={{ fontSize: "20px", verticalAlign: "middle" }}
                        />
                      </a>
                      <div
                        id="search-form"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree3"
                      >
                        <div className="card">
                          <form action="#">
                            <div className="form-body">
                              <div className="card-body">
                                <div className="row pt-3">
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="control-label">
                                        Loại lớp
                                      </label>
                                      <select className="form-control custom-select">
                                        <option value>Male</option>
                                        <option value>Female</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="control-label">
                                        Tên lớp
                                      </label>
                                      <input
                                        type="text"
                                        id="firstName"
                                        className="form-control"
                                        placeholder="John doe"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="control-label">
                                        Tình trạng
                                      </label>
                                      <select className="form-control custom-select">
                                        <option value>--- Tất cả ---</option>
                                        <option value>Kết thúc</option>
                                        <option value>Đang diễn ra</option>
                                        <option value>Đã kết thúc</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      <label className="control-label" />
                                      <button
                                        type="submit"
                                        className="btn btn-success form-control"
                                        style={{ marginTop: "7px" }}
                                      >
                                        {" "}
                                        <i className="fa fa-search-plus" />
                                        Search
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <div
                          id="add-class"
                          className="modal fade in"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="myModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title" id="myModalLabel">
                                  Add New Class
                                </h4>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-hidden="true"
                                >
                                  ×
                                </button>
                              </div>
                              <div className="modal-body">
                                <from className="form-horizontal form-material">
                                  <div className="form-group">
                                    <div className="col-md-12 m-b-20">
                                      <div className="form-group">
                                        <label className="control-label">
                                          Chọn loại lớp
                                        </label>
                                        <select className="form-control custom-select">
                                          <option value>Male</option>
                                          <option value>Female</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-12 m-b-20">
                                      <div className="form-group">
                                        <label className="control-label">
                                          Tên lớp lớp
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-12 m-b-20">
                                      <div className="form-group">
                                        <label>Mô tả</label>
                                        <textarea
                                          type="text"
                                          rows={4}
                                          className="form-control"
                                          placeholder="mô tả"
                                          defaultValue={""}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </from>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-info waves-effect"
                                  data-dismiss="modal"
                                >
                                  Save
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-default waves-effect"
                                  data-dismiss="modal"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <table
                          id="demo-foo-addrow"
                          className="table m-t-30 table-hover no-wrap contact-list"
                          data-paging="true"
                          data-paging-size={10}
                        >
                          <thead>
                            <tr>
                              <th>ID #</th>
                              <th>Tên lớp</th>
                              <th>Loại lớp</th>
                              <th>Mô tả</th>
                              <th>Học viên</th>
                              <th>Giảng viên</th>
                              <th>Trợ giảng</th>
                              <th>Đánh giá</th>
                              <th>Tình trạng</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1011</td>
                              <td>Nghe cho người mới bắt đầu</td>
                              <td>Luyện nghe</td>
                              <td>Đây là mô tả</td>
                              <td>4</td>
                              <td>Lê Thị Thúy Hạnh, Hồ Ngọc Trâm</td>
                              <td>Lê Nhật Kha, Trương Nhật Hồng</td>
                              <td>Tốt</td>
                              <td>Đang diễn ra</td>
                              <td>
                                <button
                                  id="edit"
                                  className="btn btn-info"
                                  data-target="#add-class"
                                  data-toggle="modal"
                                >
                                  <i className /> Edit
                                </button>
                                <button id="remove" className="btn btn-warning">
                                  <i className="ti-trash" /> Hủy lớp
                                </button>
                                <button id="remove" className="btn btn-danger">
                                  <i className="ti-trash" /> Delete
                                </button>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colSpan={6}>
                                <div className="text-right">
                                  <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-end">
                                      <li className="page-item disabled">
                                        <a
                                          className="page-link"
                                          href="#"
                                          tabIndex={-1}
                                        >
                                          Previous
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          1
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          2
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          3
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          Next
                                        </a>
                                      </li>
                                    </ul>
                                  </nav>
                                </div>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-sidebar">
                <div className="slimscrollright">
                  <div className="rpanel-title">
                    {" "}
                    Service Panel{" "}
                    <span>
                      <i className="ti-close right-side-toggle" />
                    </span>
                  </div>
                  <div className="r-panel-body">
                    <ul id="themecolors" className="m-t-20">
                      <li>
                        <b>With Light sidebar</b>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-skin="skin-default"
                          className="default-theme"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-skin="skin-green"
                          className="green-theme"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-skin="skin-red"
                          className="red-theme"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-skin="skin-blue"
                          className="blue-theme working"
                        >
                          4
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-skin="skin-purple"
                          className="purple-theme"
                        >
                          5
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-skin="skin-megna"
                          className="megna-theme"
                        >
                          6
                        </a>
                      </li>
                      <li className="d-block m-t-30">
                        <b>With Dark sidebar</b>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-skin="skin-default-dark"
                          className="default-dark-theme "
                        >
                          7
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-skin="skin-green-dark"
                          className="green-dark-theme"
                        >
                          8
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-skin="skin-red-dark"
                          className="red-dark-theme"
                        >
                          9
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-skin="skin-blue-dark"
                          className="blue-dark-theme"
                        >
                          10
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-skin="skin-purple-dark"
                          className="purple-dark-theme"
                        >
                          11
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-skin="skin-megna-dark"
                          className="megna-dark-theme "
                        >
                          12
                        </a>
                      </li>
                    </ul>
                    <ul className="m-t-20 chatonline">
                      <li>
                        <b>Chat option</b>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="images/users/1.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            Varun Dhavan{" "}
                            <small className="text-success">online</small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="images/users/2.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            Genelia Deshmukh{" "}
                            <small className="text-warning">Away</small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="images/users/3.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            Ritesh Deshmukh{" "}
                            <small className="text-danger">Busy</small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="images/users/4.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            Arijit Sinh{" "}
                            <small className="text-muted">Offline</small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="images/users/5.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            Govinda Star{" "}
                            <small className="text-success">online</small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="images/users/6.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            John Abraham
                            <small className="text-success">online</small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="images/users/7.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            Hritik Roshan
                            <small className="text-success">online</small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="images/users/8.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            Pwandeep rajan{" "}
                            <small className="text-success">online</small>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer"></footer>
        </div>
      </div>
    );
  }
}

// export default withRouter(Home);
export default Home;
