<template>
  <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

import { dbMenuRef, dbOrdersRef, dbTodosRef } from './firebaseConfig.js'

export default {
  components: {
    ppHeader: Header,
    ppFooter: Footer,
  },
  created() {
    this.$store.dispatch('setMenuRef', dbMenuRef)
    this.$store.dispatch('setOrdersRef', dbOrdersRef)
    this.$store.dispatch('setTodosRef', dbTodosRef)
  },
}
</script>
<style>
header,
footer {
  background: #eceeef;
  padding: 40px 0;
  font-size: 1.2rem;
}

.card {
  background: #69ab64;
  margin: 20px 0;
  border-radius: 0;
}
</style>
