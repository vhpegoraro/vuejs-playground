<template>

    <app-page title="Criar usuário" :navigator="navigator">                
        <h5>Página de criação de usuários ...</h5>
    </app-page>

</template>

<script>

    export default {
        data() {
            return {
                navigator: [
                    { title: 'Usuários', navigate: '/users' },
                    { title: 'Novo usuário' },
                ]
            }
        }
    }

</script>