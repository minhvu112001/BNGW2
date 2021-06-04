// This example has been updated to five on the keyup event instead of keypress
// (on the last line of the event listener) as new text is not in the textarea until the key is released

var el;                                                        // Declare variables

function charCount(e) {                                         // Declare function
    var textEntered, charDisplay, counter, lastkey;            // Declare variables
    textEntered = document.getElementById('message').value;   // User's text
    charDisplay = document.getElementById('charactersLeft');  // Counter element
    counter = (180 - (textEntered.length));                    // Nums of chars left
    charDisplay.textContent = counter;                         // Show chars left
    lastkey = document.getElementById('lastKey');     // Get last key item
    lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode;  // Create msg
}

el = document.getElementById('message');              // Get msg element
el.addEventListener('keyup', charCount, false);   // on keyup - call charCount()

