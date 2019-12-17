import { IErrorDisplayStrategy } from './IErrorDisplayStrategy';
import { IErrorLoggingStrategy } from './IErrorLoggingStrategy';

export class ErrorHandler {
  constructor(
    private _displayStrategy: IErrorDisplayStrategy,
    private _loggingStrategy: IErrorLoggingStrategy,
  ) {}

  handle(err: Error, title: string, body: string): Promise<any> {
    this._displayStrategy.display(title, body);
    return this._loggingStrategy.log(err);
  }
}
