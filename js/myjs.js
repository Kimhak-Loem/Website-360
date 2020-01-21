$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function () {
        $('#result').html('');
        $('#state').val('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        $.getJSON('data.json', function (data) {
            $.each(data, function (key, value) {
                if (value.name.search(expression) != -1 || value.location.search(expression) != -1) {
                    $('#result').append('<li data-link="'+ value.link + '" ' +'class="list-group-item link-class"><img style="vertical-align: middle;" src="' + value.image + '" height="100" width="100" class="img-thumbnail" /> ' + value.name + ' | <span class="text-muted">' + value.location + '</span></li>');
                }
            });
        });
    });

    $('#result').on('click', 'li', function () {

        var link =$(this).attr('data-link');
        var click_text = $(this).text().split('|');
        console.log($(this).text());
        window.location = link;
        console.log(click_text);
        $('#search').val($.trim(click_text[0]));
        $("#result").html('');
    });
});