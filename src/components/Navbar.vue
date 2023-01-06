<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Super Store</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
     
      <form @submit.prevent="search" class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" v-model="keyword">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SuperstoreNavbar',

    data() {
        return {
          keyword:""
        };
    },

    mounted() {
        
    },

    methods: {
      search(){
        axios.get('http://localhost:3000/search/'+ this.keyword).then(response=>{
              this.$store.commit('setInventory',response.data)
            })
      } 
    },
};
</script>

<style lang="scss" scoped>

</style>