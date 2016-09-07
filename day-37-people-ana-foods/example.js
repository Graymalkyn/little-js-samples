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
// console.log(result);
// ===========================

function allPeopleWithFirstName(arr, name){
  var filteredList = arr.filter(function(person){
    return person.firstName === 'John';
  });
  return filteredList;
}

var result = allPeopleWithFirstName(people, 'John');
console.log(result);
