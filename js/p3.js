// JQuery document ready callback
$(function(){
    function onLoad() {
        $('span').css("font-weight", "bold");
    }

    onLoad();

    $('h2').click(function () {
        $(this).css("background-color", "green");
    });

    $('p').mouseover(function () {
        $(this).css("display", "none");
    });

    $('p').mouseout(function () {
        $(this).css("display", "block");
    });

    $('#h1_blue').click(function () {
        $('h1').css("color", "blue");
    });

    $('#remove_not_important').click(function () {
        $('.not_important').css("display", "none");
    });

    $('li').click(function () {
        $(this).slideUp(1000);
    })


});
