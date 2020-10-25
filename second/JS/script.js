// Get the modal
var contactmodal = document.getElementById("myModal");

var toolsmodal= document.getElementById("myModal2");

// Get the button that opens the modal
var contact = document.getElementById("contact");
var tools = document.getElementById("tools");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
contact.onclick = function() {
  contactmodal.style.display = "block";
}
tools.onclick=function(){
    toolsmodal.style.display="block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    contactmodal.style.display = "none";
}

span2.onclick = function() {
    toolsmodal.style.display = "none";
}
  

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == contactmodal) {
    contactmodal.style.display = "none";
  }
}

window.onclick = function(event) {
    if (event.target == toolsmodal) {
      toolsmodal.style.display = "none";
    }
  }