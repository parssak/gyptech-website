<script setup>
const { flipped, leftClass, rightClass } = defineProps({
  flipped: Boolean,
  leftClass: String,
  rightClass: String,
});
</script>

<template>
  <main class="lg:relative">
    <div
      :class="`${leftClass} mx-auto max-w-7xl w-full pt-16 pb-20 lg:py-48 lg:flex ${
        flipped && 'justify-end'
      }
      `"
    >
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <slot name="left"></slot>
      </div>
    </div>
    <div
      :class="`
        ${rightClass}
        relative
        w-full
        h-72
        lg:h-96
        lg:absolute lg:inset-y-0 ${
          flipped ? 'lg:left-0' : 'lg:right-0'
        } lg:w-1/2 lg:h-full
        
      `"
    >
      <slot name="right"></slot>
    </div>
  </main>
</template>
