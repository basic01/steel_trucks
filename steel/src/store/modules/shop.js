import categoriesData from '../json/shop/categories-data'
import productsData from '../json/shop/products-data'
import productUses from '../json/shop/products-uses'
import topProducts from '../json/shop/top-products'

const state = {
    categoriesData,
    productsData,
    productUses,
    topProducts
}

const getters = {
    allCategories: state => state.categoriesData,
    allProducts: state => state.productsData,
    allProductUses: state => state.productUses,
    allTopProducts: state => state.topProducts,
}

const actions = {

}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};