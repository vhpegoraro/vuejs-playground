const ProductsIndex = resolve => {
  require.ensure(['./ProductsIndex.vue'], () => {
    resolve(require('./ProductsIndex.vue'))
  }, 'products');
}

const ProductCreate = resolve => {
  require.ensure(['./ProductCreate.vue'], () => {
    resolve(require('./ProductCreate.vue'))
  }, 'products');
}

export default class ProductsRouter {

    static addRoutes(appRoutes) {

        appRoutes.push({ path: 'products', component: ProductsIndex });
        appRoutes.push({ path: 'products/create', component: ProductCreate });
    }
}