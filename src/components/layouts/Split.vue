<script>
import Container from "@/components/layouts/Container.vue";

const getImage = (name) => {
  return new URL(`../../assets/${name}`, import.meta.url).href;
};

export default {
  components: { Container },
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    flip: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
  },
  setup() {
    const getImageUrl = (name) => {
      return getImage("../../", name);
    };
    return {
      getImageUrl,
    };
  },
};
</script>

<style>
.split-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<template>
  <Container :class="dark && 'bg-accent-dark'">
    <div class="grid gap-x-8 gap-y-12 lg:grid-cols-2">
      <section :class="flip && `lg:order-1`" class="lg:py-12">
        <h2 :class="dark && 'text-white'">{{ title }}</h2>
        <p :class="dark && 'text-white'"><span v-html="description"></span></p>
        <slot name="extra-content"></slot>
      </section>
      <section>
        <div class="split-img-wrapper w-full h-full rounded-md overflow-hidden">
          <slot></slot>
          <img v-if="!hasDefaultSlot" :src="getImageUrl('contact.png')" />
        </div>
      </section>
    </div>
  </Container>
</template>
