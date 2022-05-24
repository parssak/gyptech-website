<script setup>
import { ArrowCircleRightIcon } from "@heroicons/vue/outline";
import { defineProps } from "vue";

const props = defineProps({
  items: Array,
  white: Boolean,
  red: Boolean,
  pure: Boolean,
});
</script>

<template>
  <ul class="unstyled space-y-4">
    <li
      v-for="(item, index) in props.items"
      :key="index"
      class="flex items-start text-accent-darkest font-light text-lg"
    >
      <ArrowCircleRightIcon
        :class="`mr-2 w-7 h-7 flex-shrink-0 ${
          white ? 'text-white' : red ? 'text-accent-red' : 'text-accent'
        }`"
      />
      <span :class="pure ? 'text-white' : ''">
        {{ item }}
      </span>
    </li>
  </ul>
</template>