var blue = document.getElementById("blue");
var white = document.getElementById("white");

blue.addEventListener( "click", function() {
        var addPara = document.createElement("p");
        addPara.innerHTML = "Congrats! You see the dress how it actually is in real life.";

        blue.appendChild( addPara );
});

white.addEventListener( "click", function() {
        var addPara = document.createElement("p");
        addPara.innerHTML = "Rut row.  The real life dress isn't white and gold.  WHAAAAT?!";

        white.appendChild( addPara );
});