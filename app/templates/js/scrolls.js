$(function() {
  // Функция плавных скроллов по странице
  $(".scroller").each(function() {
		var href = $(this).attr('href');
		var hashPos = href.indexOf("#");
		var link = href.substring(0, hashPos);
		var hrefHash = href.substring(hashPos);
		var page = $(location).attr('pathname');
		return $(this).click(function(e) {
			e.preventDefault();
			$.scrollTo(hrefHash, 500);
		});
	});

});
