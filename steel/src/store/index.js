import Vue from 'vue'
import Vuex from 'vuex'
import technologies from './modules/technologies'
import accounts from './modules/accounts'
import components from './modules/components'
import shop from './modules/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    technologies,
    accounts,
    components,
    shop
  }
})
