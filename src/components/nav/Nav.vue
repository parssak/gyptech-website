<template>
  <Popover class="sticky left-0 top-0 w-full z-20 bg-white shadow">
    <div
      v-if="showAlert"
      class="
        bg-accent-light
        py-3
        flex
        items-center
        md:justify-center
        relative
        pl-4
        pr-12
      "
    >
      <div class="md:flex items-center justify-center">
        <p class="text-base text-black">Announcement Text Placeholder</p>
        <button class="md:ml-6 uppercase font-medium flex items-center">
          Learn More <ArrowRightIcon class="w-4=6 h-4 ml-2" />
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
          md:justify-start md:space-x-5
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
              />
            </div>
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-white
              hover:text-gray-500
              transition
              hover:bg-white
            "
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6 text-accent" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-6 xl:space-x-7">
          <NavItem
            v-for="item in navigation"
            :route="item"
            :path="item.path"
            :key="item.label"
            :dropdownItems="item.dropdownItems"
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
          md:hidden
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
  <!-- <div class="mb-20 pb-1" /> -->
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
console.debug(navigation);
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
  data() {
    return { showAlert: true };
  },
  methods: {
    toggleAlert() {
      this.showAlert = !this.showAlert;
    },
  },
};
</script>
