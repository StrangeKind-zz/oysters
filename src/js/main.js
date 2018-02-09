$(document).ready(function () {

	(function($) {
		$.fn.visible = function(partial) {

			var $t            = $(this),
					$w            = $(window),
					viewTop       = $w.scrollTop(),
					viewBottom    = viewTop + $w.height(),
					_top          = $t.offset().top,
					_bottom       = _top + $t.height(),
					compareTop    = partial === true ? _bottom : _top,
					compareBottom = partial === true ? _top : _bottom;

				return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

			};

			})(jQuery);

			$(window).scroll(function(event) {

				$(".plx").each(function(i, el) {
					var el = $(el);
						if (el.visible(true)) {
						el.addClass("fadeInUp");
					}
				});
				$(".plx-1").each(function(i, el) {
					var el = $(el);
						if (el.visible(true)) {
						el.addClass("fadeIn");
				}
				});
				$(".plx-2").each(function(i, el) {
					var el = $(el);
						if (el.visible(true)) {
						el.addClass("twistInUp");
				}
				});

			});
});

var rotate = 20;
var pageX = $(document).width();
var pageY = $(document).height();
var mouseY=0;
var mouseX=0;

$(document).mousemove(function( event ) {
	mouseX = event.pageY;
	mouseY = event.pageX;
	rotateY = -(pageY/2-mouseY)/pageY*rotate;
	rotateX = (pageX/2-mouseX)/pageX*rotate;
	$('.header--inner__perspective').css({ '-webkit-transform' : 'scale(1) perspective( 1960px ) rotateY('+rotateY+'deg) rotateX('+rotateX+'deg)'});
});
