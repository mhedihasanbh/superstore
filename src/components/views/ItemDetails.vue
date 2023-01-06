<template>
    <div>
       <div class="row">
         <div class="col-md-6">
          <img :src="item.photo"/>
         </div>
         <div class="col-md-6">
          <h4>{{item.title }}</h4>
          <p>{{item.description }}</p>
          <div class="card-footer">
            <span>${{item.price}}</span>
            <button @click="addToCart(item)" class="btn btn-sm btn-primary float-right">+add</button>
          </div>
          <p></p>
         </div>
       </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'SuperstoreItemDetails',

    data() {
        return {
            item:[]
        };
    },

    mounted() {
       this.fetchItem() 
    },

    methods: {
        fetchItem(){
            var self=this
            axios.get('http://localhost:3000/item/'+ this.$route.params.id).then(response=>{
                self.item=response.data;
            })
        },
       addToCart(item){
            this.$store.commit('addToCart',item)
        }
    },
};
</script>

<style  scoped>

</style>