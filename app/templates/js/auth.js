$(document).ready(function() {
  $("#menu").click(function() {
    var toHide = $(".menu").attr("data-hidden") == "true" ? "false" : "true";
    $(".menu").attr("data-hidden", toHide);
  });

  // Начальные анимации.
  $(".login").animate({
    top: "150px",
    opacity: "1"
  }, 1500, "easeInQuad");

  $(".reg").animate({
    top: "100px",
    opacity: "1"
  }, 1500, "easeInQuad");

  // Фукнция залогинивания.
  $("input[name='login_submit']").click(function() {
    var login = $("input[name='login_login']").val();
    var pass = $("input[name='login_pass']").val();


    $.ajax({
      method: "POST",
      url: "/api/login", // API создает сразу cookie, чтобы можно было оперировать с другими страницами.
      data: {
        login: login,
        pass: pass,
      },
      success: function(data) {
        // При успехе
        if (data["success"]) {
          // Переносим форму вверх и переходим на страницу dashboard.
          $(".login").animate({
            top: "50px",
            opacity: "0"
          }, 1500, "easeInOutQuad", function() {
            window.location = "./dashboard";
          });
        } else {
          // В противном случае, чистим предыдущие ошибки и выводим новые.
          var mes = data["message"];
          var errors = $(".errors");
          errors.fadeTo("slow", 0, function() {
            errors.html("");
            var html = "<div class='chip red'>" + mes[i] + "</div>";
            errors.html(errors.html() + html);
            errors.fadeTo("slow", 1);
          });

        }
      }
    });
  });

  // Функция регистрации.
  $("input[name='reg_submit']").click(function() {
    var login = $("input[name='reg_login']").val();
    var pass = $("input[name='reg_pass']").val();
    var pass2 = $("input[name='reg_pass2']").val();
    var email = $("input[name='reg_email']").val();

    $.ajax({
      method: "POST",
      url: "/api/register",
      data: {
        login: login,
        pass: pass,
        pass2: pass2,
        email: email
      },
      success: function(data) {
        // Если у нас все получилось.
        if (data["success"]) {
          // То выполняем плавный перенос формы вверх и переходим на страницу логина
          $(".reg").animate({
            top: "0",
            opacity: "0"
          }, 1500, "easeInOutQuad", function() {
            window.location = "./login";
          });
        } else {
          // Если ошибки все же есть, то мы показываем все ошибки.
          var mes = data["message"];
          var errors = $(".errors");
          errors.fadeTo("slow", 0, function() {
            errors.html("");
            for (var i = 0; i < mes.length; i++) {
              var html = "<div class='chip red'>" + mes[i] + "</div>";
              errors.html(errors.html() + html);
            }
            errors.fadeTo("slow", 1);
          });

        }
      }
    });
  });
});
