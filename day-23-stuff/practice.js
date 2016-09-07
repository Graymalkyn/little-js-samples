
var someNumbers = [1,5,8,45,66];

function sumSomeNumbers(arr){
  var sum = 0;
  for (var i=0; i<arr.length; i++){
    sum = sum + arr[i];
    return sum;
  }
}

var sum = sumSomeNumbers(someNumbers);


function sumSomeNumbersAgain(arr){
  var sum = 0;
  arr.forEach(function(item){
    sum = sum + item;
  });
  return sum;
}


sum = sumSomeNumbersAgain(someNumbers);
// console.log('sum', sum);


function giveMeOdds(arr){
  var odds = [];
  arr.forEach(function(item){
    // console.log('is it odd?', item);
    if (item % 2 === 1){

      odds.push(item)
    }
  });
  return odds;
}

var odds = giveMeOdds(someNumbers);

var oddSum = sumSomeNumbersAgain(giveMeOdds(someNumbers));
console.log('odd sum', oddSum);
