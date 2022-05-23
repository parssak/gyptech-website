<template>
  <Nav />
  <div class="min-h-screen">
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import Nav from "./components/nav/Nav.vue";
import Footer from "./components/base/Footer.vue";
</script>
