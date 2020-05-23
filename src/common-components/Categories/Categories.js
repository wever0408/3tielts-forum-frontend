import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import ProductList from './../../common-components/ProductList/ProductList';
import ProductItem from './../../common-components/ProductItem/ProductItem';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../redux/actions/index';



class Categories extends Component {


    constructor(props) {
        super(props);
        this.state = {
            categories: [{
                cap1: {
                    id: 1,
                    cate_name: "Camera",
                    icon: "computer"
                },
                cap2: [{ id: 1, cate_name: "Camera" },
                { id: 1, cate_name: "Camera" }]
            },
            {
                cap1: {
                    id: 1,
                    cate_name: "Computer",
                    icon: "computer"
                },
                cap2: [{ id: 1, cate_name: "Camera" },
                { id: 1, cate_name: "Camera" }]
            }
            ]
        }
    }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        // this.props.fetchAllProducts();
        
        // callApi('products', 'GET', null).then(res => {
        //     console.log(res);
        //     this.setState({
        //         products: res.data
        //     })
        // })
    }


    render() {
        var { categories } = this.state;
        //  var { products } = this.props;
        //var products = [];


        return (
            <div className="mega-container visible-lg visible-md visible-sm">
            <div className="navleft-container">
              <div className="mega-menu-title">
                <h3>DANH MỤC TÀI LIỆU</h3>
              </div>
              <div className="mega-menu-category">
                <ul className="nav">
                  {this.showCategories(categories)}             
                                   </ul>
              </div>
            </div>
          </div>
        );
    }

   showCategories2 = (cats) => {
    var result = null;
    if (cats.length > 0) {
        result = cats.map((cat,index) => {
           return ( <div>
            <li key={index}><a href="shop_grid.html"><span>Envent Stereo</span></a></li>
            </div>)
        })
        return result
    }
   }

    showCategories = (categories) => {
        var result = null;
        if (categories.length > 0) {
            result = categories.map((category, index) => {
                if(category.cap2)
                {
                   return ( <li key={index}> <a href="shop_grid.html"><i className="icon fa fa-headphones fa-fw" /> Headphones</a>
                              <div className="wrap-popup column1">
                                <div className="popup">
                                  <ul className="nav">
                               
                                {this.showCategories2(category.cap2)}
                                  </ul>
                                </div>
                              </div>
                            </li>
                   )
                }
                else{
                return (
                    <li> <a href="shop_grid.html"><i className="icon fa fa-headphones fa-fw" /> Headphones</a>
                  </li>
                )
                }
            });
        }
        return result;
    }

}


// const mapStateToProps = state => {
//     return {
//         products: state.products
//     }
// }

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         fetchAllProducts: () => {
//             dispatch(actFetchProductsRequest());
//         },
//         onDeleteProduct: (id) => {
//             dispatch(actDeleteProductRequest(id));
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps
// )(Categories);

export default Categories;