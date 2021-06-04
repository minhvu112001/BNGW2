// Create the HTML for the message
var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3p.m and 4p.m. ';
msg += 'During this time, there may be minor disruptions to service.</div>';

var elNote = document.createElement('div');          // Create a new element
elNote.setAttribute('id', 'note');          // Add an id of note
elNote.innerHTML = msg;                                      // Add the message
document.body.appendChild(elNote);                           // Add it to the note

function dismissNote() {                                     // Declare function
  document.body.removeChild(elNote);                         // Remove the note
}

var elClose = document.getElementById('close');     //Get the close button
elClose.addEventListener('click', dismissNote, false); // Click close-clear note