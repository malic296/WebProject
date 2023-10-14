document.addEventListener("DOMContentLoaded", function() {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/smoothscroll-polyfill@0.4.3/dist/smoothscroll.min.js';

    // Append the script element to the document
    document.body.appendChild(script);

    script.onload = function() {
        // Initialize the smoothscroll library here
        smoothscroll.polyfill();
        document.addEventListener("DOMContentLoaded", function() {
            var odkazy = document.querySelectorAll("a.sekceLink[href^='#']");
        
            odkazy.forEach(function(odkaz){
            odkaz.addEventListener("click", function(e) {
                e.preventDefault();
        
                var cil = this.getAttribute("href");
                var cilovaSekce = document.querySelector(cil);
        
                if(cilovaSekce) {
                window.scrollTo({
                    top: cilovaSekce.offsetTop,
                    behavior: "smooth"
                });
                }
            });
            });
        });
    };

});



