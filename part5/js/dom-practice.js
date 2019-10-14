/*eslint-env browser*/

//STEP 1
function displayMessage() {
    'use strict';
    alert("I have been clicked");
}

//STEP 2
var button2 = document.getElementById('btn2');
button2.onclick = displayMessage;

//STEP 3
var button3 = document.getElementById('btn3');
button3.addEventListener('click', displayMessage);

//STEP 4
var button4 = document.getElementById('btn4');
button4.addEventListener('click', function() {
    'use strict';
    alert("I have been clicked");
})

//STEP 5
window.addEventListener('load', function() {
    'use strict';
    var button5 = document.getElementById('btn5');
    button5.addEventListener('click', function() {
        alert('I have been clicked');
    });
});
