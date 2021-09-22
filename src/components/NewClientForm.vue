<template> 
 <form class="col offset-2" :id="formId" @submit.prevent="processForm">
        <div class="mb-3"> <!-- Text inputs start-->
            <div class="row mb-3"> 
               <label class="col-sm-2 col-form-label" for="new-name">Name:</label>
               <div class="col-sm-7">
                  <input
                   v-model="newclient.name" 
                   class="form-control" 
                   type="text" 
                   id="new-name" 
                   name="name">
               </div>
            </div>
            <div class="row mb-3">
               <label class="col-sm-2 col-form-label" for="new-email">Email:</label>
               <div class="col-sm-7">
                  <input
                   v-model="newclient.email" 
                   class="form-control" 
                   type="text" 
                   id="new-email" 
                   name="email">
               </div>
            </div>
            <div class="row mb-3">
               <label class="col-sm-2 col-form-label" for="new-phone">Phone:</label>
               <div class="col-sm-7">
                  <input
                   v-model="newclient.phone" 
                   class="form-control" 
                   type="text" 
                   id="new-phone" 
                   name="phone">
               </div>
            </div>
            <div class="row mb-3">
               <label class="col-sm-2 col-form-label" for="new-addprovider">Providers: </label>
               <div class="col-sm-5"><input class="form-control" type="text" id="new-addprovider" name="addprovider"></div>
               <div class="col-sm-3 gx-0"><button class="btn btn-light" type="button">Add Provider</button></div>
            </div>
        </div> <!-- Text inputs end-->
        <fieldset class="offset-2 p-3 border rounded"> <!-- Checkbox inputs start-->
           <div v-for="provider in this.providers" :key="provider.id" class="d-flex align-items-center">
              <input
               class="col-sm form-check-input"
               name="providers" 
               type="checkbox"
               v-model="newclient.providersIds" 
               :value="provider.id" 
               :id="provider.name.toLowerCase() + '-new-checkbox'">
              <label class="form-check-label mx-3 col-sm-4" :for="provider.name.toLowerCase() + '-new-checkbox'">{{ provider.name }}</label>
              <button class="btn col-sm bg-transparent"><i class="bi bi-pencil-square"></i></button>
              <button class="btn col-sm bg-transparent"><i class="bi bi-trash-fill"></i></button>
           </div>
        </fieldset> <!-- Checkbox inputs end-->
     </form>
</template>

<script>
import { mapState } from 'vuex';

export default {
 name: "NewClientForm",
 props: ["formId"],
 data() {
    return {
       newclient: {
         name: "",
         email: "",
         phone: "",
         providersIds: []
      },
    }
 },

 methods: {
       processForm() {
       let clientInfo = JSON.parse(JSON.stringify(this.newclient));
       let p = clientInfo.providersIds;
       let pArray = [];
       p.forEach(e => {
          e = Array.of(e);
          e = Object.assign({}, e) 
          pArray.push(e)
       });
      pArray.forEach(e => {
         e['id'] = e['0']
         delete e['0']
      });
      clientInfo.providers = pArray;
      delete clientInfo.providersIds;
      console.log(clientInfo);
      return clientInfo;
    }
 },

 computed: {
    ...mapState(['providers'])
 }
}
</script>

<style>
 fieldset {
    width: 40%;
 }

 fieldset > div > input {
    margin: 0 !important;
 }
</style>