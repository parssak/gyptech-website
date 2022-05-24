<script setup>
import { ArrowCircleRightIcon } from "@heroicons/vue/outline";
import { defineProps } from "vue";

const props = defineProps({
  items: Array,
  white: Boolean,
});
</script>

<template>
  <ul class="unstyled space-y-4">
    <li
      v-for="(item, index) in props.items"
      :key="index"
      class="flex items-start text-accent-darkest font-light"
    >
      <ArrowCircleRightIcon
        :class="`mr-2 w-6 h-6 flex-shrink-0 ${
          white ? 'text-white' : 'text-accent'
        }`"
      />
      <span>
        {{ item }}
      </span>
    </li>
  </ul>
</template>