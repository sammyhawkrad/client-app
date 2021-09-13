<template> 
     <form class="col offset-2" :id="formId" action="">
        <div class="mb-4"> <!-- Text inputs start-->
            <div class="row mb-3"> 
               <label class="col-sm-2 col-form-label" for="name">Name:</label>
               <div class="col-sm-7"><input class="form-control" type="text" id="name" name="name"></div>
            </div>
            <div class="row mb-3">
               <label class="col-sm-2 col-form-label" for="email">Email:</label>
               <div class="col-sm-7"><input class="form-control" type="text" id="email" name="email"></div>
            </div>
            <div class="row mb-3">
               <label class="col-sm-2 col-form-label" for="phone">Phone:</label>
               <div class="col-sm-7"><input class="form-control" type="text" id="phone" name="phone"></div>
            </div>
            <div class="row mb-3">
               <label class="col-sm-2 col-form-label" for="addprovider">Providers: </label>
               <div class="col-sm-5"><input class="form-control" type="text" id="addprovider" name="addprovider"></div>
               <div class="col-sm-3 mx-1"><button class="btn btn-light" type="button">Add Provider</button></div>
            </div>
        </div> <!-- Text inputs end-->
        <fieldset class="offset-2 p-3 border rounded"> <!-- Checkbox inputs start-->
           <div class="d-flex align-items-center">
              <input class="col-sm form-check-input" type="checkbox" name="providers" value="Mantro" id="provider-1">
              <label class="form-check-label mx-3 col-sm-4" for="provider-1">Mantro</label>
              <button class="btn col-sm bg-transparent"><i class="bi bi-pencil-square"></i></button>
              <button class="btn col-sm bg-transparent"><i class="bi bi-trash-fill"></i></button>
           </div>
           <div class="d-flex align-items-center">
              <input class="col-sm form-check-input" type="checkbox" name="providers" value="Comcur" id="provider-2">
              <label class="form-check-label mx-3 col-sm-4" for="provider-2">Comcur</label>
              <button class="btn col-sm bg-transparent"><i class="bi bi-pencil-square"></i></button>
              <button class="btn col-sm bg-transparent"><i class="bi bi-trash-fill"></i></button>
           </div>
           <div class="d-flex align-items-center">
              <input class="col-sm form-check-input" type="checkbox" name="providers" value="Reversus" id="provider-3">
              <label class="form-check-label mx-3 col-sm-4" for="provider-3">Reversus</label>
              <button class="btn col-sm bg-transparent"><i class="bi bi-pencil-square"></i></button>
              <button class="btn col-sm bg-transparent"><i class="bi bi-trash-fill"></i></button>
           </div>
           <div class="d-flex align-items-center">
              <input class="col-sm form-check-input" type="checkbox" name="providers" value="Frenex" id="provider-4">
              <label class="form-check-label mx-3 col-sm-4" for="provider-4">Frenex</label>
              <button class="btn col-sm bg-transparent"><i class="bi bi-pencil-square"></i></button>
              <button class="btn col-sm bg-transparent"><i class="bi bi-trash-fill"></i></button>
           </div>
           <div class="d-flex align-items-center">
              <input class="col-sm form-check-input" type="checkbox" name="providers" value="Gadtron" id="provider-5">
              <label class="form-check-label mx-3 col-sm-4" for="provider-5">Gadtron</label>
              <button class="btn col-sm bg-transparent"><i class="bi bi-pencil-square"></i></button>
              <button class="btn col-sm bg-transparent"><i class="bi bi-trash-fill"></i></button>
           </div>
        </fieldset> <!-- Checkbox inputs end-->

     </form>
</template>

<script>
export default {
 name: "Form",
 props: ['formId'],
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