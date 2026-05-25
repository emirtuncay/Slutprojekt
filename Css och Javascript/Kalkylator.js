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

  // XSS-skydd: eval är farligt eftersom det kör vad som helst som JS-kod.
  // Därför kollar vi först att displayen BARA innehåller siffror, punkt och
  // de matte-tecken vi tillåter. Allt annat (bokstäver, <script> osv) stoppas.
  let tillaten = /^[0-9+\-*/.\s]+$/;

  if (!tillaten.test(display.value)) {
    display.value = "Fel";
    return;
  }

  try {
    display.value = eval(display.value); // nu är inputen säker att räkna ut
  } catch (e) {
    display.value = "Fel"; // tex "5++5" eller "5/0"
  }
}

// try & catch undvikar att sidan kraschar om användaren skriver in ogilitiga matematisk uttryck. Det visar "Fel" istället för att krascha.
