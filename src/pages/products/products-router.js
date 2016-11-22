import ProductsIndex from './ProductsIndex.vue';
import ProductCreate from './ProductCreate.vue';

export default class ProductsRouter {

    static addRoutes(appRoutes) {

        appRoutes.push({ path: 'products', component: ProductsIndex });
        appRoutes.push({ path: 'products/create', component: ProductCreate });
    }
}