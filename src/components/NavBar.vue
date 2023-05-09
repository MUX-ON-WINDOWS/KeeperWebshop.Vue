<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/"><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /></RouterLink>
      <RouterLink to="/about">Sale</RouterLink>
      <RouterLink to="/handschoenen">Handschoenen</RouterLink>
      <RouterLink to="/onderhoud">Onderhoud</RouterLink>
      <RouterLink to="/about">Winkelwagen</RouterLink>
    </nav>
  </header>
</template>

