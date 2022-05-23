<template>
  <Header />
  <Split
    title="Play Safe"
    description="Genuine Gyptech spare parts are engineered to exact equipment specifications — thus ensuring precise fit, form, and reliability.  For unparalleled durability and longevity in all we manufacture, Gyptech's state-of-the-art fabrication facility uses the highest quality components, materials, and know-how.<br><br> Downtime is costly. So, why risk it with untested, substandard, generic parts? Whether you're in need of rollers, parts for your dryer or mixer, or something customized, we can help.  Play safe — only trust genuine Gyptech brand spare parts and Gyptech approved aftermarket parts."
    flip
  >
    <img src="@/assets/images/woman-hardhat.png" alt="woman hardhat" />
  </Split>
  <Container>
    <h2>
      Genuine Gyptech OEM parts are designed precisely for your Gyptech
      equipment.
    </h2>
    <p>
      Using genuine Gyptech parts will help to maintain the high performance of
      your equipment and will contribute to maximum uptime. They ensure the
      quality, safety and reliability of your equipment is not compromised and
      running at it's best. Our dedicated engineers impose the highest quality
      standards in every aspect of your equipment and spare parts are no
      exception. Our OEM parts are specifically engineered for our machinery,
      don't settle for anything less than the best.
    </p>
    <br />
    <p>
      We carefully source Gyptech approved aftermarket parts and ensure they
      meet our reliability standards. Overall, we manufacture and procure a vast
      array of parts needed for your gypsum board equipment. We are the go-to
      place to go for all your parts needs! Our dedicated and knowledgeable
      customer service team is at your service for any information,
      recommendations and quotes you may need.
    </p>
    <br />
    <p>
      Don't have Gyptech equipment? That's okay! We can engineer a solution that
      will meet your unique needs. Reach out to us today.
    </p>
    <h2 class="pt-8">Some of our popular spare parts, include:</h2>
    <div class="grid grid-cols-4 gap-6">
      <div>
        <div class="bg-accent">
          <div class="text-white p-6 h-auto">
            <h4>Paper Delivery System</h4>
            <ArrowList
              :items="[content[0], content[0]]"
              class="mb-6 text-white"
              white
            />
          </div>
        </div>
      </div>
      <div>
        <div class="bg-accent-dark">
          <div class="text-white p-6">
            <h4>Paper Delivery System</h4>
            <ArrowList
              :items="[content[0], content[0], content[0], content[0]]"
              class="mb-6 text-white"
              white
            />
          </div>
        </div>
      </div>
      <div>
        <div class="bg-accent">
          <div class="text-white p-6">
            <h4>Board Handling System</h4>
            <ArrowList
              :items="[
                content[0],
                content[0],
                content[0],
                content[0],
                content[0],
                content[0],
              ]"
              class="mb-6 text-white"
              white
            />
          </div>
        </div>
      </div>
      <div>
        <div class="bg-accent-dark">
          <div class="text-white p-6">
            <h4>Dryer</h4>
            <ArrowList :items="[content[0], content[0],content[0], content[0]]" class="mb-6" white />
          </div>
        </div>
      </div>
    </div>
  </Container>

  <div class="relative">
    <img
      src="@/assets/images/writing.png"
      alt=""
      class="object-cover w-full h-full absolute inset-0"
    />
    <div class="absolute inset-0 bg-accent-dark mix-blend-multiply"></div>
    <Container class="relative">
      <div class="text-center flex items-center flex-col">
        <h2 class="text-white">Need a spare parts quote?</h2>
        <router-link
          class="btn btn-xl btn-light text-color-accent-dark"
          :to="{ name: 'contact' }"
          >get in touch
        </router-link>
      </div>
    </Container>
  </div>
</template>

<script setup>
import ArrowList from "../../../components/base/ArrowList.vue";
import Header from "../../../components/base/Header.vue";
import Split from "@/components/layouts/Split.vue";
import Container from "@/components/layouts/Container.vue";

const content = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
];
</script>
