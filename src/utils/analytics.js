export function trackEvent(eventName, properties = {}) {
  if (import.meta.env.DEV) {
    console.log("[analytics]", eventName, properties);
    return;
  }

  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.analytics?.track === "function") {
    window.analytics.track(eventName, properties);
  }
}
