const phrase ="je suis wechteti mariem "
 var longphraseu=longphrase(phrase)
 console.log(longphraseu);
 var nombreMots=nbMots(phrase)
 console.log(nombreMots);
 var nombreVoyelles=nbVoyelles(phrase)
 console.log(nombreVoyelles);
function longphrase(phrase){
   var compt=phrase.length
    
    return compt
}
function nbMots(phrase){
   var Nb=0
    for(var i=0;i<phrase.length;i++){
        if(phrase[i]==" " &&  phrase != ""){
        Nb++
    }
    }
    return Nb
}
function nbVoyelles(phrase){
    var vowelsCount = 0;

    //turn the input into a string
    var string = phrase.toString();
  
    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {
  
    //if a vowel, add to vowel count
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelsCount += 1;
      }
    }
    return vowelsCount;
  }
