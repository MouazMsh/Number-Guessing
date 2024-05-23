var ran = Math.floor(Math.random() * 101);
var num = 0;

$(".guessbut").on("click", () => {
  $(".temp").remove();
  var str = $("#numberinp").val();
  if (str !== "") {
    if (parseInt(str) === ran) {
      num++;
      $(".inner").append(
        `<p style="color:green;" class = "temp"> You Got It Right! </p> <p class = "temp" style="color:#0d6efd;"> You have tried ${num} times</p>`
      );
      $(".guessbut").attr("disabled", "true");
      $("#numberinp").attr("disabled", "true");
    } else if (parseInt(str) > ran) {
      $(".inner").append(
        `<p style="color:red;" class = "temp"> Try Again!</p> <p class = "temp" style="color:#0d6efd;"> Choose Smaller Number </p>`
      );
      num++;
    } else {
      $(".inner").append(
        `<p style="color:red;" class = "temp"> Try Again!</p> <p class = "temp" style="color:#0d6efd;"> Choose Bigger Number </p>`
      );
      num++;
    }
  } else {
    alert("Please Enter a number....");
  }
});
