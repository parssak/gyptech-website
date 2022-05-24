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
            md:py-20
          "
        >
          <h2 class="text-white">
            Have a question? <br />
            We've got the answer
          </h2>
          <button class="btn btn-xl btn-light">GET IN TOUCH</button>
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
            md:py-20
          "
        >
          <h2 class="text-white">Register for our <br />online catalog</h2>
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
