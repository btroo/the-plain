console.log('iFrame messaging loaded.');

function onMessage(messageEvent) {  
    /*
   messageEvent.origin: Protocol and domain origin of the message
   messageEvent.data: Message itself
   messageEvent.source: Window proxy object, useful to post a response 
   */
}

var windowProxy;
window.onload=function(){ 
    // Create a proxy window to send to and receive 
    // messages from the iFrame
    windowProxy = new Porthole.WindowProxy(
        'http://other-domain.com/proxy.html', 'guestFrame');

    // Register an event handler to receive messages;
    windowProxy.addEventListener(onMessage);
};