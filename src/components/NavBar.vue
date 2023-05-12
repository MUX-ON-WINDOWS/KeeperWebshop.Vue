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
          <div v-if="shoppingCart.length" class="amount_cart">{{ shoppingCart.length }}</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
      </a>
      <div v-if="shoppingcart_box" class="shoppingcart_box">
        <div class="container_li">
          <div class="shopping_empty" v-if="!shoppingCart.length">
            <p>Je hebt nog geen producten in je winkelwagen</p>
          </div>
          <li v-for="shoppingcart in shoppingCart" :key="shoppingcart.id">
            <div class="container_shopped_info">
              <div class="container_data_shoppingcart">
                <div v-if="!shoppingcart.length" class="container_product_info">
                  <img :src="shoppingcart.img" alt="keeperData">
                  <p>{{ shoppingcart.name }}</p>
                  <p>{{ shoppingcart.new_price }}</p>
                </div>
              </div>
            </div>
          </li>
        </div>
        <div class="container_check_and_total">
          <p>Total: </p>
          <p>€{{ price }}</p>
          <button class="btn_checkout">Checkout</button>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>

export default {
  data() {
    return {
      shoppingcart_box: false,
      shoppingcart: []
    }
  },
  computed: {
    shoppingCart() {
      console.log(this.$store.state.shoppingcart);
      return this.$store.state.shoppingcart;
    }
  },
  methods: {
    openCart() {
        this.shoppingcart_box = !this.shoppingcart_box;
        if (this.shoppingCart.length === 0) {
          this.price = 0;
        } else {
          var total = 0; // Initialize total to 0
          this.shoppingCart.forEach((shoppingcart) => {
            function extractNumbers(str) {
              var cleanStr = str.replace(/€/g, '');
              var numbers = cleanStr.match(/\d+(\.\d+)?/g);
              var numericValues = numbers.map(function(num) {
                return parseFloat(num);
              });
              return numericValues;
            }
            var inputString = shoppingcart.new_price;
            var result = extractNumbers(inputString);
            result.forEach((num) => {
              total += num;
            });
            console.log(total);
          });
          this.price = total;
        }
      }
    }
  }
</script>
