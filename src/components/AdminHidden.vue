<template>
  <section>
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <pp-new-pizza></pp-new-pizza>
      </div>
      <!-- new pizza component -->
      <div class="col-sm-12 col-md-6">
        <h3>Menu</h3>
        <table class="table table-hover">
          <thead class="thead-default">
            <tr>
              <th>Item</th>
              <th>Remove from Menu</th>

            </tr>
          </thead>
          <tbody v-for="item in getMenuItems" :key="item['.key']">
            <tr>
              <td>{{item.name}}</td>
              <td>
                <button class="btn btn-outline-danger btn-sm" @click="removeMenuItem(item['.key'])">x</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h3>current orders {{numberOfOrders}}</h3>
        <table class="table table-sm" v-for="(orders, index) in getOrders" :key="orders['.key']">
          <thead class="thead-default">
            <tr>
              <th>Item</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>

            </tr>
          </thead>
          <tbody>
            <div class="order-number">
              <strong>
                <em> Order Number: {{index+1}}</em>
              </strong>
              <button class="btn btn-outline-danger btn-sm" @click="removeOrderItem(orders['.key'])">x</button>
            </div>
            <tr v-for="orderItem in orders['.value']" :key="orderItem['.key']">
              <td>{{orderItem.name}}</td>
              <td>{{orderItem.size}}"</td>
              <td>{{orderItem.quantity}}</td>
              <td>{{orderItem.price | currency}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<script>
import NewPizza from './NewPizza'
import { mapGetters } from 'vuex'
import { dbMenuRef, dbOrdersRef } from '../firebaseConfig.js'

export default {
  components: {
    ppNewPizza: NewPizza
  },
  beforeRouteLeave(to, from, next) {
    if (confirm('log out')) {
      next()
    } else {
      next(false)
    }
  },
  computed: {
    ...mapGetters(['numberOfOrders', 'getMenuItems', 'getOrders'])
  },
  methods: {
    removeMenuItem(key) {
      dbMenuRef.child(key).remove()
    },
    removeOrderItem(key) {
      dbOrdersRef.child(key).remove()
    }
  }
}
</script>
