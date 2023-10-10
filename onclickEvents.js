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
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkVisibility(){
    // Výběr kontrolovaných elementů
    const elementsToCheck = document.querySelectorAll('.sectionForScrollingEffect');

    // Projde všechny vybrané elementy a zkontrolujte, zda jsou v viewportu
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