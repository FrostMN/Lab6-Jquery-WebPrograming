// JQuery document ready callback
$(function(){
    $("#addBtn").click(function () {
        addLi();
    });


    $("#addTxt").keydown(function (event) {
        if (event.keyCode == 13) {
            addLi();
            }
    });


    $("#clrBtn").click(function () {
        $('.done').css("display", "none");
    });


    function addLi() {
        var txtVal = $('#addTxt').val();
        if (txtVal != "") {
            var LI = makeLi(txtVal);
            $(LI).click(function () {
                $(this).toggleClass('done');
            });
            $(LI).hover(function () {
                $(this).css("cursor", "pointer");
            });

            $('#addTxt').val("");

            LI.appendTo("#list");
        }
    }


    function makeLi(txtVal) {
        var LI = $('<li>');
        //alert(txtVal);
        LI.html(txtVal);
        return LI;
    }


});
