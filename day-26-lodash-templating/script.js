'use strict';
if (this.AppName === undefined) this.AppName = {};
AppName
(function(context) {

  function templateObject(){
    console.log('working');

    var obj = {
      name: 'Princess',
      color: 'black'
    };

    var templateHtml = $('#object-template').html();  //template
    var htmlFactory = _.template(templateHtml);  //template function
    var html = htmlFactory(obj);      //output html
    console.log('html', html);

    var objectPlace = $('#object-place');
    objectPlace.html(html);
  }

  function templateListOfNumbers(){
    var numbers = [1, 6, 9, 42, 7];

    var templateHtml = $('#number-list-template').html();
    var htmlFactory = _.template(templateHtml);
    var numberList = $('#list-of-numbers');

    for (var i = 0; i < numbers.length; i++){
      var html = htmlFactory({ num:numbers[i] });
      numberList.append(html);
    }
  }


  function templateListOfStrings(){
    var names = ['Captain America', 'The Hulk', 'Spider-man', 'Nick Fury'
    ];

    var templateHtml = $('#hero-list').html();
    var htmlFactory = _.template(templateHtml);
    var heroList = $('#list-of-strings');

    for (var i = 0; i < names.length; i++){
      var html = htmlFactory({ hero:names[i] });
      heroList.append(html);
    }

  }

  function templateListOfObjects(){
    var food = [
      {
        name: 'steak',
        deliciousness: 10
      },
      {
        name: 'shrimp',
        deliciousness: 2
      },
      {
        name: 'tofu',
        deliciousness: 0.1
      },
      {
        name: 'nachos',
        deliciousness: 7
      },

    ];


      var templateHtml = $('#food-list').html();  //template
      var htmlFactory = _.template(templateHtml);
      console.log('htmlFactory', htmlFactory);
 //template function
      var foodList = $('#list-of-foods');

      for (var i = 0; i < food.length; i++){
        var html = htmlFactory(
          {
            name: food[i].name,
            deliciousness: food[i].deliciousness
          });
          foodList.append(html);


        console.log(html);
      }

  }

  function start() {

    templateObject();
    templateListOfNumbers();
    templateListOfStrings();
    templateListOfObjects();
    //Call your code here
    console.log('starting', context);

  }

  context.start = start;

})(window.AppName);
