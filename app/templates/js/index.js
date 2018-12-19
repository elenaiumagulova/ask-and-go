window.onload = function() {
  $(".menu ul li").each(function(index, value) {
    // Начальные установки
    $(this).find("a").css({color: $(this).find("a").offset().top > $(".ground").offset().top && $(this).find("a").offset().top < $(".ground").offset().top + $(".ground").height() ? "white" : "black"});
    $(this).find("hr").css({backgroundColor: $(this).find("hr").offset().top > $(".ground").offset().top && $(this).find("hr").offset().top < $(".ground").offset().top + $(".ground").height() ? "white" : "black"});
  });

  document.getElementById("menu").addEventListener("click", function() {
    // Функция выдвигания элементов меню.
    var menu = document.getElementsByClassName("menu")[0];
    var toHide = menu.getAttribute("data-hidden") == "true" ? "false" : "true";
    menu.setAttribute("data-hidden", toHide);
  });


  $(document).scroll(function() {
    // Функция изменения цвета у элементов меню.
    $(".menu ul li").each(function(index, value) {
      $(this).find("a").css({color: $(this).find("a").offset().top > $(".ground").offset().top && $(this).find("a").offset().top < $(".ground").offset().top + $(".ground").height() ? "white" : "black"});
      $(this).find("hr").css({backgroundColor: $(this).find("hr").offset().top > $(".ground").offset().top && $(this).find("hr").offset().top < $(".ground").offset().top + $(".ground").height() ? "white" : "black"});
    });
  });
}
