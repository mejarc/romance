/* Author: Melanie Archer, twobanjos.com */

$(function () {
    "use strict";
    $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_US/all.js?', function(){
        FB.init({
          appId: '176341382563303',
          channelUrl: '//twobanjos.com/romance/channel.html',
        });     
        $('#loginbutton, #feedbutton').removeAttr('disabled');
       // FB.getLoginStatus(updateStatusCallback);
    });

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
        for (i = 0; i < len; i += 1) {
            names.push(lines[i]);
        }
        j = Math.floor(Math.random() * (len - 1));
        txName.attr("value", names[j]);
    }
    /**
     * Shows generated name and 'Post to Wall' button
     * @param {String} whichButton
     * @param {String} where
     * @param {String} newTxt
     */
    function moveButton(whichButton, where, newTxt) {
        var $btn, $where, v;
        $btn = $(whichButton);
        $where = $(where);
        if ($btn.filter(':visible')) {
            v = $btn.val();
            $btn.val(newTxt).insertAfter($where).addClass('secondary').show();
            $where.parent('li').slideDown('fast');
        } else {
            $btn.show();
        }
    }

    /**
     * Attaches click ajax event to 'Generate' button, shows 'Post to Wall' button
     * @param {Object} evt
     * @param {String} data
     */
    $('#generate').on('click', function (evt, data) {
        evt.preventDefault();
        $.ajax({
            type: "GET",
            dataType: "text",
            url: "/names.txt",
            success: function (data) {
                toggler.slideDown('fast');
                handleAuthor(data);
                moveButton('#generate', '#wall', 'Generate your next author name');
            }
        });
    });
    /** 
    * Attaches click post event to 'Wall' button
    * 
    *
    */
    $('#wall').on('click', function(){
        var body = 'My romance novel author name is: ' + txName.val();
        FB.api('/me/feed', 'post', { message: body }, function(response) {
            if (!response || response.error) {
                // redirect?!
            } else {
            console.dir('Post ID: ' + response.id);
            setTimeout(function(){window.location = obj.data.whereTo;}, 3000);

            }
        });
    });
});