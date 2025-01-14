const about = document.querySelector('#about-me');
const page = document.querySelector('.pop-up');

const closebtn = document.querySelector('.close-btn');
const head = document.querySelector('header');



closebtn.addEventListener('click',disapper);

page.addEventListener('click', (event) => {
    if (event.target === page) {
      page.classList.add('hidden');


    }
  });

let t1 = gsap.timeline();

function appear() {
    t1.from(".pop-up", {
        x: "200%",
        duration: 0.8,
        ease: "power3.out", 
        onStart: () => {
            document.querySelector(".pop-up").classList.remove("hidden");
        }
    }).to(".pop-up", {
        x: "0",
        ease: "circ.inOut",
        
    });
}

function disapper() {
    t1.from(".pop-up", {
        x: "0",
        ease: "power3.out", 
        
    }).to(".pop-up", {
        x: "200%",
        duration: 0.8,
        ease: "circ.inOut",
        onComplete: () => {
            document.querySelector(".pop-up").classList.add("hidden");
        }
        
    });
}

// Add Event Listener to Trigger Button
document.querySelector('#about-me').addEventListener("click", appear);
document.querySelector('#about-sec').addEventListener("click", appear);

