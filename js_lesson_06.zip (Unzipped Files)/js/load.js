function setup() {                                    // Declare function
    var textInput;                                    // Create variable
    textInput = document.getElementById('username');  // Get username output
    textInput.focus();                                // Give username focus
}

window.addEventListener('load', setup, false); // When page loaded call setup()

/* LONGER VERSION WITH IE8 (and lower) compability

if (el.addEvenListener) {
     el.addEvenListener('click', function(e) {
         itemDone(e);
     }, false);
  } else {
       el.attachEvent('onload', function(e){
         itemDone(e);
        });
 */
