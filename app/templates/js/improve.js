$(document).ready(function() {

  $("input[name='improve_send']").click(function() {
    var text = $("textarea[name='improve_mes']").val();
    var email = $("input[name='improve_email']").val();
    var sender = $("input[name='improve_name']").val();

    $.ajax({
      method: "POST",
      url: "/api/sendImprove",
      data: {
        text: text,
        name: sender,
        email: email
      },
      success: function(data) {
        if (data["success"]) {
          // Анимация добавления успешного сообщения.
          $(".feed").fadeTo("slow", 0, function() {
            $(this).html("<div class='chip green'>" + data["message"] + "</div>");
            $(this).fadeTo("slow", 1);
          });

        } else {
          // Анимация колебания. После нее идет вывод ошибки.
          $("#form").animate({
            marginLeft: "-20px"
          }, 100, function() {
            $("#form").animate({
              marginLeft: "+40px"
            }, 200, function() {
              $("#form").animate({
                marginLeft: "0"
              }, 100, function() {
                $(".feed").fadeTo("slow", 0, function() {
                  $(this).html("<div class='chip red'>" + data["message"] + "</div>");
                  $(this).fadeTo("slow", 1);
                });
              });
            });
          });
        }
      }
    });

  });
});
