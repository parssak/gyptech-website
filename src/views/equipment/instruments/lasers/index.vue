<template>
  <Header />
  <Breadcrumbs />

  <Container>
    <h2>Affordable Board Profiling</h2>
    <p>
      Gyptech laser dimensioning systems are an affordable solution for
      continuous, real-time board thickness and taper monitoring. The user
      interface provides an intuitive and effective comparison of the current
      board profile with product specific tolerances. <br /><br />
      As well as providing real time data, the board profile information can be
      archived or exported in many standard formats. Systems can be integrated
      into your current operation quickly and easily, with minimal need for
      additional training. Ask about our custom installation options. Developed
      in partnership with Vision Engineering Inc. combining laser dimensioning
      and gypsum industry experience.
    </p>
    <ArrowList :items="content" class="mb-6 mt-5" />
  </Container>

  <SplitCTA />
</template>

<script setup>
import SplitCTA from "../../../../components/layouts/cta/SplitCTA.vue";
import ArrowList from "../../../../components/base/ArrowList.vue";
import Container from "../../../../components/layouts/Container.vue";
import Header from "../../../../components/base/Header.vue";
import Breadcrumbs from "@/components/app/steps/Breadcrumbs.vue";

const content = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];
</script>