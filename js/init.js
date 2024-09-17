$(function(){
	$(".thumbnails a").attr('rel', 'gallery').fancybox();

	$("#nav-list li, #scroll_up").click(function(e) {
		e.preventDefault();
		 $('html, body').animate({
				scrollTop: $($(this).children("a").attr("href")).offset().top
		 },300);
	 });
});

$('#questions-email').html(function () {
    var e = "support";
    var a = "@";
    var d = "mytroublespots";
    var c = ".com";
    var h = 'mailto:' + e + a + d + c;
    $(this).parent('a').attr('href', h);
    return e + a + d + c;
});

$('#gen-email').html(function () {
    var e = "info";
    var a = "@";
    var d = "mytroublespots";
    var c = ".com";
    var h = 'mailto:' + e + a + d + c;
    $(this).parent('a').attr('href', h);
    return e + a + d + c;
});

$('#media-email').html(function () {
    var e = "media";
    var a = "@";
    var d = "mytroublespots";
    var c = ".com";
    var h = 'mailto:' + e + a + d + c;
    $(this).parent('a').attr('href', h);
    return e + a + d + c;
});