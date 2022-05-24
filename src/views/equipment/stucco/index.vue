<template>
  <Header />
  <Breadcrumbs />

  <Split title="Plaster Plants" flip>
    <img src="@/assets/images/millwaste.png" alt="white building" />
    <template v-slot:extra-content>
      <ArrowList :items="content" class="mb-6" />
    </template>
  </Split>
  <SplitCTA />
</template>

<script setup>
import SplitCTA from "../../../components/layouts/cta/SplitCTA.vue";
import ArrowList from "../../../components/base/ArrowList.vue";
import Split from "../../../components/layouts/Split.vue";
import Header from "../../../components/base/Header.vue";
import Breadcrumbs from "@/components/app/steps/Breadcrumbs.vue";

const content = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum",
];
</script>