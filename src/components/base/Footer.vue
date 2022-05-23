<template>
  <footer class="bg-accent" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8">
        <router-link :to="{ name: 'home' }">
          <img class="h-16 w-auto" src="@/assets/icons/logo-white.svg" alt="Company Name" />
        </router-link>
        <div class="grid sm:grid-cols-3 lg:gap-64 sm: gap-32">
          <div>
            <h3 class="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Navigation</h3>
            <div class="space-y-2">
              <router-link
                v-for="route in navigation"
                :key="route.label"
                class="
                  block
                  with-underline
                  w-max
                  transition
                  text-white
                  uppercase
                "
                :to="route.path"
                >{{ route.label }}</router-link
              >
            </div>
          </div>
          <div>
            <h3 class="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h3>
            <div class="space-y-2">
              <router-link
          class="text-sm max-w-sm text-white flex items-center"
          :to="{ name: home }"
        >
          CONTACT GYPTECH
        </router-link>
        <router-link
          class="text-sm max-w-sm text-white flex items-center"
          :to="{ name: home }"
        >
          CAREERS
        </router-link>
            </div>
          </div>
        <div class="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Connect</div>
        <div class="grid grid-cols-3">
        <div class="h-8 w-8 bg-white"> icon</div>
        <div class="h-8 w-8 bg-white">icon</div>
        <div class="h-8 w-8 bg-white">icon</div>
        </div>
        </div>
      </div>
      <div
        class="
          mt-8
          pt-8
          border-t border-gray-200
          md:flex md:items-center md:justify-between
        "
      >
        <p class="text-base text-gray-400">
           Gyptech &copy; 2022 | All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { navigation } from "@/data";

export default {
  setup() {
    return { navigation };
  },
};
</script>
