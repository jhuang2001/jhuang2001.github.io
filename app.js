const card = document.querySelector('.titleCard');
const container = document.querySelector('.container');
const profile = document.querySelector('.profilePic');
const myName = document.querySelector('.name');
const description = document.querySelector('.summary');

//constants
const cardRect = card.getBoundingClientRect();

var cardRotate = function (e) {
    var x, y;

    if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
        var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
        var touch = evt.touches[0] || evt.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
    } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
        x = e.clientX;
        y = e.clientY;
    }

    card.style.transition = "none";
    let defaultTurn = 0.04 * (window.innerWidth / 2 - cardRect.width / 2 - cardRect.left);
    let yTurn = (x - window.scrollX - cardRect.width / 2) / (window.innerWidth / 25) + defaultTurn;
    let xTurn = (y - window.scrollY - cardRect.height / 2) / (window.innerHeight / 30);
    card.style.transform = `rotateY(${yTurn}deg) rotateX(${-xTurn}deg)`
    console.log(x);
};

var cardResetRotation = function (e){
    console.log("reset");
    card.style.transition = "all 0.75s ease "
    //myName.style.transform = "translateZ(50px)"
    let defaultTurn = 0.04 * (window.innerWidth / 2 - cardRect.width / 2 - cardRect.left);
    card.style.transform = `rotateY(${defaultTurn}deg) rotateX(0deg)`;
};

container.addEventListener("mousemove", cardRotate, false);
container.addEventListener("touchmove", cardRotate, false);

card.addEventListener("mouseenter", (e) => {
    //console.log("TEST");
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

window.addEventListener("mouseout", cardResetRotation, false);
window.addEventListener("touchend", cardResetRotation, false);
window.addEventListener("touchcancel", cardResetRotation, false);


document.addEventListener('DOMContentLoaded', function () {
    profile.style.transform = "translateZ(5px) rotateZ(0deg)"
    myName.style.transform = "translateZ(50px)"
}, false);
