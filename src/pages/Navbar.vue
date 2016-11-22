<template>

    <ul class="nav nav-pills">
        <router-link 
            to="/" 
            tag="li" 
            active-class="active" 
            exact>
            <a><i class="fa fa-home"></i> Home</a>
        </router-link>
        <router-link 
            to="/users" 
            tag="li" 
            active-class="active">
            <a><i class="fa fa-users"></i> Usuários</a>
        </router-link>
        <router-link 
            to="/products" 
            tag="li" 
            active-class="active">
            <a><i class="fa fa-cubes"></i> Produtos</a>
        </router-link>
        <router-link 
            to="/login" 
            tag="li" 
            active-class="active">
            <a><i class="fa fa-sign-out"></i> Sair</a>
        </router-link>                
    </ul>

</template>