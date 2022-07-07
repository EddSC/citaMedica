<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
    <Navbar/>
  </header>
  <div class="container">
    <h3 class="my-5">Sistema de Citas Medicas</h3>
  </div>
  <RouterView />
    
</template>

<style>
@import '@/assets/base.css';
#app {
  /* max-width: 1280px; */
  margin: 0 auto;

  font-weight: normal;
}
</style>
