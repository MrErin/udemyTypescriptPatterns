import { StatsTracker } from './statsTracker';
import { test } from './test';

let tracker = StatsTracker.instance;

tracker.widgetViews = 90;
tracker.buttonClicks = 64;
tracker.facebookShares = 20;
tracker.twitterShares = 30;

console.log(`WidgetViews: ${tracker.widgetViews}`);
console.log(`buttonClicks: ${tracker.buttonClicks}`);
console.log(`facebookShares: ${tracker.facebookShares}`);
console.log(`twitterShares: ${tracker.twitterShares}`);

tracker.widgetViews++;
tracker.twitterShares += 2;

test();

// this won't be allowed
let tracker2 = new StatsTracker();
