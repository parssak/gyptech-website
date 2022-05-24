import { ROUTES_SOURCE } from "./routes";
import { getRoutes, getNavigation } from "./utils";

export const routes = getRoutes(ROUTES_SOURCE);
console.log(routes)
export const navigation = getNavigation(ROUTES_SOURCE);
