<template>

    <app-page title="Criar usuário" :navigator="navigator">                

        <div class="col-md-6">        
            <form id="userForm" @submit.prevent="save()"> 
                <div class="form-group has-feedback" :class="{ 'has-error': errors.has('name') }">
                    <label class="control-label">Nome</label>
                    <input name="name" class="form-control" v-model="user.name" 
                        v-validate data-vv-rules="required" data-vv-as="Nome">
                    <span v-show="errors.has('name')" class="form-control-feedback">
                        <i class="fa fa-warning"></i>
                    </span>
                    <span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span>
                </div>
                <div class="form-group has-feedback" :class="{ 'has-error': errors.has('login') }">
                    <label class="control-label">Login</label>
                    <input name="login" class="form-control" v-model="user.login" data-vv-as="Login"
                        v-validate data-vv-rules="required|min:4|max:15|regex:^[a-zA-Z0-9_\.]+$">
                    <span v-show="errors.has('login')" class="form-control-feedback">
                        <i class="fa fa-warning"></i>
                    </span>
                    <span v-show="errors.has('login')" class="text-danger">{{ errors.first('login') }}</span>
                </div>
                <div class="form-group has-feedback" :class="{ 'has-error': errors.has('email') }">
                    <label class="control-label">E-mail</label>
                    <input type="email" name="email" class="form-control" v-model="user.email" 
                        v-validate data-vv-rules="required|email" data-vv-as="E-mail">
                    <span v-show="errors.has('email')" class="form-control-feedback">
                        <i class="fa fa-warning"></i>
                    </span>
                    <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
                </div>                
                <div class="form-group has-feedback" :class="{ 'has-error': errors.has('password') }">
                    <label class="control-label">Senha</label>
                    <input type="password" name="password" class="form-control" v-model="user.password" 
                        v-validate data-vv-rules="required" data-vv-as="Senha">
                    <span v-show="errors.has('password')" class="form-control-feedback">
                        <i class="fa fa-warning"></i>
                    </span>
                    <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="user.isAdmin"> Administrador
                    </label>
                </div>
                <hr/>
                <button type="submit" class="btn btn-default btn-success" :disabled="errors.any()">
                    <i class="fa fa-check"></i> Confirmar
                </button>
            </form>
        </div>            

    </app-page>

</template>

<script>

    import User from './../../model/user';

    export default {
        data() {
            return {
                navigator: [
                    { title: 'Usuários', navigate: '/users' },
                    { title: 'Novo usuário' },
                ],
                user: new User()
            }
        },
        methods: {
            save() {

                this.$validator.validateAll();
                
            }
        }     
    }

</script>