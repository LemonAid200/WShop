
import Vuex from 'vuex'


const store = new Vuex.Store({
    // хранилище
    state:{
        line: 'Hello World',
        cart: [],
        mainPage: [
            
          ],
        secondPage: [],
        thirdPage:[]
    },
    // асинхонные изменения 
    mutations:{
        print(){
            console.log(this.state.line)
        },
        addToCart(item){
            this.cart.push(item)
        },
        addToMainPage(item){
            this.mainPage.push(item)
        },
        

    },
    // синхронные изменения
    actions:{

    },
    // получние информаця о данных в стейте
    getters:{}
    

})

export default store