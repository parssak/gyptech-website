<template>
  <div class="relative">
    <div class="absolute inset-0">
      <img
        class="w-full h-full object-cover"
        src="@/assets/images/banner.png"
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
