<template>
  <Header />
  <Split
    title="Enter the World of Gyptech Spare Parts"
    description="Gyptech equipment has countless spare parts and it can sometimes be challenging to identify each and every one. We have heard your struggles and wanted to provide a best in class catalog for you to discover all the parts you need. Getting the right part quickly can make a world of difference for your plant and now you can access this information quickly and get an OEM part at your doorstep more efficiently. The <b>Gyptech Spare Parts Catalog</b> is your answer to the common frustrations and delays you face on the job. Part information is now a click away and will take a fraction of the time to discover parts and drawings. Whether you’re trying to identify a part, find out the correct Gyptech ID number, or find a drawing, our catalog is custom designed to get the answers you need quickly and with added features to improve your day-to-day workflow."
    flip
  >
    <img src="@/assets/images/woman-hardhat.png" alt="woman hardhat" />
  </Split>
  <Container>
    <h2>Fast and Efficient</h2>
    <ArrowList :items="content" class="mb-6" />
    <h2>Personalized</h2>
    <ArrowList :items="content" class="mb-6" />
  </Container>
  <Split title="Accurate and Secure" flip>
    <img src="@/assets/images/woman-hardhat.png" alt="woman hardhat" />
    <template v-slot:extra-content>
      <ArrowList :items="content" class="mb-6" />
      <p class="pb-2">
        Please reach out to us today for more information, to see a demo or to
        get enrolled: <b>Call: </b>
        <a class="text-accent" href="tel:+1 905-567-2000 ext.324"
          >+1 905-567-2000 ext.324</a
        >
        or <b>Email: </b>
        <a class="text-accent" href="mailto:parts@gyptech.ca"
          >parts@gyptech.ca</a
        >
      </p>
      <router-link
        class="btn btn-xl btn-light text-color-accent-dark"
        :to="{ name: 'contact' }"
        >Register Now</router-link
      ></template
    >
  </Split>

  <Container class="bg-accent-lightest">
    <h3>Frequently Asked Questions</h3>
    <div
      v-for="(f, i) in faq"
      :key="i"
      class="grid md:grid-cols-5 gap-4 border-t border-accent-darkest/30 py-6"
    >
      <div class="md:col-span-2">
        <h4 class="font-semibold">{{ f.title }}</h4>
      </div>
      <div class="md:col-span-3 text-accent-darkest">
        {{ f.description }}
      </div>
    </div>
  </Container>
</template>

<script setup>
import ArrowList from "../../../components/base/ArrowList.vue";
import Split from "../../../components/layouts/Split.vue";
import Container from "../../../components/layouts/Container.vue";
import Header from "@/components/base/Header.vue";

const content = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, accusamus!",
];

const faq = [
  {
    title: "How do I register for the catalog?",
    description:
      "There are links to the catalog webpage from our website's Aftermarket and Catalog sections. Once you click the link, a new page will open, at the bottom you will see a registration link. Please use your corporate email for the account and set your password. We will contact you shortly to get you set up.",
  },
  {
    title: "Can I use my personal email to register for the catalog?",
    description:
      "We request that you use your corporate email to access the catalog for safety and security reasons.",
  },
  {
    title: "How do I log in?",
    description:
      "After you have created your account and received an activation email. You can use the link in the email or navigate to our website with the link. Enter your email and password to log into the catalog.",
  },
  {
    title: "I did not receive my activation link, what do I do?",
    description:
      "We may be processing your request or contacting your Catalog Admin for confirmation of access. We apologize for the delay, but you will hear from us within a couple days of registration.",
  },
  {
    title: "I forgot my password, how do I reset it?",
    description:
      "Go to the catalog login webpage, there are links to this on our website in the Aftermarket and Catalog sections. At the bottom you will see a Forgot Your Password hyperlink. Following the steps on that webpage and you'll get an email with further instructions.",
  },
  {
    title: "How many accounts can I make for my plant?",
    description:
      "There is no limit on how many plant personnel have accounts on the catalog. Every registration request is confirmed with the designated plant admin for safety and security reasons.",
  },
  {
    title: "How can I learn to use the catalog effectively?",
    description:
      "We offer in-depth catalog training, however if you missed that you can see our manual on the catalog site. While you're logged in, click the link for the manual in the bottom ribbon. This will open a manual that you can use to become familiar with the catalog.",
  },
  {
    title: "Can I request a quote or place an order through the catalog?",
    description:
      "Currently the catalog cannot be used for placing orders, as pricing is not available on the catalog. You can submit quote requests directly though the catalog by using the shopping cart function.",
  },
];
</script>
