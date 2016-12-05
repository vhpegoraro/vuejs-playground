import { required } from 'vuelidate/lib/validators';

export class User {

    constructor() {
        this.name = "";        
        this.login = "";
        this.password = "";
    }
}

export const userValidations = {
    name: { required },
    login: { required },
    password: { required }
}