<template>
  <Header />
  <Container>
    <h3>Our Offices</h3>
    <p class="mb-8">Gyptech has multiple offices around the globe.</p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
      <div v-for="(item, index) in offices" :key="index">
        <h3 class="text-base mb-2 font-medium">{{ item.name }}</h3>
        <address class="not-italic text-base text-accent-darkest">
          <span v-html="item.address" class="font-light"></span>
        </address>
        <p class="text-base max-w-sm">
          {{ item.location }}
        </p>

        <p class="text-base max-w-sm mt-4" v-if="item.phone">
          <a :href="`tel:${item.phone}`"
            ><span class="font-medium">Tel: </span>{{ item.phone }}</a
          >
        </p>

        <p class="text-base max-w-sm mt-4" v-if="item.fax">
          <a :href="`tel:${item.fax}`"
            ><span class="font-medium">Fax: </span>{{ item.fax }}</a
          >
        </p>

        <p class="text-base max-w-sm pt-4">
          <a class="text-accent underline" href="mailto:{{ item.email }}">{{
            item.email
          }}</a>
        </p>
      </div>
    </div>
  </Container>

  <div class="relative">
    <img
      src="@/assets/icons/dots-blue.svg"
      class="absolute top-0 left-0"
      alt=""
    />
    <img
      src="@/assets/icons/dots-blue.svg"
      class="absolute bottom-0 right-0"
      alt=""
    />

    <Container>
      <div class="max-w-3xl mx-auto">
        <h2 class="text-center">Get In Touch</h2>
        <div class="grid gap-8">
          <div>
            <label>
              <span class="mb-0.5 inline-block"> First Name: </span>
              <input class="border-accent-darkest" name="" id="" type="text" />
            </label>
          </div>
          <div>
            <label>
              <span class="mb-0.5 inline-block"> Last Name: </span>
              <input class="border-accent-darkest" name="" id="" type="text" />
            </label>
          </div>
          <div>
            <label>
              <span class="mb-0.5 inline-block"> Email Address: </span
              ><input
                class="border-accent-darkest"
                name=""
                id=""
                type="email"
              />
            </label>
          </div>
          <div>
            <label>
              <span class="mb-0.5 inline-block"> Phone Number: </span>
              <input class="border-accent-darkest" name="" id="" type="text" />
            </label>
          </div>
          <div>
            <label>
              <span class="mb-0.5 inline-block"> City: </span
              ><input class="border-accent-darkest" name="" id="" type="text" />
            </label>
          </div>
          <div>
            <label>
              <span class="mb-0.5 inline-block"> Country: </span
              ><input class="border-accent-darkest" name="" id="" type="text" />
            </label>
          </div>
          <div>
            <label>
              <span class="mb-0.5 inline-block"> Company: </span
              ><input class="border-accent-darkest" name="" id="" type="text" />
            </label>
          </div>
          <div>
            <label>
              <span class="mb-0.5 inline-block"> Subject: </span
              ><input class="border-accent-darkest" name="" id="" type="text" />
            </label>
          </div>

          <div class="md:col-span-2">
            <span class="mb-0.5 inline-block"> Comments: </span
            ><textarea
              class="border-accent-darkest"
              name=""
              id=""
              cols="30"
              rows="4"
            ></textarea>
          </div>
          <div class="md:col-span-2">
            <button
              class="
                bg-accent-light
                w-full
                h-16
                rounded-bl-md rounded-tr-md
                text-accent-black
                font-bold
              "
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </Container>
  </div>
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
    address: "578 King Forest Court <br /> Burlington, Ontario",
    location: "Canada L7P 5C1",
    phone: "+1 (905) 567-2000",
    fax: "1 (289) 288-0570",
    email: "info@gyptech.ca",
  },
  {
    name: "Gyptech AB",
    address: "Norrgatan 15 <br /> Växjö, SE-352 31",
    location: "Sweden",
    phone: "+46 470 705640",
    fax: "+46 470 705650",
    email: "info@gyptech.se",
  },
  {
    name: "Gyptech GmbH",
    address: "Schleifmühlweg <br /> 25a 86633, Neuburg/Donau",
    location: "Germany",
    phone: "+49 8431 5387 0",
    fax: "+49 8431 5387 20",
    email: "info@gyptech.de",
  },
  {
    name: "Gyptech Ltda.",
    address: "Av. Rio Branco <br /> 45/1013 - Centro, Rio de Janeiro, RJ",
    location: "Brazil CEP: 20",
    phone: "",
    email: "",
  },
  {
    name: "Gypsum Technologies Inc.",
    address: "Periférico Sur <br /> 4338 México, D.F. 04500",
    location: "México",
    phone: "Tel: +52 55 5351-2627",
    email: "",
  },
];
</script>
