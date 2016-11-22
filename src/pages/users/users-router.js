import UsersIndex from './UsersIndex.vue';
import UserCreate from './UserCreate.vue';

export default class UsersRouter {

    static addRoutes(appRoutes) {

        appRoutes.push({ path: 'users', component: UsersIndex });
        appRoutes.push({ path: 'users/create', component: UserCreate });
    }
}