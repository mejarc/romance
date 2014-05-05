/* Author: Melanie Archer, twobanjos.com */
/* Next: 
 FB.__globalCallbacks.f1e4cd8a24({"error":{"message":"An active access token must be used to query information about the current user.","type":"OAuthException","code":2500}});
*/

/**
* Define the application
*/

var items,
RomanceApp = {
  // store the elements found
  elms: {
    wrapper:   $('#wrapper'),
    toggler:   $('.toggler'),
    generator: $('#generator'),
    reporter:  $('#reporter'),
    poster:    $('#poster')
  },
  init: function(){
    items = this.elms;
    this.bindActions();
  },
  // add event listeners 
  bindActions: function(){
    items.wrapper.on('load', items.toggler.hide());
    items.generator.on('click', RomanceApp.fetchName);
    items.poster.on('click', RomanceApp.postName);
  },
  // showing/hiding UI element
  toggleElement: function(elm){
    elm.toggle('fast');
  },
  // use data sent by backend
   handleName: function(data) {
    RomanceApp.toggleElement(items.toggler);
    items.reporter.attr('placeholder', '');
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
  },
  // Activate 'Post to Wall' button
  postName: function(){
    return items.reporter.val();
  }
};
/**
* Initialize the application.
*/

(function(){
  "use strict";
  RomanceApp.init();

  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/all.js', function(){
      FB.init({
        appId: '176341382563303', 
        status: true
      });

      FB.login(function(){
        var msg = RomanceApp.postName();
        console.log(msg);
        // FB.api('/me/feed', 'post', { message: 'My romance author name is ' + msg }, function(response){
        //   if (response){
        //     console.dir('Post ID: '+ response.id);
        //   }
        //   else {
        //     console.dir('Error; no FB response');
        //   }
        // });
      }, { scope: 'publish_actions' });

      $('#loginbutton, #feedbutton').removeAttr('disabled');
    });
})();

