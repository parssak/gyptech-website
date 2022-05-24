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
    <h3>Dryer</h3>
    <ArrowList :items="dryerContent" class="mb-6 mt-5" />
  </Container>

  <Container>
    <h3>Heat Exchangers</h3>
    <ArrowList :items="heatContent" class="mb-6 mt-5" />
  </Container>
</template>

<script setup>
import ArrowList from "../../../components/base/ArrowList.vue";
import Container from "../../../components/layouts/Container.vue";
import Split from "../../../components/layouts/Split.vue";
import Header from "../../../components/base/Header.vue";
import Breadcrumbs from "@/components/app/steps/Breadcrumbs.vue";

const dryerContent = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
];

const heatContent = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nunc in porttitor dignissim. Phasellus varius pharetra nisi, eu condimentum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nunc in porttitor dignissim. Phasellus varius pharetra nisi, eu condimentum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nunc in porttitor dignissim. Phasellus varius pharetra nisi, eu condimentum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum nunc in porttitor dignissim. Phasellus varius pharetra nisi, eu condimentum.",
];
</script>