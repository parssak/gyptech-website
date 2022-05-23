<template>
  <Header />
  <Container>
    <h3>Our Offices</h3>
    <p class="mb-8">Gyptech has multiple offices around the globe.</p>
    <div class="grid grid-cols-5 gap-6">
      <div v-for="(item, index) in offices" :key="index">
        <h3 class="text-lg mb-1">{{ item.name }}</h3>
        <p class="text-sm max-w-sm">
          {{ item.address }}
        </p>
        <p class="text-sm max-w-sm">
          {{ item.location }}
        </p>
        <p class="text-sm max-w-sm pt-4">
          <a href="tel:{{ item.phone }}">{{ item.phone }}</a>
        </p>
        <p class="text-sm max-w-sm pt-4">
          <a class="text-accent underline" href="mailto:{{ item.email }}">{{
            item.email
          }}</a>
        </p>
      </div>
    </div>
    <div class="grid place-items-center">
      <div class="flex justify-self-auto pt-24">
        <h2>Get In Touch</h2>
      </div>
      <div class="grid grid-cols-4 gap-8 w-1/2 justify-center">
        <div class="col-span-2">
          <label>
            <span class="mb-0.5 inline-block"> First Name: </span>
            <input class="border-accent-darkest" name="" id="" type="text" />
          </label>
        </div>
        <div class="col-span-2">
          <span class="mb-0.5 inline-block"> Last Name: </span>
          <input class="border-accent-darkest" name="" id="" type="text" />
        </div>
        <div class="col-span-2">
          <span class="mb-0.5 inline-block"> Email Address: </span
          ><input class="border-accent-darkest" name="" id="" type="email" />
        </div>
        <div class="col-span-2">
          <span class="mb-0.5 inline-block"> Phone Number: </span>
          <input class="border-accent-darkest" name="" id="" type="text" />
        </div>
        <div class="col-span-2">
          <span class="mb-0.5 inline-block"> City: </span
          ><input class="border-accent-darkest" name="" id="" type="text" />
        </div>
        <div class="col-span-2">
          <span class="mb-0.5 inline-block"> Country: </span
          ><input class="border-accent-darkest" name="" id="" type="text" />
        </div>
        <div class="col-span-2">
          <span class="mb-0.5 inline-block"> Company: </span
          ><input class="border-accent-darkest" name="" id="" type="text" />
        </div>
        <div class="col-span-2">
          <span class="mb-0.5 inline-block"> Subject: </span
          ><input class="border-accent-darkest" name="" id="" type="text" />
        </div>

        <div class="col-span-4">
          <span class="mb-0.5 inline-block"> Comments: </span
          ><textarea
            class="border-accent-darkest"
            name=""
            id=""
            cols="30"
            rows="4"
          ></textarea>
        </div>
        <div class="col-span-4">
          <button
            class="bg-accent-light w-full h-16 rounded-bl-md rounded-tr-md text-accent-black font-bold"
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  </Container>
  <div class="h-96">
    <img
      src="@/assets/images/map.png"
      alt=""
      class="w-full h-full object-cover"
    />
  </div>
</template>

<script setup>
import Container from "@/components/layouts/Container.vue";
import Header from "@/components/base/Header.vue";

const offices = [
  {
    name: "Gypsum Technologies Inc.",
    address: "578 King Forest Court Burlington, Ontario",
    location: "Canada L7P 5C1",
    phone: "+1 (905) 567-2000",
    email: "info@gyptech.ca",
  },
  {
    name: "Gyptech AB",
    address: "Norrgatan 15 Växjö, SE-352 31",
    location: "Sweden",
    phone: "Tel: +46 470 705640",
    email: "info@gyptech.se",
  },
  {
    name: "Gyptech GmbH",
    address: "Schleifmühlweg 25a 86633, Neuburg/Donau",
    location: "Germany",
    phone: "Tel: +49 8431 5387 0",
    email: "info@gyptech.de",
  },
  {
    name: "Gyptech Ltda.",
    address: "Av. Rio Branco 45/1013 - Centro, Rio de Janeiro, RJ",
    location: "Brazil CEP: 20",
    phone: "",
    email: "",
  },
  {
    name: "Gypsum Technologies Inc.",
    address: "Periférico Sur 4338 México, D.F. 04500",
    location: "México",
    phone: "Tel: +52 55 5351-2627",
    email: "",
  },
];
</script>
