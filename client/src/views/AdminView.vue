<template>

  <main v-if="session.user?.adminUser && isLoggedIn()">
    <div class="buttons mt-6">
      
        <button class="button is-medium is-primary">Add</button>
        <button class="button is-medium is-link">Edit</button>
      </div>
      <div class="table-container column is-6 mx-auto">
      <table class="table is-fullwidth mt-6">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Is Admin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in session.users">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.adminUser }}</td>
          </tr>
        </tbody>  
      </table>
     </div> 
  </main>
  <main v-else>
    <h1 class="title">You are not an admin</h1>

    </main>
</template>

<script setup lang="ts">
import session, { isLoggedIn } from '../stores/session';

</script>

<style scoped>

</style>