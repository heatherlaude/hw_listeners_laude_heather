var blue = document.getElementById("blue");
var white = document.getElementById("white");
var stupid = document.getElementById("stupid");
var mindBlown = document.getElementById("mindblown");

/*
This Listener listens for someone to click the "blue and black" <p> and when they do, it appends a child to that <p> with the string below 
*/

blue.addEventListener( "click", function() {
        var addPara = document.createElement("p");
        addPara.innerHTML = "Congrats! You see the dress how it actually is in real life.";

        blue.appendChild( addPara );
});



/*
This Listener listens for someone to click the "white and gold" <p> and when they do, it appends a child to that <p> with the string below 
*/

white.addEventListener( "click", function() {
        var addPara = document.createElement("p");
        addPara.innerHTML = "Rut row.  The real life dress isn't white and gold.  WHAAAAT?!";

        white.appendChild( addPara );
});


/*
This Listener listens for someone to mouse over the "i think it's stupid" <p> and when they do, it looks up the div containing a meme with a display of none and changes the display to block. Then, on mouseout, it hides the div again.
*/

stupid.addEventListener( "mouseenter", function() {
        document.getElementById("stupid_hidden").style.display = "block";

});

stupid.addEventListener( "mouseout", function() {
        document.getElementById("stupid_hidden").style.display = "none";

});


/*
This Listener listens for someone to mouse over the "my mind is blown" <p> and when they do, it looks up the div containing a meme with a display of none and changes the display to block. Then, on mouseout, it hides the div again.
*/

mindBlown.addEventListener( "mouseenter", function() {
        document.getElementById("mindblown_hidden").style.display = "block";

});

mindBlown.addEventListener( "mouseout", function() {
        document.getElementById("mindblown_hidden").style.display = "none";

});