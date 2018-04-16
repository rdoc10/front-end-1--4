// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
    $('tr').remove();
    let x, y;
    for (x = 1; x <= height; x++) {
        $('#pixelCanvas').prepend('<tr id=row' + x + '></tr>');
        for (y = 1; y <= width; y++) {
            $('#row' + x).append('<td></td>');
        }
    }
};
// Select size input
$('#sub').click(function(e) {
    let height, width;
    height = $('#height').val();
    width = $('#width').val();
    e.preventDefault();
    makeGrid(height, width);
});
// Select color input
$('#pixelCanvas').click(function(e) {
    $("td").on('click', function() {
        let color = $("#colorPicker").val();
        $(this).css('background-color', color);
    });
});