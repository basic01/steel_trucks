import accountsFooterData from '../json/accounts-footer-data'

const state = {
    accountsFooterData
}

const getters = {
    allAccountsFooter: state => state.accountsFooterData,
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