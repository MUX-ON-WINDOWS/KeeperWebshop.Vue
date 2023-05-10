<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/"><img alt="Vue logo" class="logo" src="@/assets/logo.png" width="125" height="125" /></RouterLink>
      <RouterLink to="/about" style="padding-top:20px;">Sale</RouterLink>
      <RouterLink to="/handschoenen" style="padding-top:20px;">Handschoenen</RouterLink>
      <RouterLink to="/onderhoud" style="padding-top:20px;">Onderhoud</RouterLink>
      <a @click="openCart">
        <div style="margin-top:5px;" class="cart_container">
          <div class="amount_cart">{{ count }}</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
      </a>
      <div v-if="shoppingcart_box" class="shoppingcart_box">
        <li v-for="item in shoppingCartItems" :key="item.id">
          {{ item.name }} - {{ item.price }}
        </li>
      </div>
    </nav>
  </header>
</template>
<script>
  import shoppingcart from  '../views/HomeView.vue'

  export default {
    components: {
      shoppingcart
    },
    data() {
      return {
        shoppingcart_box: false,
        shoppingcart: []
      }
    },

    methods: {
      openCart() {
        this.shoppingcart_box = !this.shoppingcart_box;
      }
    }
  }
</script>
