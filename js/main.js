var blue = document.getElementById("blue");

blue.addEventListener( "click", function() {
        var addPara = document.createElement("p");
        addPara.innerHTML = "Congrats! You see the dress how it actually is in real life.";

        blue.appendChild( addPara );
});