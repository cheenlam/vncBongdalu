$(document).ready(function() {
    $(`.mainSort li:eq(${localStorage.getItem('mainSort')})`).addClass('on');
    $(`.scoreTools li:eq(${localStorage.getItem('scoreTools')})`).addClass('on');
})

$('#esportsFilter li').click(function(){
    $('#esportsFilter li').removeClass('on');
    $(this).addClass('on')
})

