$(function() {
    $('#search').change(function(){
        $('#results').html('');
        var s = $(this).val();
        var results = $('img[alt*="' + s + '"],img[src*="' + s + '"]');
        var output = $('<div></div>').append(results.clone());
        $('#results').html(output.html());
    });
});