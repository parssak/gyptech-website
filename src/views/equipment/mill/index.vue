<template>
  <Header>
    
  </Header>

  <Split title="Plaster Plants"
    description="Gyptech has designed and built a variety of mill systems. We have extensive experience in each approach, 
    working with all major mill types. From kettles to flash calcining, cage mills, hammer mills, ring ball mills and imp mills, 
    our knowledge and experience in the industry allows us to design a system that best accommodates your individual requirements." flip>
    <img src="@/assets/images/millwaste.png" alt="white building">
    <template v-slot:extra-content>
      <ArrowList :items="content" class="mb-6" />
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
  "Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit",
  "Lorem ipsum dolor sit",
];

</script>