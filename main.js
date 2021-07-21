//TypeWriter Animation
const subject = document.querySelector("#typewriter");
let letter = 0;
let word = 0;
let direction = 'forwards';
function typewriter() {
    let words = ["Developer.", "UI/UX Designer.", "Freelancer.", ""];
    let content = words[word].slice(0, letter);
    subject.innerHTML = content;
    if (direction === "forwards") {
        if (words[word].length === letter) {
            direction = "backwards";
            setTimeout(typewriter, 700);
        } else {
            setTimeout(typewriter, 50);
        };
        letter++;
    } else if (direction === 'backwards') {
        letter--;
        if (letter === 1) {
            word++;
            direction = "forwards";
            if (word === words.length - 1) {
                word = 0;
            };
        };
        setTimeout(typewriter, 50);
    };
};
typewriter();


// //Nav_menu activeClass animation for moblie
// let links = ["link1", "link2", "link3", "link4", "link5"];
// if (innerWidth < 700) {
//     links.map(ele => {
//         document.getElementById(`${ele}`).style.color = "#111";
//     })
// };

//services svg animation
window.addEventListener('scroll', () => {
    let target = document.getElementById("services");
    if (target.getBoundingClientRect().top < window.innerHeight / 2) {
        let tl = new TimelineMax();
        let service1 = document.getElementById('service1');
        let service2 = document.getElementById('service2');
        let service3 = document.getElementById('service3');
        let service4 = document.getElementById('service4');
        service1.style.width = "40vw";
        service1.style.height = "40vh";
        service2.style.width = "40vw";
        service2.style.height = "40vh";
        service3.style.width = "40vw";
        service3.style.height = "40vh";
        service4.style.width = "40vw";
        service4.style.height = "40vh";
        let svg1 = document.getElementById('svg1');
        let svg2 = document.getElementById('svg2');
        let svg3 = document.getElementById('svg3');
        let svg4 = document.getElementById('svg4');
        tl.to(svg1, 0.5, { x: '0px', opacity: '1' }, "+=1")
            .to(svg2, 0.5, { x: '0px', opacity: '1' })
            .to(svg3, 0.5, { x: '0px', opacity: '1' })
            .to(svg4, 0.5, { x: '0px', opacity: '1' });
    }
});


//Menu button animation
let menuFlag = true;
document.getElementById("menu").addEventListener("click", () => {
    let navMenu = document.querySelector(".header_nav");
    let navLinks = document.getElementsByClassName("nav_link");
    let menuTl = new TimelineMax();
    if (menuFlag === true) {
        menuTl.to(navMenu, 0.3, { width: '40vw', opacity: '1', pointerEvents: 'all' })
            .to(navLinks, 0.3, { opacity: '1', pointerEvents: 'all' });

        menuFlag = false;
    } else {
        menuTl.to(navLinks, 0.3, { opacity: '0', pointerEvents: 'none' })
            .to(navMenu, 0.3, { width: '0vw', opacity: '0', pointerEvents: 'none' });
        menuFlag = true;
    };
});
