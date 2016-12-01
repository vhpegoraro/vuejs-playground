<template>

    <app-page title="Criar usuário" :navigator="navigator">                

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
                
                console.log("save user");                
            }
        }             
    }

</script>