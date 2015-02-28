var heading = document.getElementsByTagName("h1");
var countClicks = 1;

heading[0].addEventListener( "click", function() {
        var addPara = document.createElement("p");
        addPara.innerHTML = "This is click number " + countClicks++;

        var container = document.getElementsByTagName("body")[0];
        container.appendChild( addPara );
});