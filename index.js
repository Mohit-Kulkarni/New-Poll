// jshint esversion: 6
var noBunk = document.getElementById('ip1');

noBunk.addEventListener("mouseover", function() {
  var rdm = (Math.floor(Math.random() * 100)) + 1;
  var minusPlus = (Math.floor(Math.random() * 2) + 1);
  if (minusPlus == 1) {
    this.style.marginLeft = rdm + "em";
  } else {
    this.style.marginLeft = -rdm + "em";
  }
  if (typeof window.navigator.vibrate !== 'function') return
  setInterval(() => {
    const duration = Math.floor(Math.random() * 600)
    window.navigator.vibrate(duration)
    console.log("Haptics ON");
  }, 1000);
});

noBunk.addEventListener("click", function() {

  alert("Kya problem hai re bhai/behen tera kyu Friday ko chahiye tereko class!??");
  window.addEventListener('popstate', () => {
    window.history.forward()
  });
});

document.getElementById('ip2').addEventListener("click", function() {


  alert("Tu Badlega Desh (Now I wonder what would have happened if I managed clicked the Friday button)");

});
