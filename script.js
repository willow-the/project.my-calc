$(document).ready(function() {

  /* Your Javascript Here */
// function answer() {
// num1 fun1 num2
// }

  var num1 = $("#name").text()
  $(".ma").click(function (e) {
      $("#name").text(num1 +e.target.innerHTML);
      num1 = $("#name").text()
  })
});