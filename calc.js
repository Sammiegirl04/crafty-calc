$(document).ready(function() {
  $("button").click()(function(){
    var validAmount = /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+)?(\.[0-9]{1,2})?$/
    var x = document.getElementById("cost").value;

    console.log(x)
    console.log(x.match(validAmount));
  });
});
