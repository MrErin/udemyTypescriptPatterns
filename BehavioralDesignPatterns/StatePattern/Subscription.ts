import { ISubscriptionState } from './ISubscriptionState';
import { TrialState } from './TrialState';

export class Subscription {
  state: ISubscriptionState = new TrialState(this);
  pay(amount: number) {
    this.state.pay(amount);
  }
  dayPassed() {
    this.state.checkExpiration();
  }
  checkSubscriptionStatus() {
    console.log(this.state.report());
  }
}
