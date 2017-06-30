$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();

  $("#reset").click(function(){
    clearAll();
    $("input").val('');
  });

  $("#button").click(function(){
    clearAll();
    //var validAmount = /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?(\.[0-9]{1,2})?$/;
    var validAmount = /^\$?([1-9]\d{0,2}(,\d{3})*(\.\d{2})?|[1-9]\d*(\.\d{2})?|0?\.(?!00)\d{2})$/
    var validUnit = /^[0-9]+$/;
    var validTime = /^[0-9]+$/;
    var validMarkup = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/

    var x = document.getElementById("cost").value;
    var y = document.getElementById("units").value;
    var z = document.getElementById("time").value;
    var lab = document.getElementById("labor").value;
    var markup = document.getElementById("markup").value;

    var isCostValid = validAmount.test(x);
    var areUnitsValid = validUnit.test(y);
    var isTimeValid = validTime.test(z);
    var isLaborValid = validAmount.test(lab);
    var isMarkupValid = validMarkup.test(markup);

    if(isCostValid && areUnitsValid && isTimeValid && isLaborValid && isMarkupValid){
      var costPerUnit = x / y;
      var labCost = z /60 * lab;
      var price = costPerUnit + labCost * markup;
      var results = price.toFixed(2);
      document.getElementById("price").innerHTML = 'Your suggested selling price per item is: $' + results;

    } else {
        if (x === 0 || ! isCostValid){
          document.getElementById("costError").innerHTML = " Please enter a valid dollar amount";
      }
        if (! areUnitsValid || y == 0){
          document.getElementById("unitError").innerHTML = " Please enter at least 1 unit";
      }
        if (! isTimeValid || z == 0){
          document.getElementById("timeError").innerHTML = " Please enter time in minutes only";
      }
        if (! isLaborValid || lab == 0){
          document.getElementById("labError").innerHTML = " Please enter a valid dollar amount";
      }
        if (! isMarkupValid || markup == 0){
          document.getElementById("markupError").innerHTML = " Please enter a markup of at least 1";
      };
    };
  });
});

function clearAll() {
  $('#costError').empty();
  $('#unitError').empty();
  $('#timeError').empty();
  $('#labError').empty();
  $('#markupError').empty();
  $('#price').empty();
}
