import React from 'react';
import HomePage from './../components/HomePage/HomePage';
import NotFound from './../components/NotFound/NotFound';
import ArticlePage from './../components/ArticlePage/ArticlePage';
import ForumPage from './../components/ForumPage/ForumPage';
import GridPage from './../components/GridPage/GridPage';
import AccountInfoPage from './../components/AccountInfoPage/AccountInfoPage';
import RegisterPage from './../components/RegisterPage/RegisterPage';

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
        path: '/account',
        exact: false,
        main: () => <AccountInfoPage />
    },
    {
        path: '/login',
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