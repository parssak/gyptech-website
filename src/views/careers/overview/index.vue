<template>
  <Header />
  <Split title="Employment at Gyptech" flip>
    <img src="@/assets/images/office-inner.png" alt="white building" />
    <template v-slot:extra-content>
      <p>
        Thank you for considering employment with Gypsum Technologies Inc. We
        are a globally recognized leader in the supply of equipment, engineering
        and design services to the Gypsum Wallboard and Plaster Plant
        industry... still not sure who we are? Get to know us a little and
        you’ll see that we’re a great organization with a phenomenal team of
        people. We are driven to innovate, our skilled commissioning teams
        travel the world to provide service to customers and most days we manage
        to have some fun doing it. We believe in long-term career development
        focused towards enhancing expertise. We emphasize teamwork and creating
        a sense of belonging among all our employees. If this sounds like the
        type of place you’d like to work, we’re hiring!<br /><br />
        Gyptech is always interested in hearing from intelligent, motivated
        people who are considering joining our team. If you are interested
        please email
        <a class="text-accent underline" href="mailto:hr@gyptech.ca"
          >hr@gyptech.ca</a
        >
        and
        <b>make sure to put the position you are seeking in the subject line.</b
        ><br /><br />

        Gypsum Technologies Inc. is an equal opportunity employer and we would
        like to thank all applicants for their interest. If you require
        accommodation of disability in the application or interview process,
        please contact us. The application information is available in
        accessible format upon request. <br /><br />

        A copy of Gyptech’s Multi-year AODA accessibility plan is also available
        upon request. <br /><br />

        Gypsum Technologies Inc. (Gyptech) strives to meet the needs of its
        employees and customers with disabilities and is working to remove and
        prevent barriers to accessibility. Gyptech is committed to fulfilling
        our requirements under the Accessibility for Ontarians with Disabilities
        Act, 2005 (AODA). Clients who wish to provide feedback on the way
        Gyptech provides its goods and services to people with disabilities, can
        email hr@gyptech.ca or call the Head Office at 905-567-2000 to speak to
        Human Resources.
      </p>
    </template>
  </Split>

  <div class="bg-accent-lightest relative">
    <img
      src="@/assets/icons/dots-blue.svg"
      class="absolute bottom-0 left-0"
      alt=""
    />
    <img
      src="@/assets/icons/dots-blue.svg"
      class="absolute top-0 right-0"
      alt=""
    />

    <Container>
      <h2 class="text-center mb-16 max-w-3xl mx-auto">
        Gyptech is currently seeking candidates to fill the following positions:
      </h2>
      <div class="rounded-lg shadow-lg bg-white border divide-y-2 max-w-5xl mx-auto">
        <router-link
          :to="{ name: 'careers/post' }"
          v-for="(job, index) in jobs"
          :key="index"
          class="p-6 block hover:bg-accent-lightest cursor-pointer"
        >
          <div
            class="
              flex flex-col
              gap-4
              items-start
              md:flex-row md:items-center
              justify-between
              mb-4
            "
          >
            <a class="font-medium text-lg text-accent underline">{{
              job.title
            }}</a>
            <div class="bg-[#CCE0ED] rounded-md px-3 py-1">
              <p class="text-black text-sm font-normal">{{ job.time }}</p>
            </div>
          </div>
          <div
            class="
              flex flex-col
              gap-4
              items-start
              md:flex-row md:items-
              text-accent-darkest
            "
          >
            <div class="flex items-center">
              <UsersIcon class="h-5 w-5 mr-1" />
              <span class="text-base font-light">
                {{ job.type }}
              </span>
            </div>
            <div class="flex items-center md:ml-6">
              <LocationMarkerIcon class="h-5 w-5 mr-1" />
              <span class="text-base font-light">
                {{ job.location }}
              </span>
            </div>
            <div class="md:ml-auto flex">
              <CalendarIcon class="h-5 w-5 mr-1" />
              Closing on {{ job.date }}
            </div>
          </div>
        </router-link>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from "../../../components/layouts/Container.vue";
import Split from "../../../components/layouts/Split.vue";
import Header from "../../../components/base/Header.vue";
import { UsersIcon } from "@heroicons/vue/solid";
import { LocationMarkerIcon } from "@heroicons/vue/solid";
import { CalendarIcon } from "@heroicons/vue/solid";

const jobs = [
  {
    title: "General Machinist",
    type: "General Labour",
    location: "Canada",
    date: "April 1, 2020",
    time: "Full-time",
  },
  {
    title: "General Machinist",
    type: "General Labour",
    location: "Canada",
    date: "April 1, 2020",
    time: "Full-time",
  },
  {
    title: "General Machinist",
    type: "General Labour",
    location: "Canada",
    date: "April 1, 2020",
    time: "Full-time",
  },
  {
    title: "General Machinist",
    type: "General Labour",
    location: "Canada",
    date: "April 1, 2020",
    time: "Full-time",
  },
  {
    title: "General Machinist",
    type: "General Labour",
    location: "Canada",
    date: "April 1, 2020",
    time: "Full-time",
  },
  {
    title: "General Machinist",
    type: "General Labour",
    location: "Canada",
    date: "April 1, 2020",
    time: "Full-time",
  },
  {
    title: "General Machinist",
    type: "General Labour",
    location: "Canada",
    date: "April 1, 2020",
    time: "Full-time",
  },
];
</script>