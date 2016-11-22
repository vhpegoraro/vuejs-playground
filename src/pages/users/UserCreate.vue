<template>

    <app-page title="Criar usuário" :pages="pages">                
        <h5>Página de criação de usuários ...</h5>
    </app-page>

</template>

<script>

    export default {
        data() {
            return {
                pages: [
                    { title: 'Usuários', navigate: '/users' },
                    { title: 'Novo usuário' },
                ]
            }
        }
    }

</script>