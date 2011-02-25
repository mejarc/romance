//this code need to be move in function
$(document).ready(function() {
  //create the export UI
  $('body').append('<div id="cssunit"><h3>CSSunit<a href="#">open</a></h3><div class="content"></div></div>');
  var cssunit = $('#cssunit');
  var menu =  '<ul>'
  + '<li><a href="#" class="track">start-selection</a></li>'
  + '<li><a href="#" class="untrack">stop-selection</a></li>'
  + '<li><a href="#" class="export">export test function</a></li>'
  + '</ul>';
  $('.content',cssunit).append(menu);
  $('h3 a',cssunit).click(function(event){
    $('#cssunit .content').slideToggle('fast');
  }
  );

  $('.track',cssunit).click(function(event){
    $('body:not(#cssunit)').outline('start'); //FIXME 'not' don't work
  });
  
  $('.untrack',cssunit).click(function(event){
    $('body:not(#cssunit)').outline('stop'); //FIXME 'not' don't work
  });
  
});

/*
 * cssunit plugin
 */
(function( $ ){
  //Select element like firebug
  $.fn.outline = function(statu) {
    return this.each(function() {
      var $this = $(this);
      if ( !statu || statu == 'start' ) {
        $this.bind('mouseover.cssunit mouseout.cssunit', function(event) {
          $(event.target).toggleClass('cssunit-outline-element');
        });

        $this.bind('click.cssunit',function(event) {
          $(event.target).toggleClass('cssunit-outline-element-selected');
        });
      }
      if ( !statu || statu == 'stop' ) {
        $this.unbind('.cssunit');
      }
    });
  };

  //
  $.fn.cssComputed = function(){
    var attr = ['font-family','font-size','font-weight','font-style','color',
    'text-transform','text-decoration','letter-spacing','word-spacing',
    'line-height','text-align','vertical-align','direction','background-color',
    'background-image','background-repeat','background-position',
    'background-attachment','opacity','width','height','top','right','bottom',
    'left','margin-top','margin-right','margin-bottom','margin-left',
    'padding-top','padding-right','padding-bottom','padding-left',
    'border-top-width','border-right-width','border-bottom-width',
    'border-left-width','border-top-color','border-right-color',
    'border-bottom-color','border-left-color','border-top-style',
    'border-right-style','border-bottom-style','border-left-style','position',
    'display','visibility','z-index','overflow-x','overflow-y','white-space',
    'clip','float','clear','cursor','list-style-image','list-style-position',
    'list-style-type','marker-offset'];
    var len = attr.length, obj = {};
    for (var i = 0; i < len; i++){
      obj[attr[i]] = jQuery.fn.css.call(this, attr[i]);
    }
    return obj;
  }
})( jQuery );
