var menu = document.querySelector("#logo i");
var close = document.querySelector("#links i");

var tl = gsap.timeline();

tl.to("#links", {
    top:0,
    duration:0.6
})

tl.from("#links a", {
    y:-50,
    duration:0.5,
    stagger:0.2,
    opacity:0
})

tl.from("#links i", {
    opacity:0
})

tl.pause()

menu.addEventListener("click", function(){
    tl.play()
})

close.addEventListener("click", function(){
    tl.reverse()
})

