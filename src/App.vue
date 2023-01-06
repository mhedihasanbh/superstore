<template>
  <div>
   <Navbar @search="search"></Navbar>
<section class="py-5">
  <div class="container">
    <div class="row g">
      <div class="col-md-9">
        <router-view></router-view>
         <!-- <Inventory @newItemAdd="cartItem" :items="items"></Inventory> -->
      </div>
      <div class="col-md-3">
          <cart  @itemRemove="itemRemove" :items="cart"></cart>
          
      </div>
    </div>
  </div>
</section>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cart from './components/Cart.vue'
import data from './data.js'

export default {
  name: 'App',
  data(){
    return{
      items:[],
      cart:[]
    }
  },
  methods:{
    cartItem(item){
      console.log(item)
     this.cart.push(item);
   },
   itemRemove(index){
    this.cart.splice(index,1)
   },
   search(keyword){
      this.items= data.filter(item=>{
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
       })
   }
  },
  components: {
    Navbar,
   

    Cart
  },
  mounted(){
   this.items=data;
  }
}
</script>

<style>

</style>
