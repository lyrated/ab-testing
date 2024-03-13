/**
 * Tracks a pageview to our "imaginary api"
 */
export const trackPageview = async (params: TrackingParams) => {
  await useFetch('/api/pageview', {
    method: 'POST',
    body: params,
  });
};

/**
 * Tracks an event to our "imaginary api"
 */
export const trackEvent = (params: TrackingParamsEvent) => {
  $fetch('/api/event', {
    method: 'POST',
    body: params,
  });
};
