$(document).ready(function(){
    $('input').focus(function(){
        $('h1').css('color', 'red');
        $('h1').css('transition', '0.3s ease');
        $('footer').css('color', 'white');
        // $('.who-done').text('zbyslav autumn/2020');
        $('footer').css('transition', 'all 0.5s ease');
    });
    $('input').blur(function(){
        $('h1').css('color', 'black');
        $('h1').css('transition', '0.3s ease');
        $('footer').css('color', 'black');
        // $('.who-done').text('');
        $('footer').css('transition', '0.5s ease');
    });
});