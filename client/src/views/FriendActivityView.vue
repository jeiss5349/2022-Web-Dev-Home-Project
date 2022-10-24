<template>

<main v-if="isLoggedIn()">
        <h1 class="title">Friend's Activity</h1>
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
    </main>
    <main v-else>
      <h1 class="title">User needs to Login</h1>
  
      </main>
  </template>
  
  <script setup lang="ts">
  import session, { isLoggedIn } from '../stores/session';
  
  </script>
  
  <style scoped>
  
  </style>