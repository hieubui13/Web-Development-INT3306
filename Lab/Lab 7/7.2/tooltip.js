// Show tooltip
function showTip() {
  var sidTip = document.getElementById("sidTip"); // Get the tooltip element
  sidTip.style.display = "inline";                // Make it visible
}

// Hide tooltip
function hideTip() {
  var sidTip = document.getElementById("sidTip"); // Get the tooltip element
  sidTip.style.display = "none";                 // Hide it
}

// Link events
function init() {
  var sid = document.getElementById("sid"); // Get the input field

  // Link mouse and keyboard 
  sid.onmouseover = showTip;
  sid.onmouseout = hideTip;
  sid.onfocus = showTip;
  sid.onblur = hideTip;
}

// 4. Init loads
window.onload = init;
