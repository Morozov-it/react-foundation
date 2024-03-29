import { lazy } from 'react';

const Login = lazy(() => import('../pages/Login'));
const Main = lazy(() => import('../pages/Main'));
const NotFound = lazy(() => import('../pages/NotFound'));
const ContextPosts = lazy(() => import('../pages/ContextPosts'));
const ServerPosts = lazy(() => import('../pages/ServerPosts'));
const PostIdPage = lazy(() => import('../pages/PostIdPage'));

export const privateRoutes = [
    { id: 0, path: "/login", element: <Login /> },
    { id: 1, path: "/", element: <Main /> },
    { id: 2, path: "/context", element: <ContextPosts />},
    { id: 3, path: "/server", element: <ServerPosts />},
    { id: 4, path: "/server/:id", element: <PostIdPage />},
    { id: 5, path: "*", element: <NotFound /> },
]

export const publicRoutes = [
    { id: 0, path: "/login", element: <Login /> },
    { id: 1, path: "/", element: <Main /> },
    { id: 2, path: "/context", element: <Login />},
    { id: 3, path: "/server", element: <Login />},
]
