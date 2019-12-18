import { ISubscriptionState } from './ISubscriptionState';
import { Subscription } from './Subscription';
import { PaidState } from './PaidState';
import { TrialExpiredState } from './TrialExpiredState';

export class TrialState implements ISubscriptionState {
  daysRemaining: number = 14;

  constructor(private _subscription: Subscription) {}
  pay(amount: number): void {
    this._subscription.state = new PaidState(this._subscription, amount);
  }
  checkExpiration(): void {
    this.daysRemaining--;
    if (this.daysRemaining <= 0) {
      this._subscription.state = new TrialExpiredState(this._subscription);
    }
  }
  report(): string {
    return `${this.daysRemaining} left in trial`;
  }
}
