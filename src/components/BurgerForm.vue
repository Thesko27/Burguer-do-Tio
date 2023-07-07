<template>
    <div>
        <form id="burger-form" @submit="createBurger">
        <!-- campos  form -->
            <div class="input-container">
                <label for="nome">Nome di cliente:</label>
                <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
            </div>
             <!-- Tipos de Pão -->
            <div class="input-container">
                <label for="pao">Selecione o pão:</label>

                <select name="pao" id="pao" v-model="pao">

                    <option value="">Tipo de pão</option>

                    <option v-for="pao in paes" :key="pao.id" value="pao.tipo">{{ pao.tipo }}</option>
                </select>
            </div>
            <!-- /Tipos de Pão -->

             <!-- Tipos de Carnes -->
            <div class="input-container">

                <label for="carne">Selecione a carne:</label>

                <select name="carne" id="carne" v-model="carne">
                    <option value="">Tipo de carne</option>

                    <option v-for="carne in carnes" :key="carne.id" value="carne.tipo">{{ carne.tipo }}</option>
                    
                </select>
            </div>
            <!-- /Tipos de Carnes -->

             <!-- Opicionais -->
             <div id="opcionais-container" class="input-container">
                <label id="#opcionais-title" for="opcionais">Selecione os opicionais:</label>

                <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
                    <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                    <span>{{ opcional.tipo }}</span>
                </div>
                
            </div>
            <!-- /Opicionais -->

             <!-- Finalizar Pedido -->
             <div class="input-container">
                <input type="submit" class="submit-btn" value="Criar meu Burger!">
               
            </div>
            <!-- /Finalizar Pedido -->

        </form>
<h1>formulario buger</h1>
    </div>
</template>

<script>
    export default {
        name: 'BurgerForm',
        data(){
            return{
            paes:null,
            carnes:null,
            opcionaisdata:null,
            nome:null,
            pao:null,
            carne:null,
            opcionais:[],
            msg:null
            }
        },

        methods:{

            async getingredientes(){
                const req  = await fetch("http://localhost:3000/ingredientes");

                const data =  await req.json();
                this.paes = data.paes;
                this.carnes = data.carnes;
                this.opcionaisdata = data.opcionais;
            }

        },
        
        async createBurger(e){
            
        e.preventDefault();
         const data= {
            nome:this.nome,
            pao: this.pao,
            carne: this.carne,
            opcionais:Array.form(this.opcionais),
            status:'solicitado'
         }
         const dataJson = JSON.stringify(data);
         const req = await fetch("http://localhost:3000/burgers", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
                },
                body:dataJson
         }); 

         const res =await req.json();
         console.log(res);

         //msg no sistema

         //limpar campos
         this.nome='';
         this.pao='';
         this.carne='';
         this.opcionais='';

        },

        mounted(){
            this.getingredientes()
        }
    }
</script>

<style scoped>
#burger-form
{
    max-width: 400px;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
    
.input-container{
    display: flex;
   flex-direction: column;
   margin-bottom: 20px;
}

label
{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    color:#222 ;
    text-transform: uppercase;
    padding: 5px 10px;
    border:1px solid #fcba03 ;
    border-radius: 50px;
    margin-bottom: 8px;
}

input , select
{
    width: 300px;
    padding: 5px 30px;
}

#opcionais-container
{
flex-direction:row ;
flex-wrap: wrap;
}

#opcionais-title
{
    width: 100%;
}

.checkbox-container
{
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;

}

.checkbox-container span,
.checkbox-container input
{
    width: auto;
    margin-top:10px;
}

.checkbox-container span{
    margin-left: 6px;
    font-weight: bold;
}

.submit-btn
{
    background: #222;
    color: #fcba03;
    cursor: pointer;
    font-weight: bold;
    margin:0 auto;
    transition:.3s ease-in-out;
    border:2px solid #222;
    font-size: 16px;
    padding:10px;
    border-radius: 20px;

}
.submit-btn.submit-btn:hover
{
    background: #1bf34ad3;
    color: #222;
}

</style>