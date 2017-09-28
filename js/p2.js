$(function(){
    // TODO update the numbers in total_visited and total_not_visited spans
    // TODO select all class=place elements. When they are clicked, add the class "visited"
    // TODO keep the the numbers in total_visited and total_not_visited spans updated as user selects more places
    // TODO Display an alert when all destinations have been visited

    function updateList() {
        var places = $('.place').length;
        var visited = $('.visited').length;
        var unvisited = places - visited;
        $('#total_visited').html(visited);
        $('#total_not_visited').html(unvisited);

        if (visited == places) {
            alert("Youve been every where!")
        }
    }

    $('li').click(function () {
        $(this).addClass('visited');
        updateList();
    });



});
