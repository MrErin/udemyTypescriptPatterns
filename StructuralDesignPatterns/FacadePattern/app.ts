import { JsonPlaceholderFacade } from './JsonPlaceholderFacade';
import { JsonPlaceholderService } from './JsonPlaceholderService';

let facade = new JsonPlaceholderFacade(new JsonPlaceholderService());
facade.getUser(1).then(u => {
  if (u) {
    console.log('user found: ', u);
  } else {
    console.log('user not found');
  }
});
