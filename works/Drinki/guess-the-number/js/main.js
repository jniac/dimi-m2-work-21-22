const mysteryNumber = Math.round(1 + Math.random() * 98);
//const mysteryNumber = 80;
//console.log(mysteryNumber);

let numberTry = 0;

let minRange = document.querySelector('#minRange');
let minRangeNumber = parseFloat(minRange.value);
let minRangeText = document.querySelector('#min-range');
minRangeText.innerHTML = minRangeNumber;

let maxRange = document.querySelector('#maxRange');
let maxRangeNumber = parseFloat(maxRange.value);
let maxRangeText = document.querySelector('#max-range');
maxRangeText.innerHTML = maxRangeNumber;


minRange.oninput = event => {
  minRange = document.querySelector('#minRange');
  minRangeNumber = parseFloat(minRange.value);
  minRangeText.innerHTML = minRangeNumber;
}

maxRange.oninput = event => {
  maxRange = document.querySelector('#maxRange');
  maxRangeNumber = parseFloat(maxRange.value);
  maxRangeText.innerHTML = maxRangeNumber;
}

const response = document.querySelector('.chat');

const cloneResponse = (hourValue, numberTry, resValue) => {
  let oneRes = document.createElement("div");
  let lineUp = document.createElement("div");
  let lineDown = document.createElement("div");

  oneRes.setAttribute("class", "one-res");
  lineUp.setAttribute("class", "line-up");
  lineDown.setAttribute("class", "line-down");

  let numHour = document.createElement("p");
  numHour.setAttribute("class", "numbertry-hour");
  numHour.innerHTML = "Essai n°" + numberTry + " | " + hourValue;
  lineUp.append(numHour);

  let icon = document.createElement("img");
  icon.setAttribute("class", "icon-try");
  icon.setAttribute("src", "images/icon-try.png");
  lineDown.append(icon);
  
  let res = document.createElement("p");
  res.setAttribute("class", "res");
  res.innerHTML = resValue;
  lineDown.append(res);

  oneRes.append(lineUp);
  oneRes.append(lineDown);
  response.prepend(oneRes);
}

const submit = () => {
  numberTry += 1;

  let now = new Date();
  let hour = now.getHours() + ":" + now.getMinutes();

  //Valeur minimum sélectionnée
  const minRange = document.querySelector('#minRange');
  const minRangeNumber = parseFloat(minRange.value);

  //Valeur maximum sélectionnée
  const maxRange = document.querySelector('#maxRange');
  const maxRangeNumber = parseFloat(maxRange.value);

  //Valeur medianne
  const midRangeNumber = 100-(minRangeNumber+(100-maxRangeNumber));

  //Bar de progression
  const minProgressBar = document.querySelector('#minProgressBar');
  const midProgressBar = document.querySelector('#midProgressBar');
  const maxProgressBar = document.querySelector('#maxProgressBar');
  
  document.body.classList.remove('wrong-state');

  if(mysteryNumber > minRangeNumber && mysteryNumber < maxRangeNumber){
    updateProgressBar(minRangeNumber, midRangeNumber, 100-maxRangeNumber);
    cloneResponse(hour, numberTry, "Le nombre Mystère est dans l'intervale <i>" + minRangeNumber + "</i> et <i>" + maxRangeNumber + "</i>");
  } else if(mysteryNumber < minRangeNumber && mysteryNumber < maxRangeNumber){
    updateProgressBar(0, minRangeNumber,100-minRangeNumber);
    cloneResponse(hour, numberTry, "Le nombre Mystère est dans l'intervale <i>0</i> et <i>" + minRangeNumber + "</i>");
  } else if(mysteryNumber > minRangeNumber && mysteryNumber > maxRangeNumber){
    updateProgressBar(maxRangeNumber, 100-maxRangeNumber, 0);
    cloneResponse(hour, numberTry, "Le nombre Mystère est dans l'intervale <i>" + maxRangeNumber + "</i> et <i>100</i>");
  } else if(mysteryNumber === minRangeNumber || mysteryNumber === maxRangeNumber){
    updateProgressBar(mysteryNumber-1, 1, 100-mysteryNumber);
    cloneResponse(hour, numberTry, "BRAVO !!!! Tu as trouvé le nombre Mystère : <i>" + mysteryNumber + "</i>");
    winScreen();
  }

  minRangeNumber.value = '';
  maxRangeNumber.value = '';
}

const updateProgressBar = (valueMinProgressBar, valueMidProgressBar, valueMaxProgressBar) => {
  const minProgressBar = document.querySelector('#minProgressBar');
  const midProgressBar = document.querySelector('#midProgressBar');
  const maxProgressBar = document.querySelector('#maxProgressBar');

  minProgressBar.style = "width: " + valueMinProgressBar + "%";
  midProgressBar.style = "width: " + valueMidProgressBar + "%";
  maxProgressBar.style = "width: " + valueMaxProgressBar + "%";

  minProgressBar.innerHTML = valueMinProgressBar + "%";
  midProgressBar.innerHTML = valueMidProgressBar + "%";
  maxProgressBar.innerHTML = valueMaxProgressBar + "%";
}

const winScreen = () => {
  const screen = document.querySelector(".win-screen");
  screen.style.display = "flex";

  const displayMysteryNumber = document.querySelector(".win-screen h3");
  displayMysteryNumber.innerHTML = mysteryNumber;
  console.log("HELLO");
}

document.querySelector('button#submit').onclick = () => {
  submit();
}

document.body.onkeydown = (event) => {
  if (event.key === 'Enter') {
    submit();
  }
}




