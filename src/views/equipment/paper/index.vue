<template>
  <Header>
    
  </Header>

  <Split title="Plaster Plants"
    description="Our focus on the wall board industry allows for continued enhancement of our splicers and roll stands. 
    Both are specifically designed to deliver performance for gypsum board manufacturers. The result is extremely precise 
    paper delivery and tension control with minimal downtime. Gyptech splicers implement many proven enhancements including:" flip>
    <img src="@/assets/images/millwaste.png" alt="white building">
    <template v-slot:extra-content>
      <ArrowList :items="content" class="mb-6 mt-5" />
    </template>
  </Split>
  <SplitCTA />
</template>

<script setup>
import SplitCTA from '../../../components/layouts/cta/SplitCTA.vue'
import ArrowList from '../../../components/base/ArrowList.vue'
import Split from '../../../components/layouts/Split.vue'
import Header from '../../../components/base/Header.vue'

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