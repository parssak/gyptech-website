<script setup>
import { HomeIcon } from "@heroicons/vue/solid";
import { useRoute } from "vue-router";
import { BASE_URL } from "@/data/utils";
const router = useRoute();
const [_, ...parts] = router.path.replace(BASE_URL, "").split("/");
console.debug(parts);
const paths = parts.map((part, index) => {
  return {
    href: parts.slice(0, index + 1).join("/"),
    name: index === parts.length - 1 ? router.meta.title : part,
  };
});
</script>

<template>
  <div class="py-4 border-b">
    <div
      class="
        max-w-full
        lg:max-w-7xl
        justify-start
        mx-auto
        px-4
        sm:px-6
        flex
        items-center
      "
    >
      <router-link :to="{ name: 'home' }">
        <HomeIcon class="w-5 h-5 text-accent-darkest hover:text-accent" />
      </router-link>

      <router-link
        v-for="(path, index) in paths"
        :to="{ name: path.href }"
        class="capitalize ml-2 group text-accent-darkest truncate"
      >
        <span class="mr-1"> / </span>
        <span
          class="group-hover:wide-underline hover:text-accent"
          :class="index === paths.length - 1 ? 'font-medium text-accent' : ''"
        >
          {{ path.name }}
        </span>
      </router-link>
    </div>
  </div>
</template>