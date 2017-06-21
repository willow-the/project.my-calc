$(document).ready(function() {

  /* Your Javascript Here */
// function answer() {
// num1 fun1 num2
// }

  var current = $("#name").text()
  $(".ma").click(function (e) {
      $("#name").text(current +e.target.innerHTML);
      current = $("#name").text()
      console.log(e.target.innerHTML)
  })
});