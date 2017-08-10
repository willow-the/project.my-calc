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
    console.log(x);
    if (x.includes("+")) {
      var n = x.indexOf("+");
      console.log(n);
      var y = x.substring(0, n);
      console.log(y);
      var y2 = parseInt(y, 10);
      console.log(y2);
      console.log(typeof y2);

    }

  });


});
