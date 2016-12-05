<template>

    <app-page title="Criar usuário" :navigator="navigator">                

        <div class="col-md-6">

            <form @submit.prevent="save()">

                <div class="form-group has-feedback" v-bind:class="{ 'has-error': $v.user.name.$error }">
                    <label class="control-label">Nome</label>
                    <input class="form-control" v-model="user.name" @input="$v.user.name.$touch()">
                    <template v-if="$v.user.name.$error">
                        <span class="form-control-feedback">
                            <i class="fa fa-warning"></i>
                        </span>
                        <span v-if="!$v.user.name.required" class="text-danger">Informe o Nome</span>
                    </template>                        
                </div>  

                <div class="form-group has-feedback" v-bind:class="{ 'has-error': $v.user.login.$error }">
                    <label class="control-label">Login</label>
                    <input class="form-control" v-model="user.login" @input="$v.user.login.$touch()">
                    <template v-if="$v.user.login.$error">
                        <span class="form-control-feedback">
                            <i class="fa fa-warning"></i>
                        </span>
                        <span v-if="!$v.user.login.required" class="text-danger">Informe o Login</span>
                    </template>                        
                </div>     

                <div class="form-group has-feedback" v-bind:class="{ 'has-error': $v.user.password.$error }">
                    <label class="control-label">Senha</label>
                    <input type="password" class="form-control" v-model="user.password" @input="$v.user.password.$touch()">
                    <template v-if="$v.user.password.$error">
                        <span class="form-control-feedback">
                            <i class="fa fa-warning"></i>
                        </span>
                        <span v-if="!$v.user.password.required" class="text-danger">Informe a Senha</span>
                    </template>                        
                </div>               

                <hr> 

                <p v-if="isSaving">
                    <i class="fa fa-spinner fa-spin fa-fw text-info"></i> Aguarde ...
                </p>                    

                <button v-else type="submit" class="btn btn-success" :disabled="$v.user.$invalid">
                    <i class="fa fa-check"> Confirmar</i>
                </button>               

            </form>                

        </div>

    </app-page>

</template>

<script>

    import { User, userValidations } from './../../model/user';

    export default {
        data() {
            return {
                navigator: [
                    { title: 'Usuários', navigate: '/users' },
                    { title: 'Novo usuário' },
                ],
                isSaving: false,
                user: new User(),
                resource: {}
            }
        },
        created() {
            this.resource = this.$resource('user.json/{id}');
        },
        validations: {
            user: userValidations
        },
        methods: {
            save() {

                this.isSaving = true;

                this.resource.save({}, this.user).then((response) => {
                    console.log("Ok");
                    console.log(response);
                }, (error) => {
                    console.log("Erro");
                    console.log(error);
                }).then(() => this.isSaving = true );
            }
        }             
    }

</script>