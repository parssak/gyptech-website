<template>
  <Header />
  <Split title="Plaster Plants" flip>
    <img src="@/assets/images/millwaste.png" alt="white building">
    <template v-slot:extra-content>
      <ArrowList :items="dunnageContent" class="mb-6" />
    </template>
  </Split>

  <Container>
    <h3>Automated Dunnage Placement Robotics</h3>
    <p>Incorporating industry leading robotics, this fully automated dunnage placement system has been optimized for
      existing pit stackers. Faster dunnage placement, presents an opportunity to modify the stacking sequence,
      resulting
      in a much wider window for stack removal by the fork truck.</p>
    <ArrowList :items="automatedContent" class="mb-6 mt-6" />
  </Container>



  <SplitCTA />

</template>

<script setup>
import Container from '../../../components/layouts/Container.vue'
import SplitCTA from '../../../components/layouts/cta/SplitCTA.vue'
import ArrowList from '../../../components/base/ArrowList.vue'
import Split from '../../../components/layouts/Split.vue'
import Header from '../../../components/base/Header.vue'

const dunnageContent = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
]

const automatedContent = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
]

</script>