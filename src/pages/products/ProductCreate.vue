<template>

    <app-page title="Criar produto" :navigator="navigator">                
        <h5>Página de criação de produtos ...</h5>
    </app-page>

</template>

<script>

    export default {
        data() {
            return {
                navigator: [
                    { title: 'Produtos', navigate: '/products' },
                    { title: 'Novo produto' },
                ]
            }
        }
    }

</script>