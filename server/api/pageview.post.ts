import { Tracking } from '../models/tracking.model';

/**
 * Dummy Web analytics API to track a pageview
 */

export default defineEventHandler(async (event) => {
  try {
    const { userId, url, variation } = await readBody<TrackingParams>(event);

    await Tracking.create({
      userId: userId,
      url: url,
      eventName: 'pageview',
      variation: variation,
    });

    return { success: true };
  } catch (e: unknown) {
    return { success: false };
  }
});
