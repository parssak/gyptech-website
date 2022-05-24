<template>
  <HeroImageOverlay>
    <template v-slot:background>
      <div class="absolute inset-0">
        <img
          src="@/assets/images/oasis-hero.png"
          alt=""
          class="w-full h-full object-cover flipped"
        />
      </div>
      <div
        class="absolute inset-0 bg-black opacity-60 mix-blend-multiply"
      ></div>
      <div
        class="
          absolute
          inset-0
          bg-gradient-to-t
          from-accent-red
          via-accent-red
          to-accent
          mix-blend-overlay
        "
      ></div>
      <div
        class="
          absolute
          inset-x-0
          bottom-0
          top-3/4
          bg-gradient-to-t
          from-accent-red
          via-accent-red
          to-transparent
        "
      ></div>
    </template>
    <div class="flex flex-col lg:flex-row items-center gap-24">
      <img src="@/assets/icons/collab-logo.svg" />
      <div>
        <h2 class="text-white mb-6">
          Walk a Straight Line with a Gyptech + Oasis Alignment
        </h2>
        <p class="text-white">
          Proper alignment, which helps to improve up-time, product quality, and
          raw material waste, can result in a dramatic savings of both time and
          money.
          <br /><br />
          A Gyptech + Oasis paper-handling alignment can true your equipment to
          an industry-best standard. A quality alignment can reduce paper
          breaks, bad edges, wrinkling, poor splices, damaging vibrations and
          costly downtime — ensuring your net sellable yield is optimized.
        </p>
      </div>
    </div>
  </HeroImageOverlay>

  <Container class="bg-accent-red">
    <div class="pb-16">
      <h2 class="text-white">Why should you get your equipment aligned?</h2>
      <p class="text-white">
        You cannot always tell if your equipment is misaligned. Seemingly small
        issues can have a major impact on the quality of your board, or worse,
        can cause an unplanned plant shutdown.
      </p>
      <br />
      <p class="text-white font-medium">
        Some of the damaging symptoms of misalignment include:
      </p>
      <ArrowList :items="reasons" pure white class="mt-2" />
    </div>
  </Container>

  <FullSplit flipped>
    <template v-slot:left>
      <h2>What happens at an alignment service?</h2>
      <p class="font-medium mt-6 text-black">Prior to service:</p>
      <ArrowList :items="prior" red class="mt-4" />
      <p class="font-medium mt-6 text-black">Alignment:</p>
      <ArrowList :items="alignment" red class="mt-4" />
      <p class="font-medium mt-6 text-black">To Conclude Service:</p>
      <ArrowList :items="conclude" red class="mt-4" />
      <p class="mt-6">
        As a final note, it is very important to remember that most alignment
        methods are contact measurement methods therefore, measuring while in
        operation is not practical and/or not precise enough. But more
        importantly, it is extremely unsafe. For over 30 years, we at OASIS +
        Gyptech have dedicated our careers to providing quality and trusted
        machinery alignment services for our customers.
      </p>
    </template>
    <template v-slot:right>
      <img
        src="@/assets/images/alignment.png"
        alt=""
        class="w-full h-full object-cover"
      />
    </template>
  </FullSplit>
</template>

<script setup>
import HeroImageOverlay from "@/components/layouts/hero/HeroImageOverlay.vue";
import Container from "@/components/layouts/Container.vue";
import ArrowList from "@/components/base/ArrowList.vue";
import FullSplit from "@/components/layouts/FullSplit.vue";

const reasons = [
  "Failed or poor splicing",
  "Paper tracking issues resulting in uneven tension in face and back papers",
  "Paper breaks",
  "Lack of edge control / difficulty keeping papers on center",
  "Level issues with board line rollers having an impact on the core",
  "Premature wear to forming belt and other equipment",
];

const prior = [
  "Certified Technician will have a consultation and provide expert advice ",
  "The existing offset baseline adjacent to the Board Line will be investigated and verified (if necessary) to be parallel to the machine centerline before alignment begins. ",
];

const alignment = [
  "Each belt conveyor main rolls (head, tail, stretch and S wrap) aligned to tolerance ",
  "The top idler rolls and the return rolls optically aligned for square ",
  "The 1 belt tail roll would be set for proper elevation above the forming table bottom plate ",
  "Ensure a proper elevation/level setting between belt conveyors (no core disturbance) ",
  "Align live roll rolls for square ",
  "Align the knife for square ",
];
const conclude = [
  "All service details will be kept confidential ",
  "Detailed optical alignment report provided ",
  "Recommendations for continuing equipment alignment improvements and next steps ",
];
</script>