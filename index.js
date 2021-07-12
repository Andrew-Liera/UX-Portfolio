const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["designer.", "developer.", "writer.", "creator."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newTextDelay);

    }
}
function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0 , charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);

    }
    else {
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay+250);

    }
}
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay);
});

const card = document.querySelector('.skills-card');

card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
});

const card2 = document.querySelector('.skills-card-2');

card2.addEventListener('click', function() {
    card2.classList.toggle('is-flipped');
});

const card3 = document.querySelector('.skills-card-3');

card3.addEventListener('click', function() {
    card3.classList.toggle('is-flipped');
});

const card4 = document.querySelector('.pro-card');

card4.addEventListener('click', function() {
    card4.classList.toggle('is-flipped');
});

const card5 = document.querySelector('.pro-card-2');

card5.addEventListener('click', function() {
    card5.classList.toggle('is-flipped');
});

const card6 = document.querySelector('.pro-card-3');

card6.addEventListener('click', function() {
    card6.classList.toggle('is-flipped');
});
