<template>

    <div class="clearfix">

        <div class="pull-left">
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
            </ul>
        </div> 

        <div class="pull-right">
            <ul class="nav nav-pills">
                <router-link 
                    to="/messages" 
                    tag="li" 
                    active-class="active">
                    <a><i class="fa fa-envelope"></i> <span class="label label-pill label-danger"></span></a>
                </router-link>
                <router-link 
                    to="/notifications" 
                    tag="li" 
                    active-class="active">
                    <a><i class="fa fa-bell"></i> <span class="label label-pill label-danger"></span></a>
                </router-link>
                <router-link 
                    to="/login" 
                    tag="li" 
                    active-class="active">
                    <a><i class="fa fa-power-off"></i></a>
                </router-link>                
            </ul>
        </div>      

    </div>    

</template>