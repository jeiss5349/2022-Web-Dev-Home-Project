<template>

  <main v-if="session.user?.adminUser && isLoggedIn()">
    <div class="buttons mt-6">
      
        <button class="button is-medium is-primary">Add</button>
        <button class="button is-medium is-link">Edit</button>
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