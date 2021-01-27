import componentsData from '../json/components-data'

const state = {
    componentsData
}

const getters = {
    allComponents: state => state.componentsData,
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