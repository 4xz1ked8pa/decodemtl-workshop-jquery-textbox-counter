/* keyup event handler */
$('#the-textarea').on("input",function(evt) {
  var $characterCounter = $("#character-counter");
  var currentLength = evt.target.value.length;
  var maxLength = document.getElementById("the-textarea").getAttribute("maxlength");
  var availableLength = maxLength - currentLength;
  document.getElementById("character-counter").innerHTML = availableLength;
  if (availableLength/maxLength > .2) {
    $characterCounter.css("color","green");
  }
  else if (availableLength/maxLength < .2 && availableLength/maxLength > .1) {
    $characterCounter.css("color","yellow");
  }
  else if (availableLength/maxLength < .1) {
    $characterCounter.css("color","red");
  }
});
