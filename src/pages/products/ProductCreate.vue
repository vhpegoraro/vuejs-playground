<template>

    <app-page title="Criar produto" :pages="pages">                
        <h5>Página de criação de produtos ...</h5>
    </app-page>

</template>

<script>

    export default {
        data() {
            return {
                pages: [
                    { title: 'Produtos', navigate: '/products' },
                    { title: 'Novo produto' },
                ]
            }
        }
    }

</script>