import { ISubscriptionState } from './ISubscriptionState';
import { Subscription } from './Subscription';
import { TrialExpiredState } from './TrialExpiredState';

export class PaidState implements ISubscriptionState {
  amountPaid: number = 0;
  constructor(private _subscription: Subscription, amount: number) {
    this.amountPaid = amount;
  }
  pay(amount: number): void {
    throw new Error('already paid');
  }
  checkExpiration(): void {
    this._subscription.state = new TrialExpiredState(this._subscription);
  }
  report(): string {
    return `on paid plan with $${this.amountPaid} subscription`;
  }
}
