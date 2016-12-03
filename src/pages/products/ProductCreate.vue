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
                        <input class="form-control money" @input="$v.price.$touch()"
                            data-precision="2" data-allow-negative="true" 
                            :value="priceBind" @keyup="priceBind = $event.target.value">
                        <template v-if="$v.price.$error">
                            <span class="form-control-feedback">
                                <i class="fa fa-warning"></i>
                            </span>
                            <span v-if="!$v.price.required" class="text-danger">Informe o Preço do Produto</span>
                        </template>                        
                    </div>                                                             

                    <hr/>

                    <p>{{ price }}</p>                    

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
    import Money from './../../utils/money';

    export default {
        data() {
            return {
                navigator: [
                    { title: 'Produtos', navigate: '/products' },
                    { title: 'Novo produto' },
                ],
                code: "",
                description: "",
                price: 0,
                priceStr: ""
            }
        },
        mounted() {

            Money.maskInputs();
        },
        methods: {
            save() {

                console.log(this.price);                
            },
            toFloat(str) {
                
                this.price = Money.toFloat(str);
            }
        },
        validations: {
            code: { required },
            description: { required, minLength: minLength(5) },
            price: { required }
        },
        computed: {
            priceBind: {
                get() {
                    return Money.toString(this.price);
                },
                set(newValue) {
                    this.price = Money.toFloat(newValue);
                }
            }            
        },
        beforeRouteLeave (to, from, next) {

            var leave = confirm('Deseja realmente sair dessa página ?');

            next(leave);
        }        
    }

</script>