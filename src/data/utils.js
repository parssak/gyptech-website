// remove last /
export const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");

export const getRoutes = (routes) => {
  return [
    ...routes.map((route) => ({
      path: BASE_URL + route.path,
      component: route.component,
      name: route.name,
      meta: {
        ...route.meta
      }
    })),
    { path: "/:path(.*)", component: () => import("@/views/NotFound.vue") },
    { path: "/", redirect: BASE_URL }
  ];
};

// export const getNavigation = (routes) => {
//   const navItems = [];
//   for (const route of routes) {
//     if (route.hidden) continue;
//     const baseRoute = route.path.split("/")[1];
//     const indexBaseRoute = navItems.findIndex((item) => item.path === `${baseRoute}`);
//     if (indexBaseRoute === -1) {
//       navItems.push({
//         path: baseRoute,
//         label: route.label,
//         name: route.name,
//         dropdownItems: []
//       });
//     } else if (!route.path.includes(":")) {
//       navItems[indexBaseRoute].dropdownItems.push({
//         path: route.path,
//         name: route.name,
//         label: route.label
//       });
//     }
//   }

//   return navItems;
// };

export const getNavigation = (routes) => {
  const navItems = [];
  for (const route of routes) {
    if (route.hidden) continue;
    const baseRoute = route.path.split("/")[1];
    const indexBaseRoute = navItems.findIndex((item) => item.path === `/${baseRoute}`);

    if (indexBaseRoute === -1) {
      navItems.push({
        path: `/${baseRoute}`,
        label: route.label,
        dropdownItems: [],
        fake: route.fake,
        name: route.name
      });
    } else if (!route.path.includes(":")) {
      // get number of / in route.path
      const numberOfSlashes = route.path.split("/").length - 1;

      if (numberOfSlashes === 2) {
        navItems[indexBaseRoute].dropdownItems.push({
          path: route.path,
          label: route.label,
          dropdownItems: [],
          fake: route.fake,
          name: route.name
        });
      } else if (numberOfSlashes === 3) {
        // take substring of route.path before the last /
        const parentPath = route.path.substring(0, route.path.lastIndexOf("/"));
        const parentIndex = navItems[indexBaseRoute].dropdownItems.findIndex(
          (item) => item.path === parentPath
        );
        if (parentIndex === -1) {
          console.error("ERROR: parentIndex === -1", route.path, parentPath);
        } else {
          navItems[indexBaseRoute].dropdownItems[parentIndex].dropdownItems.push({
            path: route.path,
            label: route.label,
            dropdownItems: [],
            fake: route.fake,
            name: route.name
          });
        }
      } else if (numberOfSlashes === 4) {
        // take substring of route.path before the second last /
        const parentPath = route.path.substring(0, route.path.lastIndexOf("/"));
        const grandparentPath = parentPath.substring(0, parentPath.lastIndexOf("/"));
        const grandparentIndex = navItems[indexBaseRoute].dropdownItems.findIndex(
          (item) => item.path === grandparentPath
        );
        const parentIndex = navItems[indexBaseRoute].dropdownItems[
          grandparentIndex
        ].dropdownItems.findIndex((item) => item.path === parentPath);

        if (parentIndex === -1) {
          console.error("ERROR: parentIndex === -1", route.path, parentPath);
        } else {
          navItems[indexBaseRoute].dropdownItems[grandparentIndex].dropdownItems[
            parentIndex
          ].dropdownItems.push({
            path: route.path,
            label: route.label,
            dropdownItems: [],
            fake: route.fake,
            name: route.name
          });
        }
      }
    }
  }

  return navItems;
};