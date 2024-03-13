import {
  PAGEVIEW,
  SIGNUP_CLICK,
  VARIATION_CONTROL,
  VARIATION_TEST,
} from '~/utils/event-names';
import { countTrackingDataByVariation } from './tracking';

interface CTRResponse {
  pageViews: number;
  eventName: string;
  clicks: number;
  ctr: number;
}

interface AnalyzeResponse {
  winning: string;
  ctrs: CTRResponse[];
}

/**
 * Returns the CTR for all unique users (clicks divided by pageviews).
 * In this case since we only have one page, it is calculated for all pageview events.
 */
export default defineEventHandler(async (event): Promise<AnalyzeResponse> => {
  let result: CTRResponse[] = [];
  const testedVariations = [VARIATION_CONTROL, VARIATION_TEST];

  const promise = testedVariations.map(async (variationName) => {
    const pageViews = await countTrackingDataByVariation(
      PAGEVIEW,
      variationName
    );
    const clicks = await countTrackingDataByVariation(
      SIGNUP_CLICK,
      variationName
    );

    result.push({
      pageViews: pageViews.length,
      eventName: variationName,
      clicks: clicks.length,
      ctr: clicks.length / pageViews.length,
    });
  });
  await Promise.all(promise);

  const sortedResult = result.sort((a, b) => a.ctr - b.ctr);

  return {
    winning: sortedResult[sortedResult.length - 1].eventName,
    ctrs: result,
  };
});
