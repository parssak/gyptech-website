<template>
  <Header />

  <Split
    title="Customer Service"
    description="Gyptech is committed to building lasting relationships with our customers. Our service continues beyond delivery including installation and operation. Our expert support staff have real world experience in production, fabrication and commissioning. They have unique insights and the knowledge to provide fast, accurate advice and support for your facility. "
    flip
  >
    <img src="@/assets/images/woman-hardhat.png" alt="woman hardhat" />
  </Split>
  <Container>
    <h2>Aftermarket Replacement Parts</h2>
    <p>
      Gyptech is pleased to provide the parts, knowledge and expertise to assist
      with all your plant's maintenance and upgrade needs. We supply quality
      replacement parts. Leverage our global reach and purchasing power to get
      the right parts at a great price.
    </p>
  </Container>
  <Split title="Our spare part supply includes:" flip>
    <template v-slot:extra-content>
      <ArrowList :items="content" class="mb-6" />
      <p>
        Contact a representative for more details: <br />
        <b>Call: </b>
        <a class="text-accent" href="tel:+1 905-567-2000p324"
          >+1 905-567-2000 ext.324</a
        >
        or <b>Email: </b>
        <a class="text-accent" href="mailto:parts@gyptech.ca"
          >parts@gyptech.ca</a
        >
      </p>
    </template>
    <img src="@/assets/images/woman-hardhat.png" alt="woman hardhat" />
  </Split>

  <SplitCTA />
</template>

<script setup>
import ArrowList from "../../../components/base/ArrowList.vue";
import Split from "../../../components/layouts/Split.vue";
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header.vue";
import SplitCTA from "@/components/layouts/cta/SplitCTA.vue";

const content = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
];
</script>
