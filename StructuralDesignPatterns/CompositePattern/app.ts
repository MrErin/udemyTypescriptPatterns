import { CardDeck } from './cardDeck';
import { Card } from './card';

let cardDeck = new CardDeck();

cardDeck.add(new Card('Card1', 34, 56));
cardDeck.add(new Card('Card2', 12, 34));

let secondDeck = new CardDeck();

secondDeck.add(new Card('Card3', 34, 56));
secondDeck.add(new Card('Card4', 12, 34));

cardDeck.add(secondDeck);

cardDeck.add(new Card('Card5', 99, 100));

console.log(cardDeck.display());
