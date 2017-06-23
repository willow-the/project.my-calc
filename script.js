$(document).ready(function() {
  var numr = []
  var d = ("1")
  var opp = $("textarea").val()
  // var numr = $("textarea").val()
  var numb = $("textarea").val()
  // if(d==="1"){
  //   $(".ma").click(function (e) {
  //       // numr.push($("textarea").val())
  //       var li = numr + e.target.innerHTML
  //       $("textarea").val(li)
  //   })
  // } else {
  //       $(".ma").click(function (e) {
  //         numb = $("textarea").val()
  //         var lio = numb + e.target.innerHTML
  //         $("textarea").val(lio)
  //       })
  // }
  $(".a").click(function(a){
      console.log(numr)
      numr.push($("textarea").val())
      $("textarea").val("")
      opp = a.target.innerHTML
      console.log(opp)
      d = ("2")
  })
  $("#a").click(function () {
      numb = $("textarea").val()
      var ans = (numr +opp+ numb)
      console.log(ans)
      console.log( eval(ans))
      $("p").val(eval(ans))
  })


    $(".ma").click(function (e) {
      if(d==="1"){
        // numr.push($("textarea").val())
        var li = numr + e.target.innerHTML
        $("textarea").val(li)
      } else {
          numb = $("textarea").val()
          var lio = numb + e.target.innerHTML
          $("textarea").val(lio)
      }
    })
});