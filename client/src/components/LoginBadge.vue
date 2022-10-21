<script setup lang="ts">
    import session, { login, logout } from '../stores/session'
</script>

<template>
     <div class="navbar-item has-dropdown is-hoverable" v-if="session.user == null">
              <a class="navbar-link">
                Login
              </a>
      
              <div class="navbar-dropdown">
                <a class="navbar-item button is-light" @click="login('Jeiss', 'Varghese', true)">
                  Jeiss Varghese
                </a>
                <a class="navbar-item button is-light" @click="login('John', 'Doe', false)">
                  John Doe
                </a>
                <a class="navbar-item button is-light" @click="login('John', 'Smith', false)">
                  John Smite
                </a>
              </div>
  
        <a class="button is-primary">
            <strong>Sign up</strong>
        </a>
      </div>
    <div v-else>
        Welcome {{session.user.firstName}} {{session.user.lastName}}
        (<a @click="logout()">
            Log out
        </a>)
    </div>

</template>


<style scoped>
</style>