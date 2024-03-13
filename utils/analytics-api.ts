/**
 * Tracks a pageview to our "imaginary api"
 */
export const trackPageview = (params: TrackingParams) => {
  $fetch('/api/pageview', {
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
