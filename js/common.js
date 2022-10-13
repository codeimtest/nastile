$('.reset').on('click',function(){
  $('.matrix-title').addClass('pre_appear')
  setTimeout(function(){
    $('.matrix-title').removeClass('pre_appear')
  }, 500)
  
})

$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();

	return elementBottom > viewportTop && elementTop < viewportBottom;
};
var isEvent = false;

$(window).scroll( function() {
		if ($('.matrix-title').isInViewport()  ) {

				$(this).addClass('pre_appear')

		} 

});

/*

$(window).on('resize scroll', function() {
	
	if ($(this).isInViewport() && !isEvent ) {
		$('.matrix-title').each(function(){
			isEvent = true;
			$(this).addClass('pre_appear')
			setTimeout(function(){
				$(this).removeClass('pre_appear')
			}, 500)
		})
		
	} 
});

*/
//toggle header
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	 //>=, not <=
	if (scroll >= 100) {
			//clearHeader, not clearheader - caps H
			$("header").addClass("toggle-header");
	} else{
		$("header").removeClass("toggle-header");
	}
}); //missing );


$('.contact').click(function(e){
	$('.for-contact').addClass('active');
	$('body').addClass('lock');
	e.preventDefault();
});

$('.btn-close').click(function(){
	if ($(this).parent().parent().parent().hasClass("active")) {
		$(this).parent().parent().parent().removeClass("active");
		$('body').removeClass('lock');
	} else {
		$('body').removeClass('lock');
	}
	
})
$(document).mouseup(function (e) {
	var container = $(".popup-dialog");
	if (container.has(e.target).length === 0){
			$('.popup').removeClass('active');
	}
});
$(".phone").mask("+7(999) 999-9999");
// Vanilla JavaScript


