export class StatsTracker {
  buttonClicks: number = 0;
  facebookShares: number = 0;
  twitterShares: number = 0;
  widgetViews: number = 0;

  constructor() {
    if (StatsTracker._instance) {
      throw new Error('Cannot initialize singleton class using new');
    }

    StatsTracker._instance = this;
  }

  // This initializes the only instance of the class. Because it's private and static, it can't be accessed outside of the class
  private static _instance: StatsTracker = new StatsTracker();

  public static get instance(): StatsTracker {
    return StatsTracker._instance;
  }
}
