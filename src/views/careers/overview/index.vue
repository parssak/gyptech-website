<template>
  <Header />
  <Split title="Employment at Gyptech" flip>
    <img src="@/assets/images/office-inner.png" alt="white building">
    <template v-slot:extra-content>
      <p>
        Thank you for considering employment with Gypsum Technologies Inc. We are a globally recognized leader in the
        supply of equipment,
        engineering and design services to the Gypsum Wallboard and Plaster Plant industry... still not sure who we are?
        Get to know us a little and you’ll
        see that we’re a great organization with a phenomenal team of people. We are driven to innovate, our skilled
        commissioning teams travel the world
        to provide service to customers and most days we manage to have some fun doing it. We believe in long-term
        career development focused towards
        enhancing expertise. We emphasize teamwork and creating a sense of belonging among all our employees. If this
        sounds like the type of place you’d
        like to work, we’re hiring!<br><br>
        Gyptech is always interested in hearing from intelligent, motivated people who are considering joining our team.
        If you are interested please email
        <a class="text-accent underline" href="mailto:hr@gyptech.ca">hr@gyptech.ca</a> and <b>make sure to put the
          position you are seeking in the
          subject line.</b><br><br>

        Gypsum Technologies Inc. is an equal opportunity employer and we would like to thank all applicants for their
        interest. If you require accommodation of disability in the application or interview process, please contact us.
        The application information is available in accessible format upon request. <br><br>

        A copy of Gyptech’s Multi-year AODA accessibility plan is also available upon request. <br><br>

        Gypsum Technologies Inc. (Gyptech) strives to meet the needs of its employees and customers with disabilities
        and is working to remove and prevent barriers to accessibility. Gyptech is committed to fulfilling our
        requirements under the Accessibility for Ontarians with Disabilities Act, 2005 (AODA). Clients who wish to
        provide feedback on the way Gyptech provides its goods and services to people with disabilities, can email
        hr@gyptech.ca or call the Head Office at 905-567-2000 to speak to Human Resources.
      </p>
    </template>
  </Split>

  <div class="bg-accent-lightest">
    <Container>
      <div class="todo text-red-600">Spacing is weird, aw man -_____-</div>
      <h2 class="text-center mb-16">Gyptech is currently seeking candidates to fill the following positions:</h2>
      <div class="grid">
        <div v-for="(job, index) in jobs" :key="index" class="flex flex-col bg-white p-4 border-2">
          <div class="flex justify-between">
            <a class="font-bold text-accent underline">{{ job.title }}</a>
            <div class="bg-accent rounded-md bg-opacity-50 px-2 py-1">
              <p class="text-black">{{ job.time }}</p>
            </div>
          </div>
          <div class="flex justify-between text-accent-darkest">
            <div>
              <UsersIcon class="h-4 w-4 opacity-60" />
              {{ job.type }}
              <LocationMarkerIcon class="h-4 w-4 opacity-60" />
              {{ job.location }}

            </div>
            <div>
              <CalendarIcon class="h-4 w-4 opacity-60" />
              Closing on {{ job.date }}
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from '../../../components/layouts/Container.vue'
import Split from '../../../components/layouts/Split.vue'
import Header from '../../../components/base/Header.vue'
import { UsersIcon } from '@heroicons/vue/solid'
import { LocationMarkerIcon } from '@heroicons/vue/solid'
import { CalendarIcon } from '@heroicons/vue/solid'

const jobs = [
  {
    title: "General Machinist",
    type: "General Labour",
    location: "Canada",
    date: "April 1, 2020",
    time: "Full-time"
  },
  {
    title: "General Machinist",
    type: "General Labour",
    location: "Canada",
    date: "April 1, 2020",
    time: "Full-time"
  },
  {
    title: "General Machinist",
    type: "General Labour",
    location: "Canada",
    date: "April 1, 2020",
    time: "Full-time"
  },
  {
    title: "General Machinist",
    type: "General Labour",
    location: "Canada",
    date: "April 1, 2020",
    time: "Full-time"
  },
  {
    title: "General Machinist",
    type: "General Labour",
    location: "Canada",
    date: "April 1, 2020",
    time: "Full-time"
  },
  {
    title: "General Machinist",
    type: "General Labour",
    location: "Canada",
    date: "April 1, 2020",
    time: "Full-time"
  },
  {
    title: "General Machinist",
    type: "General Labour",
    location: "Canada",
    date: "April 1, 2020",
    time: "Full-time"
  }
]

</script>