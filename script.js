function valuesetters(){
    gsap.set("nav a", {
        y:"-100%",
        opacity:0
    })

    gsap.set("#home span .child", {
        y:"100%",

    })

    gsap.set(".visual .image img", {
        opacity:0
    })

    gsap.set(".animation .a, .animation .b",{
        y:160,
        opacity:0,
        fontFamily: "Quintessential"


    })
 
   
}

function revealToSpan(){
    let reveal = document.querySelectorAll(".reveal")

reveal.forEach((elem) => {
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");

    span1.classList.add("parent");
    span2.classList.add("child");

    span2.innerHTML = elem.innerHTML;
    span1.appendChild(span2);

    elem.innerHTML = "";
    elem.appendChild(span1);
});
}

function loader(){
    let tl = gsap.timeline();

tl.from("#loader .parent .child span",{
    x:"400%",
    duration:1,
    delay:1,
    ease:Power3,
    stagger:.4
})
.to("#loader .parent .child" ,{
    y:"-100%",
    duration:2,
    ease:Circ.easeInOut
})
.to("#loader",{
    height:0,
    duration:1,
    ease:Circ.easeInOut
})
.to("#green",{
    top:0,
    duration:1,
    delay:-1,
    ease:Circ.easeInOut
})
.to("#green",{
    height:0,
    duration:1,
    delay:-0.6,
    ease:Circ.easeInOut,
    onComplete:function(){
        animateHomepage();
    }
})

}

function Visualanimation(){
var ani = document.querySelector(".animation")

var spantext = ani.textContent
var clutter = "";
var splited = spantext.split("");
let halflenght = Math.floor(splited.length/2);

splited.forEach((elem,  idx)=>{
    if(idx<halflenght){
        clutter += `<span class="a">${elem}</span>`
    }  
    else{
        clutter += `<span class="b">${elem}</span>`
    }
})

ani.innerHTML = clutter;
}

function visualGsap(){

gsap.to(".animation .a",{
    y:0,
    opacity:1,
    duration:1.5,
    delay:0.5,
    stagger:0.7,
})

gsap.to(".animation .b",{
    y:0,
    opacity:1,
    duration:1.5,
    delay:0.5,
    stagger:-0.7,
    onComplete:function(){
        locoInitialise();

    }

})
}

function animateHomepage(){
    var tl = gsap.timeline();
    tl.to("nav a",{
        y:0,
        opacity:1,
        stagger:.05,
        ease:Expo.easeInOut
    }).to("#home .parent .child", {
        y:0,
        // opacity:1,
        stagger:.1,
        duration:2,
        ease:Expo.easeInOut
    }).to(".visual .image img",{
        opacity:1,
        ease:Expo.easeInOut,
        onComplete: function(){
            visualGsap();
        }
        
    })
    
}

function locoInitialise(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#home'),
        smooth: true
    });
    
}

// document.addEventListener("DOMContentLoaded", function() {
//     window.addEventListener('load', function() {
//         locoInitialise();
//     });
// });
     
function hovershow(){
    document.querySelectorAll(".container")
    .forEach(function(container){
        container.addEventListener("mousemove",function(dets){
            console.log(document.querySelector("#cursor").children);
            document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
            document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
            // console.log(document.querySelector("#cursor").children)
        })
    })
}

revealToSpan();
Visualanimation();
valuesetters();
loader();
hovershow();

