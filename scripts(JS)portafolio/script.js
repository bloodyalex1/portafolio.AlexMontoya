// section to indexedDB.html
const words = ["Developer", "Designer", "Problem-Solver", "Programmer"];
const textElement = document.querySelector(".typewriter-text");
let wordIndex = 0;
let charIndex = 0; 
let isDeleting = false;
function typeWriter() {
    const currentWord = words[wordIndex];
    let speed = 150; 
    if (isDeleting) {
        speed = 70; 
        charIndex--;
        textElement.textContent = currentWord.substring(0, charIndex);
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; 
            speed = 500; 
        }
    } else {
        charIndex++;
        textElement.textContent = currentWord.substring(0, charIndex);

        if (charIndex === currentWord.length) {
            isDeleting = true;
            speed = 2000;
        }
    }
    setTimeout(typeWriter, speed);
}
document.addEventListener("DOMContentLoaded", () => {
    typeWriter();
});
// Section to TL Activities
const words1 = ["Py", "HTML", "CSS", "JS"];
const textElement1 = document.querySelector(".typewriter-text-portafolio");
let wordIndex1 = 0;
let charIndex1 = 0; 
let isDeleting1 = false;
function typeWriter1() {
    const currentWord1 = words1[wordIndex1];
    let speed1 = 150;
    if (isDeleting1){
        speed1 = 70;
        charIndex1--;
        textElement1.textContent = currentWord1.substring(0, charIndex1);
        if (charIndex1 === 0){
            isDeleting1 = false;
            wordIndex1 = (wordIndex1 + 1) % words1.length;
            speed1 = 500;
        }
    } else{
        charIndex1++;
        textElement1.textContent = currentWord1.substring(0, charIndex1);

        if (charIndex1 === currentWord1.length){
            isDeleting1 = true;
            speed1 = 2000;
        }
    }
    setTimeout(typeWriter1, speed1);
}
document.addEventListener("DOMContentLoaded", () => {
    typeWriter1();
});
const word2 = ["Activities","Moodle",]
const textElement2 = document.querySelector(".typewriter-text-moodle");
let wordIndex2 = 0;
let charIndex2 = 0;
let isDeleting2 = false;

function typeWriter2(){
    const currentWord2 =word2[wordIndex2];
    let speed2 = 150;
    if(isDeleting2){
        speed2 = 70
        charIndex2--;
        textElement2.textContent = currentWord2.substring(0,charIndex2);
        if(charIndex2 === 0){
            isDeleting2 = false;
            wordIndex2 = (wordIndex2 + 1) % word2.length;
            speed2 = 2000;
        }
    } else{
        charIndex2++;
        textElement2.textContent = currentWord2.substring(0,charIndex2);
        if (charIndex2 === currentWord2.length){
            isDeleting2 = true
            speed2 = 2000;
        }
    }
    setTimeout(typeWriter2,speed2);
}
document.addEventListener("DOMContentLoaded", () => {
    typeWriter2();
});


document.getElementById('item2').onclick = myFunction
document.getElementById('item4').onclick = myFunction
function myFunction (){
    alert("We are working on this function")
}