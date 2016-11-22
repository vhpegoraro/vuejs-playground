<style scoped> 

    #app-login {
        max-width: 400px; 
    }

</style>

<template>

    <div id="app-login" class="container">

      <form class="form-signin" @submit.prevent="login()">
        <h2 class="form-signin-heading"><i class="fa fa-lock text-info"></i> Login</h2>  
        <input type="email" class="form-control" placeholder="Usuário" required autofocus>
        <br/>
        <input type="password" class="form-control" placeholder="Senha" required>
        <br/>
        <button type="submit" class="btn btn-lg btn-primary btn-block">
            <i class="fa fa-sign-in"></i>
            Entrar
        </button>
      </form>

    </div> <!-- /container -->

</template>

<script>

    export default {
        name: 'app-login',
        methods: {
            login() {
                this.$router.push('/');
            }
        }
    }

</script>