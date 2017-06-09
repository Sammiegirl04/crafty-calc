$(document).ready(function() {
  $("button").click(function(){
    var validAmount = /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?(\.[0-9]{1,2})?$/;
    var x = document.getElementById("cost").value;
    var y = document.getElementById("units").value;
    var z = document.getElementById("time").value;
    var iscostValid = validAmount.test(x);
    var areUnitsValid = // new rgEx
    var isTimeValid = // new rgEx

    if(iscostValid && areUnitsValid && isTimeValid){
    	// move forward with math and return math
    } else {
    	// display errors to the user
    }
  });
});
