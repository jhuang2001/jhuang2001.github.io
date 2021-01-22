const card = document.querySelector('.titleCard');
const container = document.querySelector('.container');
const profile = document.querySelector('.profilePic');
const myName = document.querySelector('.name');
const description = document.querySelector('.summary');

//constants
const cardRect = card.getBoundingClientRect();

container.addEventListener("mousemove", (e) => {
    card.style.transition = "none";

    let defaultTurn = 0.04 * (window.innerWidth/2 - cardRect.width/2 - cardRect.left);
    let yTurn = (e.pageX-window.scrollX - cardRect.width/2) / (window.innerWidth/25) + defaultTurn;
    let xTurn = (e.pageY-window.scrollY - cardRect.height/2) / (window.innerHeight/30);
    card.style.transform = `rotateY(${yTurn}deg) rotateX(${-xTurn}deg)`
    console.log(e.pageY);
});

card.addEventListener("mouseenter", (e) => {
    console.log("TEST");
    card.style.transition = "none";
    profile.style.transform = "translateZ(250px) rotateZ(12deg)"
    myName.style.transform = "translateZ(300px)"
    description.style.transform = "translateZ(150px)"
});

card.addEventListener("mouseleave", (e) => {
    profile.style.transform = "translateZ(5px) rotateZ(0deg)"
    myName.style.transform = "translateZ(50px)"
    description.style.transform = "translateZ(0px)"
});

window.addEventListener("mouseout", (e) => {
    card.style.transition = "all 0.75s ease "
    //myName.style.transform = "translateZ(50px)"
    let defaultTurn = 0.04 * (window.innerWidth/2 - cardRect.width/2 - cardRect.left);
    card.style.transform = `rotateY(${defaultTurn}deg) rotateX(0deg)`
});

document.addEventListener('DOMContentLoaded', function() {
    profile.style.transform = "translateZ(5px) rotateZ(0deg)"
    myName.style.transform = "translateZ(50px)"
}, false);