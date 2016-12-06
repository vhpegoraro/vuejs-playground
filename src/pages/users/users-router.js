const UsersIndex = resolve => {
  require.ensure(['./UsersIndex.vue'], () => {
    resolve(require('./UsersIndex.vue'))
  }, 'users');
}

const UserCreate = resolve => {
  require.ensure(['./UserCreate.vue'], () => {
    resolve(require('./UserCreate.vue'))
  }, 'users');
}

export default class UsersRouter {

    static addRoutes(appRoutes) {

        appRoutes.push({ path: 'users', component: UsersIndex });
        appRoutes.push({ path: 'users/create', component: UserCreate });
    }
}
