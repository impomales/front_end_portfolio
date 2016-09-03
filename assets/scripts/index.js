$(document).ready(function() {
    $('.description').hide();
    $('.jump').click(function(e) {
        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top - 250
        }, 600);
    });
    
    $('td').hover(function() {
        $('.description', this).show();
    }, function() {
        $('.description', this).hide();
    });
});