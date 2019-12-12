import 'reflect-metadata';
import { Container } from 'inversify';
import { IDepA } from './idepa';
import { TYPES } from './types';
import { ConcreteA } from './concretea';
import { IDepB } from './idepb';
import { ConcreteB } from './concreteb';
import { IDepC } from './idepc';
import { ConcreteC } from './concretec';

let container = new Container({
  // Transient is the default, but can set a different one here
  defaultScope: 'Transient',
});
// IDepA will be singleton
container
  .bind<IDepA>(TYPES.IDepA)
  .to(ConcreteA)
  .inSingletonScope();
// Getting a new instance every time. This is the default
container
  .bind<IDepB>(TYPES.IDepB)
  .to(ConcreteB)
  .inTransientScope();
// IDepC will have same instance until we call container.unbind
container
  .bind<IDepC>(TYPES.IDepC)
  .to(ConcreteC)
  .inRequestScope();

export default container;
