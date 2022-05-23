<template>
  <nav class="
      border-t border-grey-dark
      px-4
      flex
      items-center
      justify-between
      sm:px-0
    ">
    <div class="-mt-px w-0 flex-1 flex">
      <a href="#" class="
          border-t-2 border-transparent
          pt-4
          pr-1
          inline-flex
          items-center
          text-sm
          font-medium
          text-grey-dark
          hover:text-grey hover:border-grey-dark
          transition
        ">
        <ArrowNarrowLeftIcon class="mr-3 h-5 w-5 transition" aria-hidden="true" />
        Previous
      </a>
    </div>
    
    <div class="-mt-px w-0 flex-1 flex justify-end">
      <a href="#" class="
          border-t-2 border-transparent
          pt-4
          pl-1
          inline-flex
          items-center
          text-sm
          font-medium
          text-grey-dark
          hover:text-grey hover:border-grey-dark
          transition
        ">
        Next
        <ArrowNarrowRightIcon class="ml-3 h-5 w-5 transition" aria-hidden="true" />
      </a>
    </div>
  </nav>
</template>

<script setup>
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/vue/solid";

</script>