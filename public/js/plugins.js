
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
<<<<<<< HEAD
  if(this.console) console.log( Array.prototype.slice.call(arguments) );
=======
  if(this.console) /*console.log( Array.prototype.slice.call(arguments) )*/;
>>>>>>> 03457878c37a08e3a1a0d3e408348e32571a4289
};



// place any jQuery/helper plugins in here, instead of separate, slower script files.

