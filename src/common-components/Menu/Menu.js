import React, { Component } from "react";
import {
  HashRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
// import { connect } from 'react-redux';

import "./Menu.scss";

class Menu extends Component {
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
                  <li>
                    {" "}
                    <a className="waves-effect waves-dark" href="index.html">
                      <i className="icon-speedometer" />
                      <span className="hide-menu">Teacher</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
      </div>
    );
  }
}

// export default withRouter(Home);
export default Menu;