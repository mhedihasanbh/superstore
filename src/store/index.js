import { createStore } from "vuex"

const store=createStore({
    state:{
        inventory:[],
        cart:[]
    },
    getters:{
        getInventory(state){
            return state.inventory
        },
        getCart(state){
            return state.cart
        }
    },
    mutations:{
        setInventory(state,payLoad){
             state.inventory=payLoad
        },
        addToCart(state,payLoad){
            state.cart.push(payLoad)
        },
        removeItem(state,payLoad){
            state.cart.splice(payLoad,1)
        },
        clearCart(state){
            state.cart=[]
        }
    }
   
})


export default store



  
