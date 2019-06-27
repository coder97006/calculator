// Business or Back-End logic:

var add = function(num1, num2) {
    return num1 + num2;
};

var sub = function(num1, num2) {
    return num1 - num2;
};

var mul = function(num1, num2){
    return num1 * num2;
};

var div = function(num1, num2){
    return num1 / num2;
};

// Everything below this line is UI or Front-End logic:

$(document).ready(function() {
    $("form#add").submit(function(event) {
      event.preventDefault();
      var num1 = parseInt($("#add1").val());
      var num2 = parseInt($("#add2").val());
      var result = add(num1, num2);
      $("#output").text(result);
    });
  });


