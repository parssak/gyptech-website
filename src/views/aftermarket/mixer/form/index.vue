<template>
  <Container>
    <div class="flex justify-center items-center">
      <h2>Mixer Boots Contact Form</h2>
    </div>
    <div class="grid grid-cols-4 gap-8">
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
        Mixer Boot Design:<textarea
          class="border-accent-darkest"
          name=""
          id=""
          cols="30"
          rows="1"
        ></textarea>
      </div>
      <div>
          <label>
            <span class="text-sm font-medium text-gray-700 mb-0.5 inline-block"
              >Inlet Size:</span
            >
          <select
          >
            <option>United States</option>
            <option selected="">2.88”</option>
            <option>Mexico</option>
          </select>
            </label
          >
      </div>
      <div>
          <label>
            <span class="text-sm font-medium text-gray-700 mb-0.5 inline-block"
              >Outlet Size:</span
            >
          <select
          >
            <option>United States</option>
            <option selected="">2.88”</option>
            <option>Mexico</option>
          </select>
            </label
          >
      </div>
      <div>
          <label>
            <span class="text-sm font-medium text-gray-700 mb-0.5 inline-block"
              >Overall Length:</span
            >
          <select
          >
            <option>United States</option>
            <option selected="">2.88”</option>
            <option>Mexico</option>
          </select>
            </label
          >
      </div>
      <div>
          <label>
            <span class="text-sm font-medium text-gray-700 mb-0.5 inline-block"
              >Standard Thickness:</span
            >
          <select
          >
            <option>United States</option>
            <option selected="">2.88”</option>
            <option>Mexico</option>
          </select>
            </label
          >
      </div>
      <div class="col-span-4">
        Comments:<textarea
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
          SUBMIT REQUEST
        </button>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "../../../../components/layouts/Container.vue";
</script>
