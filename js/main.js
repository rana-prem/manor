

//scroll trigger
document.addEventListener('DOMContentLoaded', function(){
    var trigger = new ScrollTrigger();


});

//Navigation and Hero Animation
var tl = anime.timeline({
  easing: 'easeOutQuart',
  duration: 750,
});

// Add children
tl
.add({
  targets: '.navbar',
 translateY: [-50, 0], // from 100 to 250
 opacity:[0,1],
 direction: 'alternate',
 duration:1200,
 easing:"easeOutSine",
 delay:300
})
.add({
  targets: '.hero-logo-large',
  translateY: [50, 0],
  opacity:[0,1],
  duration:600,
  easing:"easeOutQuart",
  offset: '-=300'
}, '-=3000')
.add({
  targets: '.hero-header',
  translateY: [50, 0],
  opacity:[0,1],
  duration:600,
  easing:"easeOutQuart",
  offset: '-=300'
}, '-=3000')
.add({
  targets: '.hero-para',
  translateY: [50, 0],
  opacity:[0,1],
  duration:600,
  easing:"easeOutQuart",
  offset: '-=300'
}, 0 )

.add({
  targets: '.btn-standard',
  translateY: [50, 0],
  opacity:[0,1],
  duration:600,
  easing:"easeOutQuart",
  offset: '-=300'
}, 0 );
