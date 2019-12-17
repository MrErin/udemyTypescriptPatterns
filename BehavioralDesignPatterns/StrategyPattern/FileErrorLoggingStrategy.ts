import fs from 'fs';
import { IErrorLoggingStrategy } from './IErrorLoggingStrategy';
export class FileErrorLoggingStrategy implements IErrorLoggingStrategy {
  log(err: Error): Promise<any> {
    return new Promise((resolve, reject) => {
      fs.appendFile(
        './BehavioralDesignPatterns/StrategyPattern/logs/error.log',
        `${err}\n`,
        'utf8',
        error => {
          if (error) {
            console.error('Error logging failed');
            resolve(error);
          } else {
            resolve();
          }
        },
      );
    });
  }
}
