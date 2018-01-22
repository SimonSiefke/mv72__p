<template>
  <main>
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in this.getTodos()" :key="todo['.key']">
        <input type="checkbox" :checked="todo.done" @click="toggle(todo['.key'])">
        {{todo.value}}
      </li>
    </ul>
    <form >
    <input type="text" v-model="todo.value">
    <button @click.prevent="addTodo">add</button>
    </form>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import { dbTodosRef } from '../firebaseConfig.js'

export default {
  data() {
    return {
      todo: {
        value: '',
        done: false,
      },
    }
  },

  methods: {
    addTodo() {
      dbTodosRef.push(this.todo)
    },
    toggle(key) {
      console.log(key)

      dbTodosRef.child(key).update({
        done: true,
      })
    },
    ...mapGetters(['getTodos']),
  },
}
</script>


<style>
main {
  width: 100%;
  padding: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 3rem;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  padding: 0;
}
</style>
