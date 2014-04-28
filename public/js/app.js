/* Author: Melanie Archer, twobanjos.com */
/* Next: 
 FB.__globalCallbacks.f1e4cd8a24({"error":{"message":"An active access token must be used to query information about the current user.","type":"OAuthException","code":2500}});
*/

/**
* Define the application
*/

var items,
RomanceApp = {
  // store found elements
  elms: {
    toggler:   $('.toggler'),
    generator: $('#generator'),
    reporter:  $('#reporter')
  },
  init: function(){
    items = this.elms;
    this.bindActions();
  },
  // add event listeners 
  bindActions: function(){
    items.toggler.on('load', RomanceApp.toggleElement);
    items.generator.on('click', RomanceApp.fetchName);
  },
  // showing/hiding UI element
  toggleElement: function(elm){
    elm.toggle('fast');
  },
  // use data sent by backend
   handleName: function(data) {
    items.reporter.attr('placeholder', data);
    items.reporter.val(data);
  },
  // Use post request to obtain pseudonym
  fetchName: function(evt){
    evt.preventDefault();
    $.ajax({
        type: 'post',
        url: '/names'
      }).done(function(serverData) {
        RomanceApp.handleName(serverData);
    });
  }
};


/**
 * Shows generated name and 'Post to Wall' button
 * @param {String} whichButton
 * @param {String} where
 * @param {String} newTxt
 */
// function moveButton(whichButton, where, newTxt) {
//   var $btn, $where, v;
//   $btn = $(whichButton);
//   $where = $(where);
//   if ($btn.filter(':visible')) {
//       v = $btn.val();
//       $btn.val(newTxt).insertAfter($where).addClass('secondary').show();
//       $where.parent('li').slideDown('fast');
//   } else {
//       $btn.show();
//   }
// }

  // $.ajaxSetup({ cache: true });
  // $.getScript('//connect.facebook.net/en_US/all.js?', function(){
  //     FB.init({
  //       appId: '176341382563303',
  //       status: true,
  //       cookie: true,
  //       oauth: true,
  //       channelUrl: '//twobanjos.com/romance/channel.html'
  //     });     
  //     $('#loginbutton, #feedbutton').removeAttr('disabled');
     // FB.getLoginStatus(updateStatusCallback);


    /** 
    * Attaches click post event to 'Wall' button
    * 
    *
    */
  // $('#wall').on('click', function(){
  //   var body = 'My romance novel author name is: ' + txName.val();
  //               FB.api('/me', function(response) {
  //                 console.log(response.name);
  //             });
  //   FB.api('/me/feed', 'post', { message: body }, function(response) {
  //       if (!response || response.error) {
  //         console.dir('Error. ');
  //       } else {
  //         console.dir('Post ID: ' + response.id);
  //       }
  //   });
  // });

/**
* Initialize the application.
*/

(function(){
  "use strict";
  RomanceApp.init();
})();

