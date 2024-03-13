import { Tracking } from '~/server/models/tracking.model';

/**
 * Creates a new user ID that does not exist yet
 */
export default defineEventHandler(async (event) => {
  try {
    let uid = (Math.random() + 1).toString(36).substring(2);

    const checkUidExists = async (uid: string) => {
      const result = await Tracking.findOne({ userId: uid }).exec();
      return result != null;
    };

    while (await checkUidExists(uid)) {
      uid = (Math.random() + 1).toString(36).substring(2);
    }

    return { userId: uid };
  } catch (e: unknown) {
    return { userId: '' };
  }
});
