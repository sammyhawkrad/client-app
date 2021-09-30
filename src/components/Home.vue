<template>
  <div id="home">
    <new-client-modal />
    <edit-client-modal :currentClient="currentClient" />
      <div class="row p-3 mx-0 bg-light">
            <p class="col-10 h4 text-start p-2 text-primary">Clients</p>
            <button 
                class="col-2 p-0 btn btn-primary btn-sm"
                type="button"
                data-bs-toggle="modal" 
                data-bs-target="#new-client-modal"
            >
            New Client</button>
        </div>
      <table class="table table-bordered text-start w-100">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Providers</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client,index in this.clients" :key="index">
              <td>{{ client.name }}</td>
              <td>{{ client.email }}</td>
              <td>{{ client.phone }}</td>
              <td>
                <span v-for="p, index in client.providers" :key="p.id">
                  <span  v-for="provider in this.providers" :key="provider.id">
                    <span v-if="p.id === provider.id">{{ provider.name }}<span v-if="index != parseInt(client.providers.length)-1">, </span></span>                    
                  </span> 
                </span>
              </td>
              <td>
                  <span>
                    <button
                      class="btn btn-sm btn-secondary mx-1"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-client-modal"
                      @click="getActive(client), extractProviderIds()"
                    >
                    Edit</button>
                  </span>
                  <span>
                    <button
                      class="btn btn-sm btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-client-modal"
                      @click="getActive(client), extractProviderIds()"
                     >
                     Delete</button></span>
              </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import NewClientModal from './NewClientModal.vue';
import EditClientModal from './EditClientModal.vue';
import { mapState } from "vuex";

export default {
  components: { NewClientModal, EditClientModal },
  name: 'Home',
  created() {
    this.$store.dispatch('getClients');
    this.$store.dispatch('getProviders');
  },

  methods: {
    getActive(client){
      this.$store.dispatch('getCurrentClient', client)
    },

    extractProviderIds() {
      let p = this.currentClient.providers;
       const plist = [];
       p.forEach(provider => {
          plist.push(provider.id)
       });
       this.currentClient.providersIds = plist
    },

  },

  computed: {
    ...mapState(['clients', 'providers', 'currentClient'])
  }
}
</script>

<style scoped>
#home {
  margin-top: 10%;
}
</style>