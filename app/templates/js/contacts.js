$(document).ready(function () {
  document.getElementById("menu").addEventListener("click", function() {
    var menu = document.getElementsByClassName("menu")[0];
    var toHide = menu.getAttribute("data-hidden") == "true" ? "false" : "true";
    menu.setAttribute("data-hidden", toHide);
  });

  // Анимация с текстом.
  var next = 1;
  function animate() {
    var list = ["&nbsp;&nbsp;saying hello.", "&nbsp;&nbsp;colloboration.", "work in our company.", "&nbsp;&nbsp;asking questions."];
    $(".animation-element-hidden").animate({
      top: "13px"
    }, 600);
    $(".animation-element").animate({
      top: "90px"
    }, 600, function() {
      next++;
      
      if (next == list.length) next = 0;
      $(".animation-element-hidden").attr("data-active", "1");
      $(".animation-element").addClass("animation-element-hidden").removeClass("animation-element");
      $(".animation-element-hidden[data-active='1']").addClass("animation-element").removeClass("animation-element-hidden");
      $(".animation-element").removeAttr("data-active");
      $(".animation-element").css("top", "13px");
      $(".animation-element-hidden").css("top", "-60px");
      $(".animation-element-hidden").html(list[next]);


    });

    setTimeout(animate, 3000);
  }

  // Этот setTimeout нужен для того, чтобы в начале цикл запустился не сразу.
  setTimeout(animate, 1000);
});
