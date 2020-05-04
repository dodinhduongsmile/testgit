"use strict";
$(document).ready(function(){
    // thêm class active1 vào <a  và thêm class btn1 vào li
    $(function() {
        $('.menu li a').click(function(e) {
        e.preventDefault();
        $('.menu li a').removeClass('active');
        $(this).addClass('active');
    });
    });
});
// cho menu chạy từ từ xuống phần có id
    $('.wr-menu').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });
	// scroll Up, back totop

	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			$('.totop').fadeIn('slow');// hiển thị nút totop rõ dần khi top>600px
		} else {
			$('.totop').fadeOut('slow'); // mờ dần đi khi top<600px
		}
	});

	$('.totop').click(function () {
		$("html, body").animate({scrollTop: 0}, 1000);// cho chạy chậm 1000milis khi ấn totop
		return false;
	});
	// main-menu-scroll - menu chạy theo, cố định
	jQuery(window).scroll(function () {
	var top = jQuery(document).scrollTop();
	var height = 300;
	//alert(batas);

	if (top > height) {
		jQuery('.wrapper1').addClass('menu-scroll fadeInDown animated');
	} else {
		jQuery('.wrapper1').removeClass('menu-scroll fadeInDown animated');
	}
	});
//