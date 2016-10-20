$(document).ready(function () {
    
    $('.box').on('click', function () {
       $(this).addClass(color);
    });

    $('.box').on('dblclick', function () {
        $(this).removeClass(color);
    });

    $('#reset').on('click', function () {
        $('.box').removeClass(color);
    });

    var color = 'white';

    $('#red').on('click', function () {
        color = 'red';
    })
    $('#green').on('click', function () {
        color = 'green';
    })
    $('#blue').on('click', function () {
        color = 'blue';
    })
    $('#yellow').on('click', function () {
        color = 'yellow';
    })

}); //<--- end of jQuery