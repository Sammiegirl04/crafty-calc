$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $("button").click(function(){
    var validAmount = /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?(\.[0-9]{1,2})?$/;
    var validUnit = /^[1-9]*$/;
    var validTime = /^[0-9]*$/;
    var x = document.getElementById("cost").value;
    var y = document.getElementById("units").value;
    var z = document.getElementById("time").value;
    var lab = document.getElementById("labor").value;
    var isCostValid = validAmount.test(x);
    var areUnitsValid = validUnit.test(y);
    var isTimeValid = validTime.test(z);
    var isLaborValid = validAmount.test(lab);

    console.log(isCostValid);
    console.log(areUnitsValid);
    console.log(isTimeValid);

    if(isCostValid && areUnitsValid && isTimeValid && isLaborValid){
      var costPerUnit = x / y;
      var labCost = z /60 * lab;
      var markup = document.getElementById("markup").value;
      var price = costPerUnit + labCost * markup;

      document.getElementById("price").innerHTML = 'Your suggested selling price per item is $' + price;

  //  } else {
    	// display errors to the user
    };
  });
});
