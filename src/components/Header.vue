<template>
  <header class="row">
    <nav class="navbar navbar-toggleable-md navbar-light">
      <router-link to="/">

        pizza planet

      </router-link>
      <ul class="navbar-nav">
        <router-link :to="{name:'homeLink'}" class="nav-item" tag="li">
          <a class="nav-link">home</a>
        </router-link>
        <router-link :to="{name:'menuLink'}" tag="li" class="nav-item">
          <a class="nav-link">menu</a>
        </router-link>

      </ul>
    </nav>
  </header>
</template>

<style>
header {
  margin-bottom: 20px;
}

.navbar-brand {
  font-size: 1.5em;
}
</style>

