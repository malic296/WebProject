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