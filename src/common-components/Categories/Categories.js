import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import ProductList from './../../common-components/ProductList/ProductList';
import ProductItem from './../../common-components/ProductItem/ProductItem';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../redux/actions/index';



class Categories extends Component {


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         products: []
    //     }
    // }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        this.props.fetchAllProducts();
        // callApi('products', 'GET', null).then(res => {
        //     console.log(res);
        //     this.setState({
        //         products: res.data
        //     })
        // })
    }


    render() {
        // var { products } = this.state;
         var { products } = this.props;
        //var products = [];


        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-primary mb-5">
                    <i className="glyphicon glyphicon-plus"></i> Thêm Sản Phẩm
                        </Link>

                <ProductList>
                    {this.showProducts(products)}
                </ProductList>


            </div>
        );
    }
    showProducts(products) {
        var result = null;
        var { onDeleteProduct } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    product={product}
                    key={index}
                    index={index}
                    onDeleteProduct={onDeleteProduct}
                />
            });
        }
        return result;
    }

}


const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps
)(Categories);

// export default Categories;