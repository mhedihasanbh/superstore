<template>
    <div>
        <div v-if="!loading" class="row">
          <div  v-for="item in items" :key="item.id" class="card me-3" style="width: 18rem;">
           <router-link  :to="{path:'/item/'+ item.id}">
              <img  :src="item.photo" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
           </div>
           </router-link>
           <div class="card-footer">
            <p class="card-text">{{ item.price }}</p>
            <a @click="addToCart(item)" class="btn btn-primary">+add to cart</a>
          </div>
          
        </div>
       </div>
       <h1 v-else>Loading----</h1>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'SuperstoreInventory',

    data() {
        return {
            loading:true,
            // items:[]
        };
    },


    mounted() {
        this.fetchInventory();
    },
  computed:{
    items(){
      return this.$store.getters.getInventory
    }
  
  },
    methods: {
      addToCart(item){
          this.$store.commit('addToCart',item)
        },
        fetchInventory(){
         
          axios.get('http://localhost:3000/items').then(response=>{
            setTimeout(() => {
            //  this.items=response.data
              this.$store.commit('setInventory',response.data)
             this.loading=false;
            },1000);
             
          })
        }
    },
};
</script>

<style lang="scss" scoped>

</style>