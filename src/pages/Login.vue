<style scoped> 

    #app-login {
        max-width: 400px; 
    }

</style>

<template>

    <div id="app-login" class="container">

      <form class="form-signin" @submit.prevent="login()">
        <h2 class="form-signin-heading">
            <i v-if="isLocked" class="fa fa-lock text-info"></i>
            <i v-else class="fa fa-unlock-alt text-success"></i>   
            Login
        </h2>  
        <input type="email" class="form-control" placeholder="Usuário" required autofocus>
        <br/>
        <input type="password" class="form-control" placeholder="Senha" required>
        <br/>
        <button v-if="isLoading" class="btn btn-lg btn-primary btn-block" disabled="disabled">
            <i class="fa fa-spinner fa-spin"></i>
            Aguarde ...
        </button>
        <button v-else type="submit" class="btn btn-lg btn-primary btn-block">
            <i class="fa fa-sign-in"></i>
            Entrar
        </button>
      </form>

    </div> <!-- /container -->

</template>

<script>

    export default {
        name: 'app-login',
        data() {
            return {
                isLoading: false,
                isLocked: true
            }
        },
        methods: {
            login() {
                this.isLoading = true;
                setTimeout(() => {                    
                    this.isLocked = false;                     
                    setTimeout(() => {
                        this.$router.push('/');
                    }, 1000);                                           
                }, 1500);
            },
        }
    }

</script>