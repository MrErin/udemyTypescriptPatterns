import chalk from 'chalk';
import { IErrorDisplayStrategy } from './IErrorDisplayStrategy';

export class ConsoleErrorDisplayStrategy implements IErrorDisplayStrategy {
  display(title: string, body: string): void {
    console.log(`${chalk.red(title)}: ${chalk.blue(body)}`);
  }
}
