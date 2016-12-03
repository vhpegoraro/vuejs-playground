import NotFound from './../pages/NotFound.vue';
import Login from './../pages/Login.vue';
import Layout from './../pages/Layout.vue';
import Home from './../pages/Home.vue';

import UsersRouter from './../pages/users/users-router';
import ProductsRouter from './../pages/products/products-router';

var catchNotFound = { path: '*', redirect: '/notfound' };
var notFoundRoute = { path: '/notfound', component: NotFound };
var loginRoute = { path: '/login', component: Login };
var layoutChildRoutes = [{ path: '', component: Home }]; 

UsersRouter.addRoutes(layoutChildRoutes);
ProductsRouter.addRoutes(layoutChildRoutes);

var layoutRoutes = { path: '', component: Layout, children: layoutChildRoutes };

export const routes = [loginRoute, layoutRoutes, notFoundRoute, catchNotFound];