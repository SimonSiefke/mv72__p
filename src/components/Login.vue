<template>
  <div class="row">
    <div>
      <div>
        <p v-if="!currentUser"> Please log in to continue</p>
        <p v-else>logged in as <br>{{currentUser}}</p>
      </div>
      <form action="">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="password">Email Address</label>
          <input type="password" class="form-control" id="password" placeholder="Enter password">
        </div>
        <button class="btn btn-primary" @click.prevent="signIn()">sign in</button>
        <button class="btn btn-danger" @click.prevent="signOut()">sign out</button>
      </form>
    </div>
  </div>
</template>
<script>
import Firebase from 'firebase'
import '../firebaseConfig.js'
import { store } from '../store/store.js'

Firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('setUser', user)
  } else {
    store.dispatch('setUser', null)
  }
})
export default {
  methods: {
    signIn() {
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value

      Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          const errorCode = error.code
          const errorMessage = error.message

          if (errorCode === 'auth/wrong-password') {
            alert('wrong password')
          } else {
            alert(errorMessage)
          }
        })
    },
    signOut() {
      Firebase.auth()
        .signOut()
        .then(() => {
          alert('logged out').catch(error => {
            alert('error')
          })
        })
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    }
  }
}
</script>
<style>
form {
  margin: 20px 0;
}
</style>
