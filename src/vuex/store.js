import Vuex from 'vuex'


const store = new Vuex.Store({
    // хранилище
    state:{
        line: 'Hello World',
        cart: []
    },
    // асинхонные изменения 
    mutations:{
        print(){
            console.log(this.state.line)
        },
        addToCart(item){
            this.cart.push(item)
            console.log(this.cart)
        }
    },
    // синхронные изменения
    actions:{},
    // получние информаця о данных в стейте
    getters:{},
    

})

export default store