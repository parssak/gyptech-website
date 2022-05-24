<template>
  <Header />

  <Container>
    <Split title="Depending on your needs, Gyptech offers the following:" flip>
      <template v-slot:extra-content>
        <ArrowList :items="content" class="mb-6" />
      </template>
      <img src="@/assets/images/fence.png" alt="fence" />
    </Split>

    <Split title="Gyptech supplies wallboard equipment including:">
      <img src="@/assets/images/fence.png" alt="fence" />
      <template v-slot:extra-content>
        <ArrowList :items="content" class="mb-6" />
      </template>
    </Split>
  </Container>

  <Container class="bg-accent-lightest">
    <div class="grid lg:grid-cols-3 gap-8">
      <div>
        <h2>View Equipment Categories</h2>
      </div>
      <div class="sm:col-span-2 grid sm:grid-cols-2 gap-8">
        <div
          v-for="(item, index) in categories"
          :key="index"
          class="flex flex-col text-left"
        >
          <router-link :to="{ name: item.name }">
            <h4
              class="text-accent wide-underline font-medium tracking-wider mb-2"
            >
              {{ item.title }}
            </h4>
          </router-link>

          <p class="text-base">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import ArrowList from "../../../components/base/ArrowList.vue";
import Split from "../../../components/layouts/Split.vue";
import Container from "../../../components/layouts/Container.vue";
import Header from "../../../components/base/Header.vue";

const categories = [
  {
    title: "COMPLETE SOLUTIONS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit eu massa viverra libero.",
    name: "equipment/solution",
  },
  {
    title: "STUCCO SYSTEMS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit eu massa viverra libero.",
    name: "equipment/stucco",
  },
  {
    title: "PAPER DELIVERY SYSTEMS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit eu massa viverra libero.",
    name: "equipment/paper",
  },
  {
    title: "DRYERS & HEAT EXCHANGERS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit eu massa viverra libero.",
    name: "equipment/dryers",
  },
  {
    title: "INSTRUMENTS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit eu massa viverra libero.",
    name: "equipment/instruments",
  },
  {
    title: "MANUFACTURING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit eu massa viverra libero.",
    name: "equipment/manufacturing",
  },
  {
    title: "MILL & CALCINING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit eu massa viverra libero.",
    name: "equipment/mill",
  },
  {
    title: "MIXERS & FORMING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit eu massa viverra libero.",
    name: "equipment/mixers",
  },
  {
    title: "BOARD HANDLING SYSTEMS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit eu massa viverra libero.",
    name: "equipment/board",
  },
  {
    title: "DUNNAGE SYSTEMS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit eu massa viverra libero.",
    name: "equipment/dunnage",
  },
  {
    title: "CONTROL SYSTEMS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit eu massa viverra libero.",
    name: "equipment/solution",
  },
];

const content = [
  "Combined Wallboard / Plaster Plants with Shared Stucco Processing",
  "Combined Wallboard / Plaster Plants with Shared Stucco Processing",
  "Combined Wallboard / Plaster Plants with Shared Stucco Processing",
  "Combined Wallboard / Plaster Plants with Shared Stucco Processing",
  "Combined Wallboard / Plaster Plants with Shared Stucco Processing",
  "Combined Wallboard / Plaster Plants with Shared Stucco Processing",
  "Combined Wallboard / Plaster Plants with Shared Stucco Processing",
  "Combined Wallboard / Plaster Plants with Shared Stucco Processing",
  "Combined Wallboard / Plaster Plants with Shared Stucco Processing",
  "Combined Wallboard / Plaster Plants with Shared Stucco Processing",
];
</script>