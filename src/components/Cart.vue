<template>
    <div>
        <ul class="list-group">
            <li>
                <div class="d-flex justify-content-between">
                    <span>Name</span>
                    <span>Item</span>
                </div>
            </li>
            <li v-for="item in items" :key="item.id" class="list-group-item">
                <div class="d-flex justify-content-between">
                    <span>{{ item.title }}</span>
                    <button class="btn btn-sm btn-danger" @click="removeItem(index)">-</button>
                <span class="text-end">{{ item.price }}</span>
                </div>
                
            </li>
            <hr>
            <li class="list-group-item">
                <div class="d-flex justify-content-between">
                    <span>total</span>
                <span class="float-right">${{  totalPrice }}</span>
                </div>
                
            </li>
            <li v-if="items.length>0" class="list-group-item">
                <button @click="checkOut" class="btn btn-block btn-success">CheckOut</button>
            </li>
           
          </ul>
    </div>
</template>

<script>
export default {
    name: 'SuperstoreCart',

    data() {
        return {
            
        };
    },
    
    computed:{
    items(){
       return this.$store.getters.getCart
    },
     totalPrice(){
         var total=0;
         this.items.forEach(item=> {
            total += parseFloat(item.price) 
            
       });
      return total 

     
     }
    },
   

    mounted() {
        
    },

    methods: {
        removeItem(index){
           this.$store.commit('removeItem',index)
        },
        checkOut(){
            if(confirm('Are you sure want to checkout')){
            this.$store.commit('clearCart')
            }
        }
    },
};
</script>

<style lang="scss" scoped>

</style>