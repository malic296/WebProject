//Funkce pro problikávání nadpisu stránky pro hezčí efekt
function typingEffect(){
    const element = document.querySelector(".JSHeaderUnderlineCaller");
    const curColor = (element).getAttribute("value");
      if(curColor === "white"){
        element.classList.add("blackHeaderUnderlineJS");
        element.classList.remove("whiteHeaderUnderlineJS");
        element.setAttribute("value", "black");
      }
      else{
        element.classList.add("whiteHeaderUnderlineJS");
        element.classList.remove("blackHeaderUnderlineJS");
        element.setAttribute("value", "white");
      }
  }
  
  setInterval(typingEffect, 600);

document.addEventListener('DOMContentLoaded', function () {
    const mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true, // Enable infinite loop
    });
});






