export const ROUTES_SOURCE = [
  {
    path: "/",
    label: "home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    meta: { title: "Home" },
  },
  {
    path: "/about",
    label: "about",
    name: "about",
    component: () => import("@/views/about/index.vue"),
    meta: { title: "About Us" },
  },
  {
    path: "/equipment",
    label: "equipment",
    name: "equipment",
    component: () => import("@/views/equipment/index.vue"),
    meta: { title: "Equipment" },
  },
  {
    path: "/equipment/overview",
    label: "equipment/overview",
    name: "equipment/overview",
    component: () => import("@/views/equipment/overview/index.vue"),
    meta: { title: "Equipment Overview" },
  },
  {
    path: "/equipment/solution",
    label: "equipment/solution",
    name: "equipment/solution",
    component: () => import("@/views/equipment/solution/index.vue"),
    meta: { title: "Complete Solutions" },
  },
  {
    path: "/equipment/mill",
    label: "equipment/mill",
    name: "equipment/mill",
    component: () => import("@/views/equipment/mill/index.vue"),
    meta: { title: "Mill & Calcining" },
  },
  {
    path: "/equipment/stucco",
    label: "equipment/stucco",
    name: "equipment/stucco",
    component: () => import("@/views/equipment/stucco/index.vue"),
    meta: { title: "Stucco Systems" },
  },
  {
    path: "/equipment/mixers",
    label: "equipment/mixers",
    name: "equipment/mixers",
    component: () => import("@/views/equipment/mixers/index.vue"),
    meta: { title: "Mixers & Forming" },
  },
  {
    path: "/equipment/paper",
    label: "equipment/paper",
    name: "equipment/paper",
    component: () => import("@/views/equipment/paper/index.vue"),
    meta: { title: "Paper Delivery Systems" },
  },
  {
    path: "/equipment/board",
    label: "equipment/board",
    name: "equipment/board",
    component: () => import("@/views/equipment/board/index.vue"),
    meta: { title: "Board Handling Systems" },
  },
  {
    path: "/equipment/dryers",
    label: "equipment/dryers",
    name: "equipment/dryers",
    component: () => import("@/views/equipment/dryers/index.vue"),
    meta: { title: "Dryers & Heat Exchangers" },
  },
  {
    path: "/equipment/dunnage",
    label: "equipment/dunnage",
    name: "equipment/dunnage",
    component: () => import("@/views/equipment/dunnage/index.vue"),
    meta: { title: "Dunnage Systems" },
  },
  {
    path: "/equipment/instruments",
    label: "equipment/instruments",
    name: "equipment/instruments",
    component: () => import("@/views/equipment/instruments/index.vue"),
    meta: { title: "Instruments" },
  },
  {
    path: "/equipment/instruments/lasers",
    label: "equipment/instruments/lasers",
    name: "equipment/instruments/lasers",
    component: () => import("@/views/equipment/instruments/lasers/index.vue"),
    meta: { title: "Laser Dimensioning System" },
  },
  {
    path: "/equipment/gyptech",
    label: "equipment/gyptech",
    name: "equipment/gyptech",
    component: () => import("@/views/equipment/gyptech/index.vue"),
    meta: { title: "Gyptech Stucco Analyzer" },
  },
  {
    path: "/equipment/thermal",
    label: "equipment/thermal",
    name: "equipment/thermal",
    component: () => import("@/views/equipment/thermal/index.vue"),
    meta: { title: "Thermal Set Analysis" },
  },
  {
    path: "/equipment/control",
    label: "equipment/control",
    name: "equipment/control",
    component: () => import("@/views/equipment/control/index.vue"),
    meta: { title: "Control Systems" },
  },
  {
    path: "/equipment/manufacturing",
    label: "equipment/manufacturing",
    name: "equipment/manufacturing",
    component: () => import("@/views/equipment/manufacturing/index.vue"),
    meta: { title: "Manufacturing" },
  },
  {
    path: "/aftermarket",
    label: "aftermarket",
    name: "aftermarket",
    component: () => import("@/views/aftermarket/index.vue"),
    meta: { title: "aftermarket" },
  },
  {
    path: "/aftermarket/overview",
    label: "aftermarket/overview",
    name: "aftermarket/overview",
    component: () => import("@/views/aftermarket/overview/index.vue"),
    meta: { title: "Aftermarket Overview" },
  },
  {
    path: "/aftermarket/oasis",
    label: "aftermarket/oasis",
    name: "aftermarket/oasis",
    component: () => import("@/views/aftermarket/oasis/index.vue"),
    meta: { title: "aftermarket/oasis" },
  },
  {
    path: "/aftermarket/catalog",
    label: "aftermarket/catalog",
    name: "aftermarket/catalog",
    component: () => import("@/views/aftermarket/catalog/index.vue"),
    meta: { title: "Catalog" },
  },
  {
    path: "/aftermarket/mixer",
    label: "aftermarket/mixer",
    name: "aftermarket/mixer",
    component: () => import("@/views/aftermarket/mixer/index.vue"),
    meta: { title: "Mixer Boots" },
  },
  {
    path: "/aftermarket/mixer/form",
    label: "aftermarket/mixer/form",
    name: "aftermarket/mixer/form",
    component: () => import("@/views/aftermarket/mixer/form/index.vue"),
    meta: { title: "" },
  },
  {
    path: "/aftermarket/remote",
    label: "aftermarket/remote",
    name: "aftermarket/remote",
    component: () => import("@/views/aftermarket/remote/index.vue"),
    meta: { title: "Remote Service" },
  },
  {
    path: "/aftermarket/spare",
    label: "aftermarket/spare",
    name: "aftermarket/spare",
    component: () => import("@/views/aftermarket/spare/index.vue"),
    meta: { title: "Spare Parts" },
  },
  {
    path: "/news",
    label: "news",
    name: "news",
    component: () => import("@/views/news/index.vue"),
    meta: { title: "News" },
  },
  {
    path: "/news/overview",
    label: "news/overview",
    name: "news/overview",
    component: () => import("@/views/news/overview/index.vue"),
    meta: { title: "News" },
  },
  {
    path: "/news/post",
    label: "news/post",
    name: "news/post",
    component: () => import("@/views/news/post/index.vue"),
    meta: { title: "News Post" },
  },
  {
    path: "/careers",
    label: "careers",
    name: "careers",
    component: () => import("@/views/careers/index.vue"),
    meta: { title: "News" },
  },
  {
    path: "/careers/overview",
    label: "careers/overview",
    name: "careers/overview",
    component: () => import("@/views/careers/overview/index.vue"),
    meta: { title: "Careers" },
  },
  {
    path: "/careers/post",
    label: "careers/post",
    name: "careers/post",
    component: () => import("@/views/careers/post/index.vue"),
    meta: { title: "Post" },
  },
  {
    path: "/contact",
    label: "contact",
    name: "contact",
    component: () => import("@/views/contact/index.vue"),
    meta: { title: "Contact Us" },
  },
];