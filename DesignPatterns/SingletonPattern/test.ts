import { StatsTracker } from './statsTracker';

export function test() {
  let tracker = StatsTracker.instance;
  console.log(`Widget Views: ${tracker.widgetViews}`);
  console.log(`Twitter Shares: ${tracker.twitterShares}`);
}
