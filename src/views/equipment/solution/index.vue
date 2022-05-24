<template>
  <Header />
  <Breadcrumbs />

  <Split
    title="Wallboard Plants"
    description="Our complete turn-key solutions for automated board plants can include building design, equipment supply, controls systems, 
      project management, commissioning, and post construction support. We established a reputation in high-speed wallboard plants and have since 
      made advancements into all areas of board production. We supply a full range of line speeds and can configure a plant to your specifications 
      and budget. Our plant designs take you from raw gypsum to a high quality finished board, ensuring success each step of the process."
    flip
  >
    <img src="@/assets/images/whiteBuilding.png" alt="white building" />
  </Split>

  <Container>
    <h3>Commissioning for Success</h3>
    <p>
      Our service continues with expert mechanical and electrical commissioning
      assistance, ensuring accelerated project startups with superior
      performance. We recognize the value of knowledgeable, accomplished
      commissioning teams that can get your business up and running faster. With
      Gyptech, your plant will be up and running in less time, your staff will
      be better trained, and you will be seeing a faster return on your
      investment.
    </p>
    <h3 class="mt-7">Cement Board Production Lines</h3>
    <p>
      Gyptech can offer a continuous production line to make cement board. The
      process incorporates the latest continuous systems resulting in a high
      quality, low cost board.
    </p>
  </Container>

  <Split
    title="Plaster Plants"
    description="Our complete turn-key solutions for automated board plants can include building design, equipment supply, controls systems, 
      project management, commissioning, and post construction support. We established a reputation in high-speed wallboard plants and have since 
      made advancements into all areas of board production. We supply a full range of line speeds and can configure a plant to your specifications 
      and budget. Our plant designs take you from raw gypsum to a high quality finished board, ensuring success each step of the process."
    flip
  >
    <img src="@/assets/images/whiteBuilding.png" alt="white building" />
    <template v-slot:extra-content>
      <ArrowList :items="content" class="mb-6" />
    </template>
  </Split>

  <SplitCTA />
</template>

<script setup>
import SplitCTA from "@/components/layouts/cta/SplitCTA.vue";
import ArrowList from "@/components/base/ArrowList.vue";
import Container from "@/components/layouts/Container.vue";
import Header from "@/components/base/Header.vue";
import Split from "@/components/layouts/Split.vue";
import Breadcrumbs from "@/components/app/steps/Breadcrumbs.vue";

const content = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
];

</script>