import { ErrorHandler } from './errorHandler';
import { ConsoleErrorDisplayStrategy } from './ConsoleErrorDisplayStrategy';
import { FileErrorLoggingStrategy } from './FileErrorLoggingStrategy';

let errorHandler = new ErrorHandler(
  new ConsoleErrorDisplayStrategy(),
  new FileErrorLoggingStrategy(),
);

try {
  let b: any = 2;
  b();
} catch (err) {
  errorHandler.handle(err, 'Something went wrong', 'Please try again later');
}
