const LEGACY_GITHUB_PAGES_BASE = "/smarterpractice-site";
const PRODUCTION_ORIGIN = "https://www.smarterpractice.ai";

function normalizeBasePath(baseUrl) {
  const base = baseUrl || "/";
  const withLeadingSlash = base.startsWith("/") ? base : `/${base}`;
  return withLeadingSlash.endsWith("/")
    ? withLeadingSlash
    : `${withLeadingSlash}/`;
}

function normalizeRoutePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const withoutTrailingSlash =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  return withoutTrailingSlash || "/";
}

export const appBasePath = normalizeBasePath(import.meta.env.BASE_URL);
const appBaseWithoutSlash = appBasePath.replace(/\/$/, "");
const useHashLinks = appBasePath !== "/";

export const routes = {
  home: { path: "/", hash: "" },
  howItWorks: { path: "/how-it-works", hash: "#/how-it-works" },
  aiStudio: { path: "/ai-studio", hash: "#/ai-studio" },
  contact: { path: "/contact", hash: "#/contact" },
  terms: { path: "/terms", hash: "#/terms" },
  privacy: { path: "/privacy", hash: "#/privacy" },
};

const pathToRouteKey = Object.fromEntries(
  Object.entries(routes).map(([key, route]) => [route.path, key]),
);

const hashToRouteKey = Object.fromEntries(
  Object.entries(routes)
    .filter(([, route]) => route.hash)
    .map(([key, route]) => [route.hash, key]),
);

function stripKnownBase(pathname) {
  if (
    appBaseWithoutSlash &&
    appBaseWithoutSlash !== "/" &&
    (pathname === appBaseWithoutSlash ||
      pathname.startsWith(`${appBaseWithoutSlash}/`))
  ) {
    return pathname.slice(appBaseWithoutSlash.length) || "/";
  }

  if (
    pathname === LEGACY_GITHUB_PAGES_BASE ||
    pathname.startsWith(`${LEGACY_GITHUB_PAGES_BASE}/`)
  ) {
    return pathname.slice(LEGACY_GITHUB_PAGES_BASE.length) || "/";
  }

  return pathname;
}

export function assetUrl(path) {
  return `${appBasePath}${path.replace(/^\/+/, "")}`;
}

export function routeHref(routeKey) {
  const route = routes[routeKey] || routes.home;

  if (useHashLinks && route.hash) {
    return `${appBasePath}${route.hash}`;
  }

  if (useHashLinks && routeKey === "home") {
    return `${appBasePath}#top`;
  }

  return route.path;
}

export function anchorHref(anchorId) {
  const normalizedAnchor = anchorId.replace(/^#/, "");

  if (useHashLinks) {
    return `${appBasePath}#${normalizedAnchor}`;
  }

  return `/#${normalizedAnchor}`;
}

export function getRouteState(location) {
  const hash = location.hash || "";

  if (hashToRouteKey[hash]) {
    return {
      routeKey: hashToRouteKey[hash],
      anchorId: "",
      hash,
    };
  }

  const strippedPath = normalizeRoutePath(stripKnownBase(location.pathname));
  const routeKey = pathToRouteKey[strippedPath] || "home";
  const anchorId = hash && !hash.startsWith("#/") ? hash.slice(1) : "";

  return {
    routeKey,
    anchorId,
    hash,
  };
}

export function canonicalUrlForRoute(routeKey) {
  const route = routes[routeKey] || routes.home;
  return `${PRODUCTION_ORIGIN}${route.path === "/" ? "/" : route.path}`;
}
