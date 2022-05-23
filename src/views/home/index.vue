<template>
  <HeroImageOverlay>
    <h1 class="text-accent-lightest leading-tight">
      Turn-Key Solutions <br />
      <span class="font-normal">for Wallboard Manufacturing</span>
    </h1>
    <h2 class="text-accent-lightest mt-2"></h2>
    <p class="text-accent-lightest mt-4 mb-8 max-w-lg">
      Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
      cupidatat commodo ad non deserunt suntui irure qui lorem.
    </p>
    <router-link to="#" class="btn btn-light btn-xl"> learn more </router-link>
  </HeroImageOverlay>

  <OverlapImageCTA />

  <Container class="bg-accent-lightest">
    <h2 class="mt-4">At A Glance</h2>
    <div class="grid lg:grid-cols-4 gap-8 sm: grid-cols-2">
      <div v-for="(item, index) in glance" :key="index">
        <img class="rounded-lg" :src="item.image" alt="" />
        <h3 class="text-lg mb-4 mt-4">{{ item.title }}</h3>
        <p class="text-sm max-w-sm mb-4">
          {{ item.description }}
        </p>
        <router-link
          class="text-sm max-w-sm text-accent flex items-center mb-16"
          :to="{ name: item.path }"
        >
          Learn More<ArrowRightIcon class="h-4 w-4 ml-2" />
        </router-link>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "@/components/layouts/Container.vue";
import HeroImageOverlay from "@/components/layouts/hero/HeroImageOverlay.vue";
import OverlapImageCTA from "@/components/layouts/cta/OverlapImageCTA.vue";
import { ArrowRightIcon } from "@heroicons/vue/solid";

const getImage = (name) => {
  return new URL(`../../assets/${name}`, import.meta.url).href;
};

const glance = [
  {
    image: getImage("/images/fence.png"),
    title: "Wallboard & plaster Plants",
    description:
      "Turnkey or upgrade, our complete solutions take you from raw gypsum to a superior finished product.",
    path: "home",
  },
  {
    image: getImage("/images/fence.png"),
    title: "Why Choose Gyptech?",
    description:
      "Our plants lead the industry for a reason; superior machinery backed by seasoned professionals.",
    path: "home",
  },
  {
    image: getImage("/images/fence.png"),
    title: "Gyptech Equipment",
    description:
      "We supply only equipment that adheres to our strict standard of quality and performance.",
    path: "home",
  },
  {
    image: getImage("/images/fence.png"),
    title: "Gyptech Replacement Parts",
    description:
      "Gyptech is making it easier to order spare parts. Learn more about our customer service department.",
    path: "home",
  },
];
</script>
