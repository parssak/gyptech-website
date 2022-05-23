<template>
  <!-- <div class="relative bg-gray-800">
    <div class="h-56 sm:h-72 relative md:absolute md:left-0 md:h-full md:w-1/2">
      <img
        class="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
        alt=""
      />
    </div>
    <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16 ">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2 class="mt-2 text-white mb-0 text-center">Register for our online catalog</h2>
        <div class="mt-8 grid place-items-center">
          <router-link class="btn btn-xl btn-light text-color-accent-dark" :to="{ name: 'contact' }"
            >LEARN MORE</router-link
          >
        </div>
      </div>
    </div>
  </div> -->
  <div class="relative overflow-hidden w-full">
    <div class="grid md:grid-cols-2 absolute">
      <div class="relative h-96 md:h-full">
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/writing.png"
          alt=""
        />
        <div class="absolute inset-0 bg-accent mix-blend-multiply"></div>
      </div>
      <div class="relative h-96 md:h-full">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
          alt=""
        />
        <div class="absolute inset-0 bg-accent-dark mix-blend-multiply"></div>
      </div>
    </div>
    <div class="max-w-7xl relative px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="md:p-6 grid md:grid-cols-2">
        <div class="h-96 md:h-full text-center sm: pt-32 md: pt-3">
          <h2 class="text-white">
            Have a question? <br />
            We've got the answer
          </h2>
          <button class="btn btn-xl btn-light">GET IN TOUCH</button>
        </div>
        <div class="h-96 md:h-full text-center sm: pt-32 md: pt-3">
          <h2 class="text-white">Register for our <br>online catalog</h2>
          <button class="btn btn-xl btn-light">LEARN MORE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ExternalLinkIcon } from "@heroicons/vue/solid";

export default {
  components: {
    ExternalLinkIcon,
  },
};
</script>
