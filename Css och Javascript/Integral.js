let aInput = document.getElementById("a");
let bInput = document.getElementById("b");
let cInput = document.getElementById("c");
let resultat = document.getElementById("resultat");

function räknaIntegral() {
  // hämta värdena användaren skrev in
  let a = Number(aInput.value);
  let b = Number(bInput.value);
  let c = Number(cInput.value);

  // regel: integralen av ax² + bx + c blir (a/3)x³ + (b/2)x² + cx + C
  let nyA = a / 3;
  let nyB = b / 2;
  let nyC = c;

  // avrunda till 3 decimaler så det inte blir 0.6666666...
  nyA = Math.round(nyA * 1000) / 1000;
  nyB = Math.round(nyB * 1000) / 1000;

  // bygger ihop svaret som en sträng
  let svar = "F(x) = ";
  let tomt = true; // håller koll på om vi skrivit nått än

  if (nyA !== 0) {
    svar += nyA + "x³";
    tomt = false;
  }

  if (nyB !== 0) {
    if (!tomt && nyB > 0) svar += " + " + nyB + "x²";
    else if (!tomt && nyB < 0) svar += " - " + Math.abs(nyB) + "x²";
    else svar += nyB + "x²";
    tomt = false;
  }

  if (nyC !== 0) {
    if (!tomt && nyC > 0) svar += " + " + nyC + "x";
    else if (!tomt && nyC < 0) svar += " - " + Math.abs(nyC) + "x";
    else svar += nyC + "x";
    tomt = false;
  }

  // glöm inte konstanten C, den finns alltid med vid en obestämd integral
  if (tomt) svar += "C";
  else svar += " + C";

  resultat.innerText = svar;
}
