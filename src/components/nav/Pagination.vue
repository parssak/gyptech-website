<template>
  <nav
    class="
      border-t border-grey-dark
      px-4
      flex
      items-center
      justify-between
      sm:px-0
      uppercase
      font-light
      tracking-wider
    "
  >
    <div class="-mt-px w-0 flex-1 flex">
      <a
        href="#"
        class="
          border-t-2 border-transparent
          pt-4
          pr-1
          inline-flex
          items-center
          text-grey-dark
          hover:text-grey hover:border-grey-dark
          transition
        "
      >
        <ArrowLeftIcon class="mr-3 h-5 w-5 transition" aria-hidden="true" />
        Previous
      </a>
    </div>
    <div class="hidden md:-mt-px md:flex">
      <a
        href="#"
        class="
          border-transparent
          text-grey-dark
          hover:text-grey hover:border-grey
          border-t-2
          pt-4
          px-4
          inline-flex
          items-center
        "
      >
        1
      </a>
      <!-- Current: "border-accent text-accent", Default: "border-transparent text-grey-dark hover:text-grey hover:border-grey" -->
      <a
        href="#"
        class="
          border-accent
          text-accent
          border-t-2
          pt-4
          px-4
          inline-flex
          items-center
        "
        aria-current="page"
      >
        2
      </a>
      <a
        href="#"
        class="
          border-transparent
          text-grey-dark
          hover:text-grey hover:border-grey
          border-t-2
          pt-4
          px-4
          inline-flex
          items-center
        "
      >
        3
      </a>
      <span
        class="
          border-transparent
          text-grey-dark
          border-t-2
          pt-4
          px-4
          inline-flex
          items-center
        "
      >
        ...
      </span>
      <a
        href="#"
        class="
          border-transparent
          text-grey-dark
          hover:text-grey hover:border-grey
          border-t-2
          pt-4
          px-4
          inline-flex
          items-center
        "
      >
        8
      </a>
      <a
        href="#"
        class="
          border-transparent
          text-grey-dark
          hover:text-grey hover:border-grey
          border-t-2
          pt-4
          px-4
          inline-flex
          items-center
        "
      >
        9
      </a>
      <a
        href="#"
        class="
          border-transparent
          text-grey-dark
          hover:text-grey hover:border-grey
          border-t-2
          pt-4
          px-4
          inline-flex
          items-center
        "
      >
        10
      </a>
    </div>
    <div class="-mt-px w-0 flex-1 flex justify-end">
      <a
        href="#"
        class="
          border-t-2 border-transparent
          pt-4
          pl-1
          inline-flex
          items-center
          text-grey-dark
          hover:text-grey hover:border-grey-dark
          transition
        "
      >
        Next
        <ArrowRightIcon class="ml-3 h-5 w-5 transition" aria-hidden="true" />
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/solid";
</script>