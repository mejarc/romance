/* Author: Melanie Archer, twobanjos.com

*/

//shuffle plugin, http://yelotofu.com/2008/08/jquery-shuffle-plugin/
(function ($) {
    $.shuffle = function (arr) {
        for (
        var j, x, i = arr.length; i;
        j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    }
})(jQuery);

(function () {
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


$(document).delegate('#output #generate"', 'click', function (evt, data) {
    evt.preventDefault();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/romance/js/authors.json",
        success: function (data) {
            t.slideToggle('fast');
            handleAuthor(data);
        }
    });
});
})();
