$(function () {
    // Search Items
    $('nav .search').on('keyup search', function (e) {
        var value = $(this).val();
        var $el = $('nav');

        if (value) {
            var regexp = new RegExp(value, 'i');
           
            // hide all items
            $el.find('li').hide();

            $el.find('li').each(function (i, v) {
                var $item = $(v);

                if ($item.data('name') && regexp.test($item.data('name'))) {
                    $item.show();
                    $item.closest('.item').show();
                }
            });
        } else {
            $el.find('li').show();
        }
    });

    // Toggle when click an item element
    $('nav').on('click', '.title', function (e) {
        $(this).parent().find('.itemMembers').toggle();
    });
});