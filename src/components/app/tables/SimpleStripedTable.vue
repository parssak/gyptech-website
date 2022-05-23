<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto ">
      <div class="py-2 align-middle inline-block min-w-full">
        <div
          class="shadow overflow-hidden border border-offblack sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-offblack">
            <thead class="bg-accent/20">
              <tr>
                <th
                  v-for="(header, headerIdx) in headers"
                  :key="header.label"
                  scope="col"
                  :class="`
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-offblack
                    uppercase
                    tracking-wider
                    whitespace-nowrap
                    ${headerIdx === 0 && 'text-offblack font-semibold'}
                  `"
                >
                  {{ header.label }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-offblack">
              <tr v-for="(item, itemIdx) in items" :key="itemIdx">
                <td
                  v-for="(value, valueIdx) in Object.values(item)"
                  :key="valueIdx"
                  :class="`px-6 py-4 whitespace-nowrap text-xs text-offblack`"
                >
                  {{ value }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const defaultItems = [
  {
    name: '4.25"',
    title: '1.75", 2.00", 2.25", 2.50", 2.75", 3.00"',
    role: '24"',
    email: '0.15"-0.18"',
  },
  {
    name: '5.56"',
    title: '2.50", 2.75", 3.00", 3.25", 3.50", 3.75" 4.00"',
    role: '31", 35"',
    email: '0.18"-0.21"',
  },
  {
    name: '6.63"',
    title: '3.00", 3.25", 3.50", 3.75", 4.00", 4.25", 4.50", 5.00", 5.25"',
    role: '44.25"',
    email: '0.23"-0.26"',
  },
];
const defaultHeaders = [
  {
    label: "inlet size (dia.)",
  },
  {
    label: "outlet size (dia.)",
  },
  {
    label: "overall length",
  },
  {
    label: "standard thickness range",
  },
];
export default {
  props: {
    items: {
      type: Array,
      default: () => defaultItems,
    },
    headers: {
      type: Array,
      default: () => defaultHeaders,
    },
  },
};
</script>
