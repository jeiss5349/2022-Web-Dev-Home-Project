
<template>

    <main v-if="isLoggedIn()">
       
        <h1 class="title">My Activity</h1>
    
            <div class="buttons">
                    <button @click = "modalActive = true" class="button is-medium is-primary"> Add Activity</button>  
                    
                </div>

                <div v-if = "modalActive" class="modal is-active">
                    
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Add Activity</p>
      
            
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
        <div class="field">
        <label class="label">Title</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input">
            </div>
            </div>
            <div class="field">
            <label class="label">Date</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input">
            </div>
            </div>
            <div class="field">
            <label class="label">Picture</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input">
            </div>
            </div>
    </section>
    <footer class="modal-card-foot">
      <button @click = "modalActive = false" class="button is-success">Save changes</button>
      <button @click = "modalActive = false" class="button">Cancel</button>
    </footer>
  </div>
</div>
                <div v-if="session.user?.firstName == 'Jeiss'">
                    <div class= "columns">
                        <div class = "column is-1">
                            <figure class="image ">
                            <img src="../assets/Jeiss.jpg">
                            </figure>
                        </div>
                        <div class = "column is-4">
                            <p><span class = "has-text-weight-semibold" >Jeiss Varghese</span> <span class = "has-text-weight-light" >Thursday, October 20, 2022</span> </p>
                            <p>Playing Chess</p>
                            <figure class="image is-square">
                            <img src="../assets/JeissPic1.jpg">
                            </figure>
                        </div>
                    </div>
                    
                </div>
                <div v-if="session.user?.firstName == 'Serena'">
                    <div class= "columns">
                        <div class = "column is-1">
                            <figure class="image ">
                            <img src="../assets/Serena.jpg">
                            </figure>
                        </div>
                        <div class = "column is-4">
                            <p><span class = "has-text-weight-semibold" >Serena Williams</span> <span class = "has-text-weight-light" >Sunday, October 23, 2022</span> </p>
                            <p>Did some Weights</p>
                            <figure class="image is-square">
                            <img src="../assets/SerenaPic1.jpg">
                            </figure>
                        </div>
                    </div>
                    
                </div>
                <div v-if="session.user?.firstName == 'Michael'">
                    <div class= "columns">
                        <div class = "column is-1">
                            <figure class="image ">
                            <img src="../assets/Michael.jpg">
                            </figure>
                        </div>
                        <div class = "column is-4">
                            <p><span class = "has-text-weight-semibold" >Michael Phelps</span> <span class = "has-text-weight-light" >Saturday, October 22, 2022</span> </p>
                            <p>Swimming</p>
                            <figure class="image is-square">
                            <img src="../assets/MichaelPic1.jpg">
                            </figure>
                        </div>
                    </div>
                    
                </div>
    </main>
    <main v-else>
      <h1 class="title">User needs to Login</h1>
  
      </main>
  </template>
  
  <script setup lang="ts">
  import session, { isLoggedIn } from '../stores/session';
  import { ref } from 'vue';
  let modalActive = ref(false);
  </script>
  
  <style scoped>
  
  </style>