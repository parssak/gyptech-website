<template>
  <Header />

  <Split
    title="Our History"
    description="Since being incorporated in 1993, Gyptech has become a global leader in the design, construction, and commissioning of wallboard equipment and services. We have developed a network of highly experienced technical professionals dedicated to customer satisfaction. Our team of management, engineers, designers, operations and maintenance personnel guarantees your success through state-of –the-art design and manufacturing. Many of our employees have years of experience in the gypsum industry, both making gypsum board and designing and maintaining equipment. Put this experience to work for you. <br><br>

With offices in North America, Europe and South America, we have been responsible for supplying the equipment for the majority of new production volumes over the last decade. Our experience designing and commissioning equipment globally, means that we are prepared to meet the unique requirements presented by each of our customers. Our wallboard plants serve a variety of production capacities and can be tailored to surpass expectations of safety, quality and performance in any market. We look forward to partnering with you to start making gypsum products for your market today."
    flip
  >
    <img src="@/assets/images/office.png" alt="office building" />
  </Split>
  
  <Container>
    <div class="bg-accent-dark text-center p-48">
      <h2 class="text-white">Your Success is Our Success</h2>
      <p class="text-white">
        We know that dedication to our customers means more than just designing
        great equipment. It also means ensuring that our customers have the tools
        they need to operate their equipment effectively. That's why our highly
        experienced teams are equipped with industry leading training programs,
        designs built with safety in mind and controls systems that reduce
        downtime and help to quickly identify potential problems before they
        happen. Gyptech is committed to supplying equipment that is energy
        efficient, environmentally friendly, and cost effective. Our custom
        machinery is built for lower power consumption to reduce energy needs,
        optimization of raw material usage including waste reclaim systems. All of
        which ultimately save you money on operating costs. We are committed to
        ensuring your company's cleaner, greener, more profitable future. At
        Gyptech we recognize that your success is our success.
      </p>
    </div>
  </Container>
  
</template>

<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import Split from "@/components/layouts/Split.vue";
</script>
