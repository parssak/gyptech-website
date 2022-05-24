<template>
  <div>
    <div
      v-if="dropdownItems && dropdownItems.length > 0"
      class="flex items-center -mr-2"
    >
      <Popover class="relative">
        <PopoverButton
          class="
            group
            rounded-md
            inline-flex
            items-center
            text-base
            font-medium
            whitespace-nowrap
            transition
            hover:text-accent
            uppercase
            focus:outline-none focus:ring-2 focus:ring-offset-2
            ,
          "
          @click.stop
        >
          <span class="uppercase"><slot></slot></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2 h-5 w-5 group-transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </PopoverButton>

        <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-1"
        >
          <PopoverPanel
            class="
              absolute
              right-0
              mt-3
              transform
              z-10
              px-2
              w-screen
              max-w-sm
              sm:px-0
              lg:ml-0 lg:left-1/2 lg:-translate-x-1/2
              panel
            "
          >
            <div class="shadow-lg ring-1 ring-black ring-opacity-5 border">
              <div class="relative grid gap-6 bg-white sm:gap-2">
                <PopoverButton class="divide-y-2">
                  <!-- Depth 1 -->
                  <router-link
                    v-for="item in dropdownItems"
                    :key="item.label"
                    :to="{ name: item.name }"
                    class="
                      p-3
                      flex
                      items-start
                      transition
                      hover:bg-gray-50
                      group
                      relative
                    "
                  >
                    <p
                      class="
                        text-sm
                        lg:text-base
                        font-medium
                        uppercase
                        text-black
                        group-hover:text-accent
                      "
                    >
                      {{ item.label }}
                    </p>
                    <svg
                      v-if="item.dropdownItems.length > 0"
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-auto h-5 w-5 group-transition"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <div
                      v-if="item.dropdownItems.length > 0"
                      class="
                        absolute
                        left-full
                        top-0
                        whitespace-nowrap
                        border
                        bg-white
                        invisible
                        group-hover:visible group-hover:text-black
                        text-left
                        divide-y-2
                      "
                    >
                      <!-- Depth 2 -->
                      <router-link
                        v-for="inner in item.dropdownItems"
                        :key="inner.name"
                        :to="{ name: inner.name }"
                        class="
                          p-3
                          flex
                          items-center
                          hover:bg-accent-lightest hover:text-accent
                          inner-group
                          relative
                          group
                        "
                      >
                        <span
                          class="
                            text-sm
                            lg:text-base
                            font-medium
                            uppercase
                            pr-3
                          "
                        >
                          {{ inner.label }}
                        </span>
                        <svg
                          v-if="inner.dropdownItems.length > 0"
                          xmlns="http://www.w3.org/2000/svg"
                          class="ml-auto h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        <!-- Third depth -->
                        <div
                          v-if="inner.dropdownItems.length > 0"
                          class="
                            absolute
                            left-full
                            top-0
                            invisible
                            whitespace-nowrap
                            border
                            bg-white
                            transition
                            inner-group-items
                            group-hover:text-black
                            text-left
                          "
                        >
                          <router-link
                            v-for="thirdInner in inner.dropdownItems"
                            :key="thirdInner.path"
                            :to="{ name: thirdInner.name }"
                            class="
                              p-3
                              flex
                              items-center
                              transition
                              hover:bg-accent-lightest hover:text-accent
                              relative
                            "
                          >
                            <span
                              class="
                                text-sm
                                lg:text-base
                                font-medium
                                uppercase
                                pr-3
                              "
                            >
                              {{ thirdInner.label }}
                            </span>
                            <svg
                              v-if="thirdInner.dropdownItems.length > 0"
                              xmlns="http://www.w3.org/2000/svg"
                              class="ml-auto h-5 w-5 group-transition"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </router-link>
                        </div>
                      </router-link>
                    </div>
                  </router-link>
                </PopoverButton>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
    </div>
    <div v-else class="nav-item">
      <router-link :to="{ name: route.name }">
        <slot> </slot>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

export default {
  name: "NavItem",
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
  },
  props: {
    path: String,
    dropdownItems: {
      type: Array,
      required: false,
    },
    route: {
      type: Object,
      required: true,
    },
  },
};
</script>
