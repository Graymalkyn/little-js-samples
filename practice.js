// console.log('yo');
var person1;
var person2;

function generateCharacters(){
  person1 = { name: 'Jesse', hp:10 };
  person2 = { name: 'Frank', hp:10 };
}

generateCharacters();

function doRandomDamage(){
  var damage = Math.floor(Math.random() * 3);
  person1.hp -= damage;

  damage = Math.floor(Math.random() * 3);
  person2.hp -= damage;
}

function fight(){
  doRandomDamage();
  }

  if (person1.hp <1 || person2.hp <1){
    clearInterval(intervalid);
  }

var intervalid = setInterval(fight, 1000);

// while (person1.hp > 0 && person2.hp > 0) {
//   doRandomDamage();
// }

console.log(person1, person2);
