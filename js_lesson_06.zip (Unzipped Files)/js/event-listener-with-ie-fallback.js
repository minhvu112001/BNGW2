var elUsername = document.getElementById('feedback');   // Get username input
var elMsg = document.getElementById('username');        // Get feedback element

function checkUsername(minLength) {                            // Declare function
    if (elUsername.value.length < minLength) {                 // If username too short
        // Set message
        elMsg.innerHTML = 'Username must be' + minLength + 'character or more';
    } else {                                                   // Otherwise
        elMsg.innerHTML = '';                                  // Clear message
    }
}

if (elUsername.addEventListener) {                             // If event listener supported
    elUsername.addEventListener('blur', function (){// When username loses focus
        checkUsername(5);                              // Call checkUsername()
    },   false);                                          // Capture during bubble phase
} else {                                                        // Otherwise
  elUsername.attachEvent('onblur', function (){                 // IE fallback: on blur
        checkUsername(5);                                   // Call checkUsername()
  });
}