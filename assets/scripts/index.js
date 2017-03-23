$(document).ready(function() {
    $('.description').hide();
    $('.jump').click(function(e) {
        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top - 55
        }, 600);
    });
    
    $('td').hover(function() {
        $('.description', this).show(200);
    }, function() {
        $('.description', this).hide(500);
    });
});