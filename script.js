$(document).ready(function() {
// has it run the JavaScript.

  var d = ("1")
// sets up a counter for which number variable to work on 
  var opp = $("textarea").val()
// operation variable
  var numr = $("textarea").val()
// first number varriable
  var numb = $("textarea").val()
// second number varriable
// sets up variables

  $(".a").click(function(a){
      console.log(numr)
      numr=$("textarea").val()
      $("textarea").val("")
      opp = a.target.innerHTML
      console.log(opp)
      d = ("2")
// makes operation buttons work.
  })

  $("#a").click(function () {
      numb = $("textarea").val()
      var ans = (numr +opp+ numb)
      console.log(ans)
      console.log(eval(ans))
      $("p").text(eval(ans))
// makes equals button work and displays answer.
  })

  $("#v").click(function () {
      $("textarea").val("")
      numb = $("textarea").val()
      numr = $("textarea").val()
      numbl = $("textarea").val()
      d=("1")
      ans = $("textarea").val()
// makes clear "nuke" button work.
  })

    $(".ma").click(function (e) {
// makes number buttons work.

      if(d==="1"){
// changes which variable is being saved.

        numr= $("textarea").val()
        var li = numr + e.target.innerHTML
        $("textarea").val(li)
// first number

      } else {

          numb = $("textarea").val()
          var lio = numb + e.target.innerHTML
          $("textarea").val(lio)
// second number
      }
    })
});