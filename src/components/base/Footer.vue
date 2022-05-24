<template>
  <footer class="bg-accent" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto pb-8 px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8 py-16">
        <div>
          <router-link :to="{ name: 'home' }">
            <img
              class="h-16 w-auto"
              src="@/assets/icons/logo-white.svg"
              alt="Gyptech"
            />
          </router-link>
          <img
            class="h-16 mt-8 w-auto"
            src="@/assets/images/cert.png"
            alt="ignition gold certified integrator"
          />
        </div>
        <div class="grid md:col-span-2 sm:grid-cols-3 gap-8">
          <div>
            <h3 class="mb-4 text-lg font-semibold tracking-wider text-white">
              Navigation
            </h3>
            <div class="space-y-4">
              <router-link
                v-for="route in navigation"
                :key="route.label"
                class="
                  block
                  w-max
                  transition
                  text-white
                  uppercase
                  tracking-wider
                "
                :to="{ name: route.name }"
              >
                <span class="hover:text-accent-light">
                  {{ route.label }}
                </span>
              </router-link>
            </div>
          </div>
          <div>
            <h3 class="mb-4 text-lg font-semibold tracking-wider text-white">
              Contact
            </h3>
            <div class="space-y-4">
              <router-link
                class="
                  block
                  w-max
                  transition
                  text-white
                  uppercase
                  tracking-wider
                  hover:text-accent-light
                "
                :to="{ name: 'contact' }"
              >
                CONTACT GYPTECH
              </router-link>
              <router-link
                class="
                  block
                  w-max
                  transition
                  text-white
                  uppercase
                  tracking-wider
                  hover:text-accent-light
                "
                :to="{ name: 'careers' }"
              >
                CAREERS
              </router-link>
            </div>
          </div>
          <div>
            <h3 class="mb-4 text-lg font-semibold tracking-wider text-white">
              Connect
            </h3>
            <div class="flex items-center space-x-5">
              <img class="w-7 h-7" src="@/assets/icons/social-1.svg" alt="" />
              <img class="w-7 h-7" src="@/assets/icons/social-2.svg" alt="" />
              <img class="w-7 h-7" src="@/assets/icons/social-3.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          mt-8
          pt-8
          border-t border-white
          md:flex md:items-center md:justify-between
        "
      >
        <p class="text-base text-white">
          Gyptech &copy; 2022 | All rights reserved.
        </p>
        <div class="text-white flex items-center space-x-3 font-light">
          <a href="#" class="underline text-white">Privacy Policy</a>
          <div>|</div>
          <a href="#" class="underline text-white">Terms and Conditions</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { navigation } from "@/data";

export default {
  setup() {
    return {
      navigation: [
        navigation[0],
        navigation[1],
        navigation[2],
        navigation[3],
        navigation[4],
      ],
    };
  },
};
</script>
