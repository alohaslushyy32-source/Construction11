document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks! We’ll contact you soon.");
  this.reset();
});
