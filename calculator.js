//use strict';

$(".meinButton").click(function(){

    var feld1 = $(".feld1").val()
    var feld2 = $(".feld2").val()

    var zahl1 = parseInt(feld1)
    var zahl2 = parseInt(feld2)

    var rechenzeichen = $(".rechenzeichen").val()
    var results = 0

    if (rechenzeichen === "minus"){
        results = zahl1 - zahl2
    }
    else if(rechenzeichen === "plus"){
        results = zahl1 + zahl2
    }
    else if(rechenzeichen === "mal"){
        results = zahl1 * zahl2
    }
    else if(rechenzeichen === "geteilt"){
        results = zahl1 / zahl2
    }
    else if (rechenzeichen === "%"){
        results = zahl1 % zahl2
    }


    $(".results").text(results)
    $(".results").removeClass("positiv neutral negativ")
    if(results > 0){
        $(".results").addClass("positiv")
    }
    
    else if(results === 0){
        $(".results").addClass("neutral")
    }
    
    else if(results < 0){
        $(".results").addClass("negativ")
    }
});