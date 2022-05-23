<template>
  <Header>

  </Header>

  <Split title="Save Money and Improve Quality"
  description="Save Money and Improve Quality
Gyptech's standalone analysis system provides a portable set of tools to graphically analyze 
temperature rise during set. Optimizing thermal set can produce more consistent, higher quality 
board and reduce the consumption of raw materials, saving you money.
<br><br>
The Thermal Set system runs on any Windows based computer using a USB temperature probe and software 
license key. Achieve better results that can be viewed in an easy to understand graphical interface.  
Analysis and reporting tools combined with historical data create detailed trends that help indicate changes over time.
" flip>
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
];

</script>