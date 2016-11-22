<style scoped>

    .breadcrumb {
        background-color: white;
    }

</style>

<template>

    <div>
        <div class="clearfix">
            <div class="pull-left">
                <h3>{{ title }}</h3>                    
            </div>
            <div class="pull-right">
                <ol v-if="navigator" class="breadcrumb">
                    <li v-for="page in navigator" :class="page.navigate ? '' : 'active'">
                        <router-link v-if="page.navigate" :to="page.navigate">
                            {{page.title}}
                        </router-link>
                        <template v-else>{{page.title}}</template>                        
                    </li>
                </ol>
            </div>
        </div>                    
        <br>
        <slot></slot>
    </div>

</template>

<script>

    export default {
        props: ['title','navigator']
    }

</script>