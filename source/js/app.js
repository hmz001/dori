function toggleNav(){
    var x = document.getElementById('nav-responsive');
    if(x.className ==='nav-responsive'){
      console.log("found1");
      x.className += " unfold";
    }else {
      x.className = "nav-responsive";
    }
}
function showAlert() {
  var x = document.getElementById('#header');
  alert('Button is pressed');
}
// JavaScript
window.sr = ScrollReveal();
sr.reveal('#header img.phone');
 sr.reveal('#brands', {
      delay: 1000,
      duration: 300,
      origin: 'bottom',
      distance: '50px'
  });
sr.reveal('#features', {
     delay: 1000,
     duration: 200,
     origin: 'bottom',
     distance: '100px'
 });
 sr.reveal('#discount .offer', {
      delay: 200,
      duration: 500,
      origin: 'right',
      distance: '100px'
  });

  sr.reveal('#discount .offerimg', {
       delay: 200,
       duration: 500,
       origin: 'left',
       distance: '100px'
   });
