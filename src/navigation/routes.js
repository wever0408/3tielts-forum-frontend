import React from 'react';
import HomePage from './../components/HomePage/HomePage';
import NotFound from './../components/NotFound/NotFound';
import ArticlePage from './../components/ArticlePage/ArticlePage';
import ForumPage from './../components/ForumPage/ForumPage';
import GridPage from './../components/GridPage/GridPage';

import RegisterPage from './../components/RegisterPage/RegisterPage';
import AccWishlistPage from './../components/AccWishlistPage/AccWishlistPage';
import AccMocktestListPage from './../components//AccMockTestListPage/MockTestListPage';
import AccountInfoPage from './../components/AccountInfoPage/AccountInfoPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },

    {
        path: '/grid',
        exact: true,
        main: () => <GridPage />
    },

    {
        path: '/article',
        exact: false,
        main: () => <ArticlePage />
    },
   
    {
        path: '/forum',
        exact: false,
        main: () => <ForumPage />
    },
    {
        path: '/account/info',
        exact: false,
        main: () => <AccountInfoPage />
    },
    {
        path: '/account/wishlist',
        exact: false,
        main: () => <AccWishlistPage />
    },
    {
        path: '/account/mocklist',
        exact: false,
        main: () => <AccMocktestListPage />
    },
    {
        path: '/login/test',
        exact: false,
        main: () => <RegisterPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;