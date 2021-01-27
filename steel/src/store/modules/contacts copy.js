import contactsData from '../json/contacts-data'

const state = {
    contactsData
}

const getters = {
    allContacts: state => state.contactsData,
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