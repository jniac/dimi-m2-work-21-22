//Commencer le jeu
function start(){

  var disp = document.getElementById("output");
  document.getElementById("begin").style.visibility = "hidden";
  document.getElementById("guess").readOnly = false;
  document.getElementById("guess").style.color = "black";

  document.getElementById("guess").style.display = "inline-block";
  
  disp.innerHTML = "Devine son âge !";

  
  document.getElementById("hiLo").innerHTML = "";
  document.getElementById("guess").value = "";
}


//Vérification de la réponse
function guessTheAge(){
  
  
  var guess = document.getElementById("guess").value;
  var message = document.getElementById("hiLo");
  
  if (guess > 32){
    message.innerHTML = "Cette célébrité est plus jeune !";
  }
  else if (guess < 32){
    message.innerHTML = "Cette célébrité est plus agée !";
  }
  else {
    document.getElementById("guess").style.color = "#9c88ff";
    document.getElementById("guess").readOnly = true;
    message.innerHTML = "C'est la bonne réponse ! Bravo";
    var again = document.getElementById("begin");
    again.style.visibility = "visible";
    again.innerHTML = "Play again?";
    
  }
  
}

