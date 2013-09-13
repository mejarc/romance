/* Author: Melanie Archer, twobanjos.com */
//shuffle is a linted riff on http://yelotofu.com/2008/08/jquery-shuffle-plugin/
(function($) {
    $.shuffle = function(arr) {
        for (var j, x, i = arr.length; i;) {
        j = parseInt(Math.random() * i,10); x = arr[--i]; arr[i] = arr[j]; arr[j] = x;
        }
        return arr;
    };
})(jQuery);

(function() {
    var t, txName;
    t = $('.toggled');
    txName = $("#output input[type=text]");

    function handleAuthor(jsdata) {
        var names, thisName, fullName, i;
        names = [];
        for (i = 0; i < jsdata.author.penname.length; i++) {
            thisName = $.shuffle(jsdata.author.penname[i]);
            names.push(thisName[0]);
            fullName = names.join(" ");
            txName.attr("value", fullName);
        }
    }

    function moveButton(whichButton, where, newTxt) {
        var $btn, $where,v;
        $btn = $(whichButton);
        $where = $(where);
        if ($btn.filter(':visible')) {
            v = $btn.val();
$btn.hide().val(newTxt).insertAfter($where).addClass('secondary').show();
 $where.parent('li').slideDown('fast');
        }
        else {
            $btn.show();
        }
   }


    $(document).delegate('#output #generate', 'click', function(evt, data) {
        evt.preventDefault();
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "/romance/js/mylibs/authors.json",
            success: function(data) {
                t.slideDown('fast');
                handleAuthor(data);
                moveButton('#generate', '#wall', 'Generate your next author name');
            }
        });
    });
})();

