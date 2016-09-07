'use strict';
if (this.AppName === undefined) this.AppName = {};

(function(context) {

  function templateObject(){
    console.log('working');

    var obj = {
      name: 'Princess'
    };

    var templateHtml = $('#object-template').html();
    var htmlFactory = _.template(templateHtml);
    var html = htmlFactory(obj);
    console.log('html', html);
  }

  function start() {

    templateObject();
    //Call your code here
    console.log('starting', context);

  }

  context.start = start;

})(window.AppName);
