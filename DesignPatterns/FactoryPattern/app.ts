import { GameCharacterFactory } from './gameCharacterFactory';

let warrior = GameCharacterFactory.getWarrior(6);
let mage = GameCharacterFactory.getMage(12);

console.log(`Warrior at level 6: `, warrior);
console.log(`Mage at level 12: `, mage);
