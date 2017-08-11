$(document).ready(function() {
 $("#one").click(function() {
   $("#display").append("1");
 });
 $("#two").click(function() {
   $("#display").append("2");
 });
 $("#three").click(function() {
   $("#display").append("3");
 });
 $("#four").click(function() {
   $("#display").append("4");
 });
 $("#five").click(function() {
   $("#display").append("5");
 });
 $("#six").click(function() {
   $("#display").append("6");
 });
 $("#seven").click(function() {
   $("#display").append("7");
 });
 $("#eight").click(function() {
    $("#display").append("8");
  });
  $("#nine").click(function() {
    $("#display").append("9");
  });
  $("#zero").click(function() {
    $("#display").append("0");
  });
  $("#clear").click(function() {
    $("#display").empty();
  });
  $("#add").click(function(){
    $("#display").append("+");
  });
  $("#subtract").click(function(){
    $("#display").append("-");
  });
  $("#mult").click(function(){
    $("#display").append("*");
  });
  $("#div").click(function(){
    $("#display").append("/");
  });
  $("#enter").click(function(){
    var x = document.getElementById("display").textContent;
    if (x.includes("+")) {
      var n = x.indexOf("+");
      var y = x.substring(0, n);
      var y2 = parseInt(y, 10);
      var b = x.length;
      var z = x.substring(n+1, b);
      var z2 = parseInt(z, 10);
      var answer = y2 + z2;
      $("#display").empty();
      $("#display").append(answer);
      }
    else if (x.includes("-")) {
        var n = x.indexOf("-");
        var y = x.substring(0, n);
        var y2 = parseInt(y, 10);
        var b = x.length;
        var z = x.substring(n+1, b);
        var z2 = parseInt(z, 10);
        var answer = y2 - z2;
        $("#display").empty();
        $("#display").append(answer);
      }
      else if (x.includes("*")) {
          var n = x.indexOf("*");
          var y = x.substring(0, n);
          var y2 = parseInt(y, 10);
          var b = x.length;
          var z = x.substring(n+1, b);
          var z2 = parseInt(z, 10);
          var answer = y2 * z2;
          $("#display").empty();
          $("#display").append(answer);
        }
        else if (x.includes("/")) {
            var n = x.indexOf("/");
            var y = x.substring(0, n);
            var y2 = parseInt(y, 10);
            var b = x.length;
            var z = x.substring(n+1, b);
            var z2 = parseInt(z, 10);
            var answer = y2/z2;
            $("#display").empty();
            $("#display").append(answer);
          }




  });


});
