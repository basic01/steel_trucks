import technologiesData from '../json/technologies-data'

const state = {
    technologiesData
}

const getters = {
    allTechnologies: state => state.technologiesData,
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