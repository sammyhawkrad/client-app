<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="edit-client-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="EditClientModalLabel">Edit client</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <edit-client-form />
            </div>
            <div class="modal-footer">
                <button
                 type="button" 
                 class="btn btn-danger position-absolute start-0 mx-4"
                 @click="deleteClient"
                >Delete Client</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" form="edit-client" class="btn btn-success">Save Client</button>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import EditClientForm from './EditClientForm.vue'

export default {
  components: { EditClientForm },
  name: "EditClientModal",
  computed: {
    ...mapState(['currentClient'])
  },
  methods: {
    async deleteClient(clientId) {
       clientId = this.currentClient._id
       await axios.delete(`api/clients/${clientId}`, this.currentClient)
       this.$store.dispatch('getClients');
    },
  }
}
</script>

<style>

</style>