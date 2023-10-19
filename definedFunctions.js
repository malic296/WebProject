//Funkce na posun hlavičky
function posun(element) {
    if (element.getAttribute("value") === "dole") {
      element.setAttribute("value", "nahore");
      document.getElementById("header").classList.remove("headerNahoru");
      document.getElementById("content").classList.remove("contentNahoru");
      
    } else {
      element.setAttribute("value", "dole");
      document.getElementById("header").classList.toggle("headerNahoru");
      document.getElementById("content").classList.toggle("contentNahoru");
    }
  }
  

// Funkce pro zjištění, zda je element v viewportu
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = (window.innerHeight || document.documentElement.clientHeight);
  const elementHeight = rect.bottom - rect.top;

  const visibilityThreshold = 0.2; // 20% výšky

  return (
      rect.top <= (viewportHeight - elementHeight * (1 - visibilityThreshold)) &&
      rect.bottom >= elementHeight * (1 - visibilityThreshold)
  );
}


function checkVisibility(){
    // Výběr kontrolovaných elementů
    const elementsToCheck = document.querySelectorAll('.sectionForScrollingEffect');

    // Projde všechny vybrané elementy a zkontrolujte, zda jsou v viewportu aspoň ze 30%
    elementsToCheck.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('opacityToOne'); 
        element.classList.remove('opacityToZero');
      }
    });
}

//Spouští funkce hned co se načte stránka a nebo když uživatel scrolluje
window.addEventListener('DOMContentLoaded', checkVisibility);
window.addEventListener('scroll', checkVisibility);



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



//Funkce pro kotvení hlavní stránky

document.addEventListener("DOMContentLoaded", function() {
  var odkazy = document.querySelectorAll("a.sekceLink[href^='#']");

  odkazy.forEach(function(odkaz){
    odkaz.addEventListener("click", function(e) {
      e.preventDefault();

      var cil = this.getAttribute("href");
      var cilovaSekce = document.querySelector(cil);

      if(cilovaSekce) {
        cilovaSekce.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});



//Vyhodnocení validity formuláře

document.addEventListener("DOMContentLoaded", function(){
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function(){
    if(form.checkValidity()){
      alert("Vaše odpověď byla zpracována, děkujeme.")
    }
  });

});


//funkce pro galerii

function doleva(){
    const elementWithFirstClass = document.querySelector(".gallery");
    const secondClass = elementWithFirstClass.classList[1];
    const lastCharacter = parseInt(secondClass.charAt(secondClass.length - 1));

    const left = document.querySelector(".leftGalleryArrow");

    if(lastCharacter == "1"){
      
      return;
    }

    elementWithFirstClass.classList.remove(secondClass);
    elementWithFirstClass.classList.add("photoPosition" + (lastCharacter - 1));
    
}

function doprava(){
    const elementWithFirstClass = document.querySelector(".gallery");
    const secondClass = elementWithFirstClass.classList[1];
    const lastCharacter = parseInt(secondClass.charAt(secondClass.length - 1));

    const right = document.querySelector(".rightGalleryArrow");

    if(lastCharacter == "4"){

      return;
    }


      elementWithFirstClass.classList.remove(secondClass);
      elementWithFirstClass.classList.add("photoPosition" + (lastCharacter + 1));
    
}