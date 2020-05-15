import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

//custom thì dùng LInk còn ko thì dùng Navlink (class"active" hoạt động ở thẻ li mà cần thẻ a nằm trong li)
const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name : 'Quản Lý Sản Phẩm',
        to : '/product-list',
        exact : false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
      <Route path={to}
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
      }} />
  )
}

class Menu extends Component {

    render() {
        return (
            <div className="navbar navbar-default">
            <a className="navbar-brand">Title</a>
            <ul className="nav navbar-nav">
            {this.showMenus(menus)}
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