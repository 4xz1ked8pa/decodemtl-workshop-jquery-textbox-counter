/* keyup event handler */
$('#the-textarea').keyup(function(evt) {
  var currentLength = evt.target.value.length;
  var maxLength = document.getElementById("the-textarea").getAttribute("maxlength");
  var availableLength = maxLength - currentLength;
  document.getElementById("character-counter").innerHTML = availableLength;
  if (availableLength/maxLength > .2) {
    $("#character-counter").css("color","green");
  }
  else if (availableLength/maxLength < .2 && availableLength/maxLength > .1) {
    $("#character-counter").css("color","yellow");
  }
  else if (availableLength/maxLength < .1) {
    $("#character-counter").css("color","red");
  }
});
