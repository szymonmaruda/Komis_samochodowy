var input = document.getElementById('Description');
var charCounter = document.getElementById('charsLeft');

var max_length = 255;

charCounter.innerHTML = max_length;

var onKeyDown = function(){
  charCounter.textContent = max_length - input.value.length;
}

input.addEventListener("keydown", onKeyDown);
