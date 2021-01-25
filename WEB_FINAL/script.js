

$(function () {
    $('a[href*=\\#]:not([href=\\#])').on('click', function () {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1200);
            return false;
        }
    });
});


$(function() {
    
    var header = $("#navegacion");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 530) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    });
});


      
 