const textToType = "Para.io"; // text here
const speed = 350; // Speed in milliseconds

let i = 0;
const typewriterText = document.getElementById("typewriter-text");

function typeWriter() {
    if (i < textToType.length) {
        typewriterText.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setInterval(function() {
            typewriterText.classList.toggle('blink-underscore');
        }, 500); // blink every 500 milliseconds
    }
}

typeWriter();