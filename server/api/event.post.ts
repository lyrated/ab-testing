import { Tracking } from '../models/tracking.model';

/**
 * Dummy Web analytics API to track an event
 */

export default defineEventHandler(async (event) => {
  const { userId, url, eventName, variation } =
    await readBody<TrackingParamsEvent>(event);

  await Tracking.create({
    userId: userId,
    url: url,
    eventName: eventName,
    variation: variation,
  });

  return { success: true };
});
