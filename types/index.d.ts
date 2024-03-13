declare interface TrackingParams {
  userId: string;
  url: string;
  variation?: string;
}

declare interface TrackingParamsEvent extends TrackingParams {
  eventName: string;
}

declare interface Variation {
  id: string;
  component: Component;
}
