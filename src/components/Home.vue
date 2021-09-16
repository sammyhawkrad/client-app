<template>
  <div id="home">
    <new-client-modal />
    <edit-client-modal :currentClient="currentClient" :providerslist="providerslist"/>
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
          <tr v-for="client,index in clients" :key="index">
              <td>{{ client.name }}</td>
              <td>{{ client.email }}</td>
              <td>{{ client.phone }}</td>
              <td>
                <span v-for="provider, index in client.providers" :key="index">{{ provider.id }}, </span>
              </td>
              <td>
                  <span>
                    <button
                      class="btn btn-sm btn-secondary mx-1"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-client-modal"
                      @click="getIndex(client)"
                    >
                    Edit</button>
                  </span>
                  <span>
                    <button
                      class="btn btn-sm btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-client-modal"
                      @click="getIndex(client)"
                     >
                     Delete</button></span>
              </td>
          </tr>
        </tbody>
      </table>
      <button @click="providerMap()">provider map</button>
  </div>
</template>

<script>
import axios from "axios";
import NewClientModal from './NewClientModal.vue';
import EditClientModal from './EditClientModal.vue';

export default {
  components: { NewClientModal, EditClientModal },
  name: "Home",
  data() {
    return {
      clients: null,
      providers: null,
      providerslist: [],
      currentClient: {}
    };
  },

  async created() {
    let clientsdata = (await axios.get("http://localhost:3000/clients")).data;
    let providersdata = (await axios.get("http://localhost:3000/providers")).data;
    this.clients = clientsdata;
    this.providers = providersdata;
    let plist = [];
    providersdata.forEach(function(provider){
    plist.push(provider.name);
    })
    this.providerslist = plist;
  },

  methods: {
    getIndex(client) {
      const clientObj = Object.assign({}, client);
      this.currentClient = clientObj;
      let p = this.currentClient.providers;
       const plist = [];
       p.forEach(provider => {
          plist.push(provider.id)
       });
       this.currentClient.providersArray = plist;
    },

    providerMap() {
        const cp = this.clients.map(client => { 
          return JSON.parse(JSON.stringify(client.providers)); 
        });
        // let cpMap = cp.map(
        //   (c, index) => {
        //     let pr = this.providers
        //     let temp = pr.find(provider => provider.id === cp[index].id);
        //     if(temp.providers) {
        //       c.providers = temp.providers;
        //     }
        //     return c;
        //   }
        // ) 
        console.log(cp);
    },


  },
}
</script>

<style scoped>
#home {
  margin-top:10%;
}

</style>