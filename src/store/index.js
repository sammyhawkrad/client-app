import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state() {
   return {
    clients: [],
    providers: [],
    providerslist: [],
    currentClient: {},
  }
},
  mutations: {
    'loadClients' (state, clientsdata) {
      state.clients = clientsdata
    },
    'loadProviders' (state, providersdata) {
      state.providers = providersdata
    },
    'loadCurrentClient' (state, activeClient) {
      state.currentClient = activeClient;
    }
  },
  actions: {
    async getClients({commit}) {
      let clientsdata = (await axios.get("http://localhost:3000/clients")).data;
      commit('loadClients', clientsdata);
    },
    async getProviders({commit}) {
      let providersdata = (await axios.get("http://localhost:3000/providers")).data;
      commit('loadProviders', providersdata);
    },
    getCurrentClient({commit}, client) {
      const activeClient = Object.assign({}, client);
      commit('loadCurrentClient', activeClient);
    }
  },
  getters: {
      testgetter:state => {
          return state.test;
      },

  },
  modules: {}
})