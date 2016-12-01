<template>

    <app-page title="Criar produto" :navigator="navigator">                
        
        <div class="col-md-6">

            <div class="col-md-12">

                <form @submit.prevent="save()">

                    <div class="form-group has-feedback" v-bind:class="{ 'has-error': $v.code.$error }">
                        <label class="control-label">Código</label>
                        <input class="form-control" v-model="code" @input="$v.code.$touch()">
                        <template v-if="$v.code.$error">
                            <span class="form-control-feedback">
                                <i class="fa fa-warning"></i>
                            </span>
                            <span v-if="!$v.code.required" class="text-danger">Informe o Código do Produto</span>
                        </template>                        
                    </div>   

                    <div class="form-group has-feedback" v-bind:class="{ 'has-error': $v.description.$error }">
                        <label class="control-label">Descrição</label>
                        <input class="form-control" v-model="description" @input="$v.description.$touch()">
                        <template v-if="$v.description.$error">
                            <span class="form-control-feedback">
                                <i class="fa fa-warning"></i>
                            </span>
                            <span v-if="!$v.description.required" class="text-danger">Informe a Descrição do Produto</span>
                            <span v-if="!$v.description.minLength" class="text-danger">A descrição deve possuir ao menos 5 caracteres</span>
                        </template>                        
                    </div>  

                     <div class="form-group has-feedback" v-bind:class="{ 'has-error': $v.price.$error }">
                        <label class="control-label">Preço</label>
                        <input class="form-control" v-model="price" @input="$v.price.$touch()" placeholder="0,00">
                        <template v-if="$v.price.$error">
                            <span class="form-control-feedback">
                                <i class="fa fa-warning"></i>
                            </span>
                            <span v-if="!$v.price.required" class="text-danger">Informe o Preço do Produto</span>
                        </template>                        
                    </div>                                                             

                    <hr/>

                    <button type="submit" class="btn btn-success">
                        <i class="fa fa-check"></i> Salvar 
                    </button>                        
                </form>                    

            </div>

        </div>

    </app-page>

</template>

<script>

    import { required, minLength } from 'vuelidate/lib/validators';

    export default {
        data() {
            return {
                navigator: [
                    { title: 'Produtos', navigate: '/products' },
                    { title: 'Novo produto' },
                ],
                code: "",
                description: "",
                price: null
            }
        },
        methods: {
            save() {

                console.log(this.price);                
            }
        },
        validations: {
            code: { required },
            description: { required, minLength: minLength(5) },
            price: { required }
        }
    }

</script>