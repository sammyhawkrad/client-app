<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="new-client-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="NewClientModalLabel">New Client</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <new-client-form :id="formId" />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" :form="formId" class="btn btn-primary">Add Client</button>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import NewClientForm from './NewClientForm.vue'

export default {
  components: { NewClientForm },
    name: "NewClientModal",
    data() {
      return {
        formId: "new-client"
      }
    }
}
</script>

<style>

</style>