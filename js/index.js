// Your code goes here

// Toggle nav & footer backgroundColor with dblclick event

const navContainer = document.querySelector(".nav-container");
const footer = document.querySelector("footer");
// #17A2B8

navContainer.addEventListener("dblclick", (e) =>{
    navContainer.style.backgroundColor = "#17A2B8";
})
footer.addEventListener("dblclick", function(){
    footer.style.backgroundColor = "#17A2B8";
})

// Toggle body backgroundColor with click event

const bodyElement = document.querySelector("body");

bodyElement.addEventListener('click', (e) => {
    if(bodyElement.style.backgroundColor === "white"){
        bodyElement.style.backgroundColor = "pink";
    }else {
        bodyElement.style.backgroundColor = "white";
    }
})






