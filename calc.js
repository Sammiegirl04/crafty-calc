$(document).ready(function() {
  $("button").click(function(){
    var validAmount = /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?(\.[0-9]{1,2})?$/;
    var validUnit = /^[0-9]*$/;
    var validTime = /^[0-2][0-3]:[0-5][0-9]$/;
    var x = document.getElementById("cost").value;
    var y = document.getElementById("units").value;
    var z = document.getElementById("time").value;
    var lab = document.getElementById("labor").value;
    var iscostValid = validAmount.test(x);
    var areUnitsValid = validUnit.test(y);
    var isTimeValid = validTime.test(z);
    var isLaborValid = validAmount.test(lab);

    console.log(iscostValid);
    console.log(areUnitsValid);
    console.log(isTimeValid);

    if(iscostValid && areUnitsValid && isTimeValid && isLaborValid){
    	

    } else {
    	// display errors to the user
    )}
  });
});
