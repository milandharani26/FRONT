function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
    //create two spans
    let parent = document.createElement("span")
    let child  = document.createElement("span")
    
    //parent and chaild both sets their  respective classes
    parent.classList.add("parent")
    child.classList.add("child")

    // span parents gets child and child get elem detail
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    // elem replaces its value with parent span
    elem.innerHTML=""
    elem.appendChild(parent)
});
}

function valueSetters(){
    gsap.set("#nav a",{ y : "-100%" , opacity : 0 })
    gsap.set("#home span .child",{ y : "100%"})
    gsap.set("#home .row img",{ opacity:0 })

    document.querySelectorAll("#Visual>g").forEach(function (e){
        var character = e.childNodes[1].childNodes[1]; 

        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })
}

function loaderAnimation(){

    var tl = gsap.timeline();

tl
.from("#loader .child span",{
    x:"50%",
    stagger: .1,
    ease:Power3.easeInOut,
    delay:1,    
    duration:1.1,
    opacity:0
})
.to("#loader .parent .child",{
        y:"-100%",
        ease:Circ.easeInOut,
        duration:1
    })
.to("#loader",{
        height:0,
        ease:Circ.easeInOut,
        duration:1
    })
.to("#green",{
        height:"100%",
        top:0,
        ease:Circ.easeInOut,
        duration:1,
        delay:"-.7"

    })
.to("#green",{
        height:"0%",
        top:0,
        delay:"-.3",
        ease:Circ.easeInOut,
        duration:0.9,
        onComplete:function(){
            animateHomepage();
        }
    })
}

function animatesvg() {
    
    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
        strokeDashoffset:0,
        duration:2,
        ease:Expo.easeInOut,
        // delay:4.5
    })
}

function animateHomepage(){
   

    var tl = gsap.timeline();

    tl
    .to("#nav a",{
        y:0,
        opacity:1,
        stagger:.05,
        ease:Expo.easeInOut
    })
    .to("#home .parent  .child",{
        y:0,
        // opacity:1,
        duration:1.5,
        stagger:.1,
        ease:Expo.easeInOut
    })
    .to("#home .row img",{
        opacity:1,
        delay:"-.5",
        ease:Expo.easeInOut,
        onComplete: function(){
            animatesvg();
        }
    })
}


revealToSpan();
valueSetters();
loaderAnimation();


