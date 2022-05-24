<template>
  <main class="relative min-h-screen -mt-16">
    <div class="absolute inset-0 w-full h-full">
      <img
        src="@/assets/images/machine.png"
        alt=""
        class="w-full h-full object-cover flipped"
      />
    </div>
    <div class="absolute top-0 left-0 w-96 h-96">
      <img src="@/assets/icons/dots.svg" class="w-full h-full" alt="" />
    </div>
    <div class="absolute inset-0 bg-accent mix-blend-multiply"></div>
    <div class="absolute inset-0 grid items-center pb-12">
      <slot name="background"></slot>
      <Container>
        <slot></slot>
      </Container>
    </div>
  </main>
</template>

<script setup>
import Container from "../Container.vue";
</script>
