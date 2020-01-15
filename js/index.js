// Your code goes here

//Variables

const logo = document.querySelector(".logo-heading");
const navMain = document.querySelector(".main-navigation");
const footer = document.querySelector("footer");
const navLinks = document.querySelectorAll("a");


// Logo "mouseenter"/"mouseleave" event

window.addEventListener('load', e => alert('Gideon is the best!'))

window.addEventListener('resize', e => console.log('Gideon is the best!'));

window.addEventListener('copy', e => alert("Don\'t steal from me!"));



logo.addEventListener("mouseenter", (e) =>{
    if(e.target){
        logo.style.transform = "scale(2)";
        logo.style.transition = "transform 1s"
    } 
    logo.addEventListener("mouseleave", (e) => {
        logo.style.transform = "scale(1)";
    })

})

// Intro Image "load" event
const introImg = document.querySelector(".intro img");

introImg.addEventListener("load", () => {
    introImg.style.display = "none";
    setTimeout(function(){
        introImg.style.display = "block";
        introImg.style.transition = "display 2s"
    }, 4000);
    
})

// Nav "doubleclick" event

navMain.addEventListener("dblclick", function(e){
    
    if(navMain.style.backgroundColor === "white"){
        navMain.style.backgroundColor = "#17A2B8";
    } else {
        navMain.style.backgroundColor = "white";
    }
    
    e.stopPropagation();
})

// Toggle body backgroundColor with "click" event

const bodyElement = document.querySelector("body");

bodyElement.addEventListener('click', (e) => {
    if(bodyElement.style.backgroundColor === "white"){
        bodyElement.style.backgroundColor = "pink";
    }else {
        bodyElement.style.backgroundColor = "white";
    }
    e.stopPropagation();
})

// sign me up "mouseover" buttons

const button = document.querySelectorAll(".btn");

button.forEach(el => {
    el.addEventListener("mouseover", function(e){
        if(e.target){
            el.style.transform = "scale(1.2)";
            el.style.transition = "transform 500ms"
        } 
        el.addEventListener("mouseleave", (e) => {
            el.style.transform = "scale(1)";
        })
            
    })
})

// "focus" event

footer.addEventListener("click", (e) => {
    if(footer.style.backgroundColor === "white"){
        footer.style.backgroundColor = "#17A2B8";
    } else {
        footer.style.backgroundColor = "white";
    }
    e.stopPropagation();
});

// resize 
navLinks.forEach(el => {
    el.addEventListener("focus", (e) => {
        el.style.fontSize = "2rem";
        e.stopPropagation();
    })
    
})






