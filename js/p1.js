// JQuery document ready callback
$(function(){
    $('li').click(function () {
        $(this).fadeOut(3000);
    })

    $('b').click(function () {
        $('b').fadeOut(3000);
    })

});
