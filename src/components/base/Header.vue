<template>
  <div class="relative">
    <div class="absolute inset-0">
      <img
        class="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
        alt=""
      />
      <div
        class="absolute inset-0 bg-accent mix-blend-multiply"
        aria-hidden="true"
      />
    </div>
    <Container>
      <div class="py-8">
        <h1
          class="
            text-4xl
            font-extrabold
            tracking-tight
            text-white
            sm:text-5xl
            capitalize
            lg:text-6xl
          "
        >
          {{ title ?? $route.meta.title }}
        </h1>
        <p v-if="description" class="mt-6 text-xl text-indigo-100 max-w-3xl">
          {{ description }}
        </p>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from "@/components/layouts/Container.vue";

const { title, description } = defineProps({
  title: String,
  description: String,
});
</script>
