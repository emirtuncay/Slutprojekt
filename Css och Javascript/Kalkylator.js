let display = document.getElementById("display");

function appendToDisplay(value) {
  // lägger till siffrorna användaren klickade på i display
  display.value += value;
}

function clearDisplay() {
  // rensar displayen när användaren trycker på C knappen
  display.value = "";
}

function calculateResult() {
  // beräknar resultatet när = trycks
  try {
    display.value = eval(display.value); // eval gör själva matten, behandlar inputten som en matte uttryck sen löser.
  } catch (e) {
    display.value = "Fel"; // om det är fel i matten så visas "Fel" i displayen. Tex "5++5" eller "5/0"
  }
}

// try & catch undvikar att sidan kraschar om användaren skriver in ogilitiga matematisk uttryck. Det visar "Fel" istället för att krascha.
