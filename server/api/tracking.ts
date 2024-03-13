import { Tracking } from '../models/tracking.model';

/**
 * Get tracking data from database grouped by unique user
 */
export const countTrackingDataByVariation = async (
  eventName: string,
  variationName: string
) => {
  try {
    // In a bigger project, this should also be matched with url, but here we only have one url.
    const data = await Tracking.aggregate([
      { $match: { eventName: eventName, variation: variationName } },
      { $group: { _id: '$userId' } },
    ]);

    return data;
  } catch (e: unknown) {
    return [];
  }
};
