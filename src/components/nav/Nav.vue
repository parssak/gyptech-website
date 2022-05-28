<template>
  <Popover
    class="sticky left-0 top-0 w-full z-20 transition"
    :class="top ? 'bg-transparent ' : 'bg-white shadow'"
  >
    <div
      v-if="showAlert"
      class="
        bg-accent-light
        py-3
        flex
        items-center
        lg:justify-center
        relative
        pl-4
        pr-12
      "
    >
      <div class="lg:flex items-center justify-center">
        <p class="text-base text-black">Announcement Text Placeholder</p>
        <button class="lg:ml-6 uppercase font-medium flex items-center">
          Learn More <ArrowRightIcon class="w-4 h-4 ml-2" />
        </button>
      </div>
      <button class="grid items-center absolute right-4" @click="toggleAlert">
        <XIcon class="w-6 h-6" />
      </button>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          py-6
          lg:justify-start lg:space-x-2
        "
      >
        <div class="flex justify-start items-center lg:w-0 flex-1">
          <router-link :to="{ name: 'home' }">
            <span class="sr-only">Gyptech</span>
            <div class="flex items-center">
              <img
                class="h-12 w-auto flex items-center"
                src="@/assets/logo.svg"
                alt="Gyptech"
                v-if="!top"
              />
              <img
                class="h-12 w-auto flex items-center"
                src="@/assets/icons/logo-white.svg"
                alt="Gyptech"
                v-else
              />
            </div>
          </router-link>
        </div>
        <div class="-mr-2 -my-2 lg:hidden">
          <PopoverButton
            class="
              p-2
              inline-flex
              items-center
              justify-center
              text-white
              hover:text-gray-500
              transition
            "
            :class="top ? 'hover:bg-accent-hover' : 'hover:bg-accent-lightest'"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon
              class="h-6 w-6"
              :class="top ? 'text-white' : 'text-accent'"
              aria-hidden="true"
            />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden lg:flex space-x-7 xl:space-x-7">
          <NavItem
            v-for="item in navigation"
            :route="item"
            :path="item.path"
            :key="item.label"
            :dropdownItems="item.dropdownItems"
            :top="top"
          >
            {{ item.label }}
          </NavItem>
        </PopoverGroup>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="
          absolute
          top-0
          inset-x-0
          z-10
          p-2
          transition
          transform
          origin-top-right
          lg:hidden
        "
      >
        <div class="shadow-lg ring-1 ring-black ring-opacity-5 bg-white border">
          <div class="pt-5 pb-6">
            <div class="flex items-center justify-between px-5">
              <router-link :to="{ name: 'home' }">
                <img class="h-9 w-auto" src="@/assets/logo.svg" alt="Gyptech" />
              </router-link>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    transition
                    hover:bg-accent-lightest
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6 text-accent" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid">
                <PopoverButton class="divide-y-2">
                  <router-link
                    v-for="item in navigation"
                    :key="item.label"
                    :to="{ name: item.name }"
                    class="nav-item-mobile"
                  >
                    <span class="nav-item-mobile__text">{{ item.label }}</span>
                  </router-link>
                </PopoverButton>
              </nav>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import NavItem from "@/components/nav/NavItem.vue";
import { navigation } from "@/data";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { MenuIcon, XIcon, ArrowRightIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MenuIcon,
    XIcon,
    NavItem,
    ArrowRightIcon,
  },
  setup() {
    return { navigation };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (this.$route.name !== "aftermarket/oasis" && this.$route.name !== "home") {
        this.top = false;
      } else {
        this.top = window.scrollY < 50;
      }
    });
  },
  data() {
    return { showAlert: true, top: true };
  },
  watch: {
    // listen for route change
    $route() {
      if (this.$route.name !== "aftermarket/oasis" && this.$route.name !== "home") {
        this.top = false;
      } else {
        this.top = window.scrollY < 50;
      }
    },
  },
  methods: {
    toggleAlert() {
      this.showAlert = !this.showAlert;
    },
  },
};
</script>
