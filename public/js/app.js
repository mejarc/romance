/* Author: Melanie Archer, twobanjos.com */

(function() {
    "use strict";
    var toggler, txName;
    toggler = $('.toggled');
    txName = $("#output input[type=text]");
/** 
* Opens Ruby-generated text file, reads
* each line, places data as value on form
* input.
* @param {String} txdata
*/
    function handleAuthor(txdata) {
        var lines = txdata.split("\n"),
            names = [],
            i,
            j,
            len = lines.length;
        for (i = 0; i<len; i+=1) {
            names.push(lines[i]);
        }
        j = Math.floor(Math.random() * (len - 1));
        txName.attr("value", names[j]);
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


    $(document).delegate('#generate', 'click', function(evt, data) {
        evt.preventDefault();
        $.ajax({
            type: "GET",
            dataType: "text",
            url: "/names.txt",
            success: function(data) {
                toggler.slideDown('fast');
                handleAuthor(data);
                moveButton('#generate', '#wall', 'Generate your next author name');
            }
        });
    });
})();

