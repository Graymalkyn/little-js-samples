/* Characteristics of functions

1 Create some side-effect     ---> harder to debug and understand, test
2. Pure functions (Computational)    --->easier to debug and understand, test
^^^should never be mixed^^^^




*/



function doNothing() {
}

  doNothing();
  var resultOfDoNothing = doNothing();

  var numberOfMathematicalCalculations = 0;

  function add (num1, num2) {
    numberOfMathematicalCalculations += 1;


    var result = num1 + num2;
    return result;

  }
 var resultOfAdd = add(6, 5);
 // console.log(resultOfAdd, numberOfMathematicalCalculations);

 // console.log(add(9,10), numberOfMathematicalCalculations);


 var lineOfCSV = 'Bob,Smit,76';
 var lineOfCSV2 = 'Jane,Doe,47'

 function getFirstNameBad(lineOfCSV) {
   var index=0;
   var output='';
   while(lineOfCSV[index] !== ','){
     output+=lineOfCSV[index];
     index+=1;
   }
   return output;
 }

 var firstName = getFirstNameBad(lineOfCSV);

 function getFirstNameGood(lineOfCSV){
   var arr = lineOfCSV.split(',');
  //  console.log('split', arr);
   return arr[0];
 }

 firstName = getFirstNameGood(lineOfCSV);
 // console.log('first name is', firstName);
 // console.log('other csv line', getFirstNameGood(lineOfCSV));


 var story = 'It was a dark story night. Eric needed dinner, but his car was broken down. So he walked to Burger Street and bought a douyble cheeseburger, then walked home.'

 function stripDoubleSpaces(str){
   var result = str.replace(/  /g, ' ');
   return result;
 }

 var stripped = stripDoubleSpaces(story);



 function calculateWordCount(str){
  //  var arr = str.split(' ');
  //  var arrLength = arr.length;
  //  return arrLength;
  //  or
   return str.split(' ').length;

 }

 var wordCount = calculateWordCount(story);
 console.log('wordCount', wordCount)
