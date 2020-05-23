import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

//custom thì dùng LInk còn ko thì dùng Navlink (class"active" hoạt động ở thẻ li mà cần thẻ a nằm trong li)
const menus = [
    {
        name: 'Khóa học',
        to: '/product-list',
        exact: false
    },
    {
        name: 'Liên hệ',
        to: '/product-list',
        exact: false
    },
    {
        name: 'Về MIELTS',
        to: '/product-list',
        exact: false
    },
    {
        name: 'BLOG',
        to: '/product-list',
        exact: false
    },


]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className="mt-root" className={`${active}`}>
                        <div className="mt-root-item">
                            <Link to={to}>
                                <div className="title title_font"><span className="title-text"> {label}</span></div>
                            </Link>
                        </div>

                    </li>
                )
            }} />
    )
}

{/* <Route path={to}
            exact={activeOnlyWhenExact} 
            children={({ match }) => {
          var active = match ? 'active' : '';
          return (
              <li className={`${active}`}>
                  <Link to={to} className="my-link">
                      {label}
                  </Link>
              </li>
          )
      }} /> */}


    //   <div className="navbar navbar-default">
    //             <a className="navbar-brand">Title</a>
    //             <ul className="nav navbar-nav">
    //                 {this.showMenus(menus)}
    //             </ul>
    //         </div>

class Menu extends Component {

    render() {
        return (
            <div className="mtmegamenu">
                          <ul>
                            <li className="mt-root demo_custom_link_cms">
                              <div className="mt-root-item"><a href="index.html">
                                  <div className="title title_font"><span className="title-text">Trang chủ</span></div>
                                </a></div>
                              <ul className="menu-items col-md-3 col-sm-4 col-xs-12">
                                <li className="menu-item depth-1">
                                  <div className="title"> <a href="index.html"><span>Home Version 1</span></a></div>
                                </li>
                                <li className="menu-item depth-1">
                                  <div className="title"> <a href="Version2/index.html"><span>Home Version 2</span></a></div>
                                </li>
                              </ul>
                            </li>
                            {this.showMenus(menus)}
                            <li className="mt-root">
                              <div className="mt-root-item">
                                <div className="title title_font"><span className="title-text">Bạn đọc gần đây</span></div>
                              </div>
                              <ul className="menu-items col-xs-12">
                                <li className="menu-item depth-1 product menucol-1-3 withimage">
                                  <div className="product-item">
                                    <div className="item-inner">
                                      <div className="product-thumbnail">
                                        <div className="icon-sale-label sale-left">Sale</div>
                                        <div className="pr-img-area"> <a title="Ipsums Dolors Untra" href="single_product.html">
                                            <figure> <img className="first-img" src="images/products/img06.jpg" alt="html template" />
                                              <img className="hover-img" src="images/products/img06.jpg" alt="html template" /></figure>
                                          </a>
                                          <button type="button" className="add-to-cart-mt"> <i className="fa fa-shopping-cart" /><span>
                                              Add to Cart</span> </button>
                                        </div>
                                        <div className="pr-info-area">
                                          <div className="pr-button">
                                            <div className="mt-button add_to_wishlist"> <a href="wishlist.html"> <i className="fa fa-heart" /> </a> </div>
                                            <div className="mt-button add_to_compare"> <a href="compare.html"> <i className="fa fa-signal" /> </a> </div>
                                            <div className="mt-button quick-view"> <a href="quick_view.html"> <i className="fa fa-search" /> </a> </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="item-info">
                                        <div className="info-inner">
                                          <div className="item-title"> <a title="Ipsums Dolors Untra" href="single_product.html">Ipsums
                                              Dolors Untra </a> </div>
                                          <div className="item-content">
                                            <div className="rating"> <i className="fa fa-star-o" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" /> <i className="fa fa-star-o" />
                                            </div>
                                            <div className="item-price">
                                              <div className="price-box"> <span className="regular-price"> <span className="price">$125.00</span> </span> </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                               </ul>
                            </li>
                          </ul>
                        </div>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                
              
              return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            });
        }
        return result;
    }

}

export default Menu;