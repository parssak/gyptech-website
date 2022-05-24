<template>
  <Container>
    <h2>General Machinist</h2>
    <div class="flex flex-col sm:flex-row gap-6">
      <div class="flex items-center text-accent-darkest">
        <UsersIcon class="h-6 w-6 mr-2" />
        <p>General Labour</p>
      </div>
      <div class="flex items-center text-accent-darkest">
        <LocationMarkerIcon class="h-6 w-6 mr-2" />
        <p>Canada</p>
      </div>
      <div class="flex items-center text-accent-darkest">
        <CalendarIcon class="h-6 w-6 mr-2" />
        <p>Closing on April 1, 2022</p>
      </div>
    </div>
    <p class="mt-6">
      Gyptech is seeking a General Machinist to join our team at our newly
      upgraded manufacturing facility.
    </p>
    <h3 class="mt-6 font-semibold text-2xl">Skill Requirements</h3>
    <ul class="mt-6">
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    </ul>
    <h3 class="mt-6 font-semibold text-2xl">Responsibilities</h3>
    <ul class="mt-6">
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    </ul>
    <h3 class="mt-6 font-semibold text-2xl">Responsibilities</h3>
    <ul class="mt-6">
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    </ul>
    <h3 class="mt-6 font-semibold text-2xl">Additional Information</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa turpis,
      convallis non mollis dictum, blandit vitae massa. Duis accumsan, metus sit
      amet luctus rutrum
    </p>
    <button class="btn btn-xl btn-light mt-12">Apply for this position</button>
  </Container>
</template>

<script setup>
import Container from "../../../components/layouts/Container.vue";
import { UsersIcon } from "@heroicons/vue/solid";
import { LocationMarkerIcon } from "@heroicons/vue/solid";
import { CalendarIcon } from "@heroicons/vue/solid";
</script>