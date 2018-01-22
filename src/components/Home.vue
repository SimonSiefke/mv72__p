<template>
  <main>
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in this.getTodos()" :key="todo['.key']">
        <input type="checkbox" :checked="todo.done" @click="toggle(todo['.key'], !todo.done)">
        <span v-html="todo.value"></span>
      </li>
    </ul>
    <form >
    <textarea v-model="todo.value"></textarea>
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
      this.todo.value = ''
    },
    toggle(key, newVal) {
      dbTodosRef.child(key).update({
        done: newVal,
      })
    },
    ...mapGetters(['getTodos']),
  },
}
</script>


<style>
* {
  outline: none;
}
main {
  width: 100%;
  padding: 2rem;
}

main > h1 {
  text-align: center;
  margin-bottom: 3rem;
}
main > ul {
  margin: 0;
  padding: 0;
}
main > ul > li {
  list-style-type: none;
  padding: 0;
  display: flex;
}
main > ul > li > input[type='checkbox'] {
  margin-right: 10px;
}

form {
  margin-top: 2rem;
  display: flex;
  align-items: center;
}

form button {
  margin-left: 1rem;
}
</style>
