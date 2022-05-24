<template>
  <Header />
  <Breadcrumbs />
  <Container>
    <h2>Remote Service Agreement</h2>
    <p>
      Starting a support plan creates an account for tracking and processing
      support requests. This plan eliminates the need to process individual
      purchase orders for minor modifications, troubleshooting, and technical
      support. The result is improved efficiency for both organizations and the
      ability to quickly and efficiently handle these types of requests. Best of
      all, you will have the confidence of knowing that our remote service will
      be performed by the same team of skilled and experienced Gyptech engineers
      that install and comission equipment.
    </p>
    <p class="mt-4 mb-4">
      Gyptech can provide expert assistance quickly, conveniently, and securely
      to assist with many tasks, including the following:
    </p>
    <ArrowList :items="content" class="mb-6" />
    <p class="mt-4 mb-4">Some of the benefits of remote service:</p>
    <ArrowList :items="content" class="mb-6" />
  </Container>
  <Split
    title="Remote Technician"
    description="Gyptech engineers can access PLCs, HMI, drives and devices in your plant using a secure remote connection. With this service, Gyptech can provide expert assistance quickly, conveniently, and securely to assist with many maintenance and production issues."
    flip
    class="pt-0 pb-0"
  >
    <img src="@/assets/images/woman-hardhat.png" alt="woman hardhat" />
  </Split>
  <Container>
    <h2>Service Coach</h2>
    <p>
      Through a downloadable app Gyptech engineers can provide real-time expert
      assistance for maintenance tasks, operational issues and process
      improvements collaborating via high quality video conferencing. With this
      service the work is performed by plant personnel, under the guidance of a
      Gyptech engineer providing direction on likely causes, suggested fixes,
      and background knowledge of any process involved.
    </p>
  </Container>
  <Split
    title="Secure Connectivity"
    description="Depending on the need, your control system can be accessed in cooperation with your existing corporate VPN controls, a Gyptech supplied hardware-based VPN device or through the use of a shared desktop platform such as LogMeIn. Whichever solution you choose your security is one of our top priorities. We are dedicated to providing solutions that provide high levels of data security. We can also design systems with hardwired switches, meaning you are always in control of when your system is accesses."
    flip
    class="pt-0 pb-0"
  >
    <template v-slot:extra-content>
      <ArrowList :items="content" class="mb-6" />
      <p class="pb-2">
        Contact Gyptech today to start leveraging these powerful technical
        support solutions. <b>Call: </b>
        <a class="text-accent" href="tel:+1 905-567-2000 ext.324"
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
</template>

<script setup>
import Split from "../../../components/layouts/Split.vue";
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import ArrowList from "../../../components/base/ArrowList.vue";
import Breadcrumbs from "@/components/app/steps/Breadcrumbs.vue";

const content = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
];
</script>
