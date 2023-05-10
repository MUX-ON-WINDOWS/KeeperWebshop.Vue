<script setup>
</script>

<template>
  <main>
    <img alt="Vue logo" class="banner_keeper" src="@/assets/keeper.png" width="125" height="125" />
    <div class="container_keeper_items" >
        <div class="item" v-for="item in items">
            <img class="img_class_homepage" :src="item.img || '@/assets/placeholder.png'" alt="keeperData">
            {{ item.name }}
            <p>Oude prijs</p>
            <p>Nieuwe prijs</p>
            <button class="button_add_to_shop" @click="shoppingcart.push({id:item.id})">
              <div class="container_button">
                <p>Winkelwagen</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
            </button>
        </div>
    </div>
  </main>
</template>
<script>
  export default {
    data() {
      return {
        items:
        [{ id: 1, name: 'Keeperhandschoenen', img: '/src/assets/handschoenen.png', old_price: 20, new_price: 15 },
        { id: 2, name: 'Keeperkleding', img: '/src/assets/handschoenen.png', old_price: 20, new_price: 15 },
        { id: 3, name: 'Keeperonderhoud', img: '/src/assets/handschoenen.png', old_price: 20, new_price: 15 },
        { id: 4, name: 'Keeperaccessoires', img: '/src/assets/handschoenen.png', old_price: 20, new_price: 15 },
        { id: 5, name: 'Keeperballen', img: '/src/assets/handschoenen.png', old_price: 20, new_price: 15 }],

        shoppingcart: []
      }
    }

  }
</script>
