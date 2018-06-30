

$('#sizePicker').submit(function (event) {

  event.preventDefault();
  let height = $('#inputHeight').val();
  let width = $('#inputWeight').val();
  makeGrid(height, width);
  
})
function makeGrid(x,y) {
    $('tr').remove();

    for (let i = 1; i<= x; i++){
        $('#pixelCanvas').append('<tr></tr>');
        for(let j = 1; j <=y; j++) {
            $('tr'). filter(':last'). append('<td></td>');
        }
    }

    $('td').click(function addColor(){
        color = $('#colorPicker').val();

        if($(this).attr('style')) {
            $(this).removeAttr('style');
        }
        else{
            $(this).attr('style', 'background-color:' + color);
        }
    })
}