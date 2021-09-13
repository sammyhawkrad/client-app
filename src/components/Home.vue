<template>
  <div id="home">
    <new-client-modal />
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
                  <span><button class="btn btn-sm btn-secondary mx-1">Edit</button></span>
                  <span><button class="btn btn-sm btn-danger">Delete</button></span>
              </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import axios from "axios";
import NewClientModal from './NewClientModal.vue';

export default {
  components: { NewClientModal },
  name: "Home",
  data() {
    return {
      clients: null,
      providers: null,
      clientProvider: [],
      formId: null,
    };
  },

  async created() {
    let clientsdata = await (await axios.get("http://localhost:3000/clients")).data;
    let providersdata = await (await axios.get("http://localhost:3000/providers")).data;
    this.clients = clientsdata;
    this.providers = providersdata;
  }
}
</script>

<style scoped>
#home {
  margin-top:10%;
}

</style>