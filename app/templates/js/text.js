$(document).ready(function () {

  document.getElementById("menu").addEventListener("click", function() {
    var menu = document.getElementsByClassName("menu")[0];
    var toHide = menu.getAttribute("data-hidden") == "true" ? "false" : "true";
    menu.setAttribute("data-hidden", toHide);
  });
  // Авто размер для текстового поля.
  jQuery.each(jQuery('textarea[data-autoresize]'), function() {
    var offset = this.offsetHeight - this.clientHeight;

    var resizeTextarea = function(el) {
        jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
    };
    jQuery(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
  });

  // Анимация текста перелистывания. Шаг - 3 секунды
  var next = 1;
  function animate() {
    var list = ["better.", "faster."];
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

  setTimeout(animate, 1000);

});
