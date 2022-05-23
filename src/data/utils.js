// remove last /
const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");

export const getRoutes = (routes) => {
  return [
    ...routes.map((route) => ({
      path: BASE_URL + route.path,
      component: route.component,
      name: route.name,
      meta: {
        ...route.meta,
      },
    })),
    { path: "/:path(.*)", component: () => import("@/views/NotFound.vue") },
    { path: "/", redirect: BASE_URL },
  ];
};

export const getNavigation = (routes) => {
  const navItems = [];
  for (const route of routes) {
    if (route.hidden) continue;
    const baseRoute = route.path.split("/")[1];
    const indexBaseRoute = navItems.findIndex((item) => item.path === `${baseRoute}`);
    console.debug(baseRoute, indexBaseRoute, route.path);
    if (indexBaseRoute === -1) {
      navItems.push({
        path: baseRoute,
        label: route.label,
        name: route.name,
        dropdownItems: [],
      });
    } else if (!route.path.includes(":")) {
      navItems[indexBaseRoute].dropdownItems.push({
        path: route.path,
        name: route.name,
        label: route.label,
      });
    }
  }

  return navItems;
};
