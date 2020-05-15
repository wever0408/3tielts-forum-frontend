import React from 'react';
import HomePage from './../components/HomePage/HomePage';
import NotFound from './../components/NotFound/NotFound';
import ProductListPage from './../components/ProductListPage/ProductListPage';
import ProductActionPage from './../components/ProductActionPage/ProductActionPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({ location, history }) => <ProductActionPage location={location} history={history} />
    },
    

    {
        path: '/product/:id/edit',
        exact: false,
        main: ({ match, history }) => <ProductActionPage match={match} history={history} />
    },
    //muốhn lấy :id thì cần match
    
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;