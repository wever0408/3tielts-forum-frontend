import React from 'react';
import HomePage from './../components/HomePage/HomePage';
import NotFound from './../components/NotFound/NotFound';
import ArticlePage from './../components/ArticlePage/ArticlePage';
import ForumPage from './../components/ForumPage/ForumPage';
import GridPage from './../components/GridPage/GridPage';

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
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;