<template>
  <div class="relative overflow-hidden w-full">
    <div class="grid md:grid-cols-2 absolute inset-0">
      <div class="relative h-96 md:h-full">
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/writing.png"
          alt=""
        />
        <div class="absolute inset-0 bg-accent-dark mix-blend-multiply"></div>
      </div>
      <div class="relative h-96 md:h-full">
        <img
          class="w-full h-full object-cover"
          src="@/assets/images/right-col.png"
          alt=""
        />
        <div class="absolute inset-0 bg-accent mix-blend-multiply"></div>
      </div>
    </div>
    <div class="max-w-7xl relative px-4 mx-auto">
      <div class="md:p-6 grid md:grid-cols-2">
        <div
          class="
            h-96
            md:h-full
            px-4
            text-center
            flex flex-col
            items-center
            justify-center
            md:py-24
            lg:py-48
          "
        >
          <h2 class="text-white">
            Have a question? <br />
            We've got the answer
          </h2>
          <router-link :to="{ name: 'contact' }" class="btn btn-xl btn-light"
            >GET IN TOUCH</router-link
          >
        </div>
        <div
          class="
            h-96
            md:h-full
            px-4
            text-center
            flex flex-col
            items-center
            justify-center
            md:py-24
            lg:py-48
          "
        >
          <h2 class="text-white">Register for our <br />online catalog</h2>
          <router-link :to="{ name: 'contact' }" class="btn btn-xl btn-light">LEARN MORE</router-link>
        </div>
      </div>
    </div>
    <img
      src="@/assets/icons/dots.svg"
      class="absolute bottom-0 left-0"
      alt=""
    />
    <img src="@/assets/icons/dots.svg" class="absolute top-0 right-0" alt="" />
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
