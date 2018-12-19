$(document).ready(function() {
  $("input[name='logout']").click(function() {
    // После нажатия прячем весь body, посылаем запрос на залогинивание, перехожу на главную страницу
    $("body").fadeTo("slow", 0, function() {
      $.ajax({
        method: "POST",
        url: "/api/logout",
        success: function(data) {
          // Переход при успехе.
          window.location = "/";
        }
      });
    });
  });
});
