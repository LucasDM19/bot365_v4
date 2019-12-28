$.waitFor=function(elemento, func, timeout=15000){
	var cont=0;
	var loopWait=setInterval(function(){
		if( $(elemento).size()==1){
			clearInterval(loopWait);
			func();
		}
		cont=+100;
		if (cont>=timeout) clearInterval(loopWait);
	},100);	
	
};

$.click=function(target, options) {
  target=$(target)[0];
  var event = target.ownerDocument.createEvent('MouseEvents'),
      options = options || {},
      opts = { // These are the default values, set up for un-modified left clicks
        type: 'click',
        canBubble: true,
        cancelable: true,
        view: target.ownerDocument.defaultView,
        detail: 1,
        screenX: 0, //The coordinates within the entire page
        screenY: 0,
        clientX: 0, //The coordinates within the viewport
        clientY: 0,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false, //I *think* 'meta' is 'Cmd/Apple' on Mac, and 'Windows key' on Win. Not sure, though!
        button: 0, //0 = left, 1 = middle, 2 = right
        relatedTarget: null,
      };
  //Merge the options with the defaults
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      opts[key] = options[key];
    }
  }

  //Pass in the options
  event.initMouseEvent(
      opts.type,
      opts.canBubble,
      opts.cancelable,
      opts.view,
      opts.detail,
      opts.screenX,
      opts.screenY,
      opts.clientX,
      opts.clientY,
      opts.ctrlKey,
      opts.altKey,
      opts.shiftKey,
      opts.metaKey,
      opts.button,
      opts.relatedTarget
  );

  //Fire the event
  target.dispatchEvent(event);
};


