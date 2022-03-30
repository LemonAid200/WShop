
import Vuex from 'vuex'


const store = new Vuex.Store({
    // хранилище
    state:{
        line: 'Hello World',
        cart: [],
        mainPage: [
            {id: 1, waifuName: 'Chika Fujiwara', url: "https://pm1.narvii.com/7201/435d9131cf4ebca9ddd55b7b43edd0d232c16a1cr1-697-919v2_hq.jpg"},
            {id: 2, waifuName: 'Aska',  url: "http://pm1.narvii.com/7182/35026d057a8b37d8235755648325e33ad755e70fr1-900-1136v2_uhq.jpg"},
            {id: 3, waifuName: 'Emilia',  url: "https://pm1.narvii.com/6526/ccb7c5302bff111fa59c7a61526cbc6c49005a6d_hq.jpg"},
            {id: 4, waifuName: 'Rem', url: 'http://pm1.narvii.com/7041/603543fe1887e6974f0646836cfd5bcd6718311br1-493-622v2_uhq.jpg'},
            {id: 5, waifuName: 'Mikasa', url: 'https://s1.narvii.com/image/qha72m5gg6ffot6odh4m5liydvoudj5h_hq.jpg'}
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
        }

    },
    // синхронные изменения
    actions:{

    },
    // получние информаця о данных в стейте
    getters:{}
    

})

export default store