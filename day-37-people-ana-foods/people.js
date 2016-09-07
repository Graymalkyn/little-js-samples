var people = [
  {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 60,
    favoriteFoods: ['peas', 'cauliflower']
  },
  {
    firstName: 'Eric',
    lastName: 'Sowell',
    age: 40,
    favoriteFoods: ['steak', 'shrimp']
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 32,
    favoriteFoods: []
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 78,
    favoriteFoods: ['chicken wings', 'pizza']
  },
  {
    firstName: 'Martha',
    lastName: 'Stewart',
    age: 54,
    favoriteFoods: ['prison stew', 'baked ziti']
  },
  {
    firstName: 'Jillian',
    lastName: 'Smith',
    age: 17,
    favoriteFoods: ['ham sandwich']
  },
  {
    firstName: 'Jeremiah',
    lastName: 'Jones',
    age: 22,
    favoriteFoods: []
  },
  {
    firstName: 'Selena',
    lastName: 'Kyle',
    age: 30,
    favoriteFoods: ['cobb salad', 'grilled trout']
  },
  {
    firstName: 'Jack',
    lastName: 'Livingston',
    age: 12,
    favoriteFoods: ['snickers', 'fried cheese', 'Cheese-Whiz', 'Three Musketeers', 'Rolos', 'pizza', 'ham']
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 58,
    favoriteFoods: ['cheeseburger']
  },
  {
    firstName: 'Sally',
    lastName: 'Ewing',
    age: 29,
    favoriteFoods: ['pickles']
  },
  {
    firstName: 'Chris',
    lastName: 'Cook',
    age: 40,
    favoriteFoods: ['nachos']
  }
];



function allPeopleWithFirstName(arr, name){
  var filteredList = [];
  for (var person of arr) {
    if (person.firstName === 'John'){
      filteredList.push(person);
    }
  }
  return filteredList;
}

var result = allPeopleWithFirstName(people, 'John');

//vvvvvvvvvvvvvvvvvvvv

function allPeopleWithFirstName(arr, name){
  var filteredList = arr.filter(function(person){
    return person.firstName === 'John';
  });
  return filteredList;
}

var result = allPeopleWithFirstName(people, 'John');

// ========================

function allPeopleWithFirstLetter(arr, letter) {
  var filteredList = [];
  for (var person of arr){
    if (person.firstName.indexOf(letter) === 0){
      filteredList.push(person);
    }
  }
  return filteredList;
}

var result2 = allPeopleWithFirstLetter(people, 'S');
// console.log(result2);

//vvvvvvvvvvvvvvvvvvvv

function allPeopleWithFirstLetter(arr, letter){
  var filteredList = arr.filter(function(person){
    return person.firstName.indexOf(letter) === 0;
  });
  return filteredList;
}

var result2 = allPeopleWithFirstLetter(people, 'S');
// console.log(result2);

// =====================

function allPeopleWhoLikeFood(arr, food){
  var filteredList = [];
  for (var person of arr){
    if (person.favoriteFoods.indexOf(food) > 1){
      filteredList.push(person);
    }
  }
  return filteredList;
}

var PizzaPeople = allPeopleWhoLikeFood(people, 'pizza');
// console.log('pizza people', PizzaPeople);

//vvvvvvvvvvvvvvvvvvvv

function allPeopleWhoLikeFood(arr, food){
  var filteredList = arr.filter(function(person){
    return person.favoriteFoods.indexOf(food) > 1;
  });
  return filteredList;
}

var PizzaPeople = allPeopleWhoLikeFood(people, 'pizza');
// console.log(PizzaPeople);

// ======================

function peopleWhoFavoriteMoreThanXFoods(arr, num){
  var filteredList = [];
  for (var person of arr){
    if (person.favoriteFoods.length > num){
      filteredList.push(person);
    }
  }
  return filteredList;
}


var nonPickyPeople = peopleWhoFavoriteMoreThanXFoods(people, 1);
// console.log('nonPickyPeople', nonPickyPeople);

//vvvvvvvvvvvvvvvvvvvv

function peopleWhoFavoriteMoreThanXFoods(arr, num) {
  var filteredList = arr.filter(function(person){
    return person.favoriteFoods.length > num;
  });
  return filteredList;
}

var nonPickyPeople = peopleWhoFavoriteMoreThanXFoods(people, 1);
console.log(nonPickyPeople);
