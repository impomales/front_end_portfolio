$(document).ready(function() {
    $('.jump').click(function(e) {
        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top 
        }, 600);
    });
});