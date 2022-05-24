<template>
  <Header />

  <Breadcrumbs />

  <Split
    description="Gyptech’s industry leading designs are innovative and produce the highest quality output using long board 
  technology at the wet transfer and mini packs at our takeoffs. We supply both low and high speed plants regularly, from 
  line speeds of 9 meters per minute or 30 feet per minute up to 213 meters per minute or 700 feet per minute. Whatever 
  speed you are looking to achieve, Gyptech has a proven solution to fit your needs."
    flip
  >
    <img src="@/assets/images/equipment.png" alt="equipment" />
  </Split>

  <Container>
    <h3>Wet Transfer</h3>
    <p>
      Incorporating industry leading robotics, this fully automated dunnage
      placement system has been optimized for existing pit stackers. Faster
      dunnage placement, presents an opportunity to modify the stacking
      sequence, resulting in a much wider window for stack removal by the fork
      truck.
    </p>
    <ArrowList :items="wetContent" class="mb-6 mt-5" />
  </Container>

  <Split title="Cement Board Production Lines" flip>
    <img src="@/assets/images/millwaste.png" alt="white building" />
    <template v-slot:extra-content>
      <ArrowList :items="cementContent" class="mb-6" />
    </template>
  </Split>

  <SplitCTA />
</template>

<script setup>
import SplitCTA from "../../../components/layouts/cta/SplitCTA.vue";
import ArrowList from "../../../components/base/ArrowList.vue";
import Split from "../../../components/layouts/Split.vue";
import Header from "../../../components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import Breadcrumbs from "@/components/app/steps/Breadcrumbs.vue";

const wetContent = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
];

const cementContent = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
];
</script>