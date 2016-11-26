<template>

    <app-page title="Criar usuário" :navigator="navigator">                

        <div class="col-md-6">        
            <form @submit.prevent="save()"> 
                <div class="form-group" v-form-required:value="user.name">
                    <label class="control-label">Nome</label>
                    <input class="form-control" v-model="user.name">                                            
                </div>
                <div class="form-group" v-form-required:value="user.login">
                    <label class="control-label">Login</label>
                    <input class="form-control" v-model="user.login">
                </div>
                <div class="form-group" v-form-required:value="user.email">
                    <label class="control-label">E-mail</label>
                    <input type="email" class="form-control" v-model="user.email">
                </div>
                <div class="form-group" v-form-required:value="user.password">
                    <label class="control-label">Senha</label>
                    <input type="password" class="form-control" v-model="user.password">
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" v-model="user.isAdmin"> Administrador
                    </label>
                </div>
                <hr/>
                <button type="submit" class="btn btn-default btn-success">
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

                console.log(this.user);
            }
        }
    }

</script>