var request;
var $current;
var cache = {};
var $frame = $('#photo-viewer');
var $thumbs = $('.thumb');

function crossfade($img) {

    if ($current) {
        $current.stop().fadeOut('slow');
    }

    $img.css({
        marginLeft: -$img.width() / 2,
        marginRight: -$img.height() / 2,
    });

    $img.stop().fadeTo('slow', 1);

    $current = $img;

}

$(document).on('click', '.thumb', function (e){
    var $img,
        src = this.href;
        request = src;
    e.preventDefault();

    $thumbs.removeClass('active');
    $(this).addClass('active');

    if (cache.hasOwnProperty(src)){
        if (cache[src].isLoading === false) {
            crossfade(cache[src].$img);
        }
    } else {
        $img = $('<img/>');
        cache[src] = {
            $img: $img,
            isLoading: true,
        };
    $img.on('load', function (){
        $img.hide();
        $frame.removeClass('is-loading');

        $img.attr({
            'src': src,
            'alt': this.title || ''
        });
    });
    }
});

$('.thumb').eq(0).click();