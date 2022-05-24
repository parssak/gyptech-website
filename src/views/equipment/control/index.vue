<template>
  <Header />
  <Breadcrumbs />

  <Split
    description="Save Money and Improve Quality
Gyptech's standalone analysis system provides a portable set of tools to graphically analyze 
temperature rise during set. Optimizing thermal set can produce more consistent, higher quality 
board and reduce the consumption of raw materials, saving you money.
<br><br>
The Thermal Set system runs on any Windows based computer using a USB temperature probe and software 
license key. Achieve better results that can be viewed in an easy to understand graphical interface.  
Analysis and reporting tools combined with historical data create detailed trends that help indicate changes over time.
"
    flip
  >
    <img src="@/assets/images/millwaste.png" alt="white building" />
  </Split>

  <Container>
    <h2>Hardware Platforms</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at velit
      nec odio congue bibendum vitae non mi. Donec eget elit erat. Sed et
      ultrices lorem, eget dapibus purus. Phasellus.
    </p>
    <h2 class="mt-10">Software Architecture</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales
      felis id tortor feugiat ultricies. Phasellus dignissim lectus ut eros
      pulvinar facilisis. Cras consequat neque dui, in euismod arcu faucibus
      nec. Ut consequat pretium elementum. Quisque porttitor urna sagittis
      vulputate.
    </p>
  </Container>

  <Split
    description="Save Money and Improve Quality
Gyptech's standalone analysis system provides a portable set of tools to graphically analyze 
temperature rise during set. Optimizing thermal set can produce more consistent, higher quality 
board and reduce the consumption of raw materials, saving you money.
<br><br>
The Thermal Set system runs on any Windows based computer using a USB temperature probe and software 
license key. Achieve better results that can be viewed in an easy to understand graphical interface.  
Analysis and reporting tools combined with historical data create detailed trends that help indicate changes over time.
"
    flip
  >
    <img src="@/assets/images/millwaste.png" alt="white building" />
    <template v-slot:extra-content>
      <ArrowList :items="machineControls" class="mb-6 mt-5" />
    </template>
  </Split>

  <Container>
    <h2>Process Analysis and Optimization</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at velit
      nec odio congue bibendum vitae non mi. Donec eget elit erat. Sed et
      ultrices lorem, eget dapibus purus. Phasellus.
    </p>
    <ArrowList :items="processContent" class="mb-6 mt-5" />
  </Container>

  <Split
    description="Save Money and Improve Quality
Gyptech's standalone analysis system provides a portable set of tools to graphically analyze 
temperature rise during set. Optimizing thermal set can produce more consistent, higher quality 
board and reduce the consumption of raw materials, saving you money.
<br><br>
The Thermal Set system runs on any Windows based computer using a USB temperature probe and software 
license key. Achieve better results that can be viewed in an easy to understand graphical interface.  
Analysis and reporting tools combined with historical data create detailed trends that help indicate changes over time.
"
    flip
  >
    <img src="@/assets/images/millwaste.png" alt="white building" />
    <template v-slot:extra-content>
      <ArrowList :items="maintenanceContent" class="mb-6 mt-5" />
    </template>
  </Split>

  <Container>
    <h2>Business Management Systems</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa turpis,
      convallis non mollis dictum, blandit vitae massa. Duis accumsan, metus sit
      amet luctus rutrum, sapien leo pulvinar lacus, ac pharetra ipsum arcu sed
      nulla. Sed consequat tincidunt felis, eu sagittis turpis lacinia eget.
      Quisque suscipit metus at sem fermentum.
    </p>
    <ArrowList :items="processContent" class="mb-6 mt-5" />
  </Container>

  <SplitCTA />
</template>

<script setup>
import SplitCTA from "../../../components/layouts/cta/SplitCTA.vue";
import ArrowList from "../../../components/base/ArrowList.vue";
import Container from "../../../components/layouts/Container.vue";
import Header from "../../../components/base/Header.vue";
import Split from "../../../components/layouts/Split.vue";
import Breadcrumbs from "@/components/app/steps/Breadcrumbs.vue";

const machineControls = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing.",
];

const processContent = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing.",
];

const maintenanceContent = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing.",
];
</script>