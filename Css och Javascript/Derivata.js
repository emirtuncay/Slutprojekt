let aInput = document.getElementById("a");
let bInput = document.getElementById("b");
let resultat = document.getElementById("resultat");

function räknaDerivata() {
  // hämta värdena användaren skrev in
  let a = Number(aInput.value);
  let b = Number(bInput.value);
  // c behöver inte hämtas eftersom derivatan av en konstant blir 0

  // XSS-skydd: Number() gör om inputen till en siffra. Om någon skulle skriva
  // in t.ex. "<script>" så blir det NaN och vi visar fel istället.
  if (isNaN(a) || isNaN(b)) {
    resultat.innerText = "Skriv in giltiga siffror.";
    return;
  }

  // regel: f(x) = ax² + bx + c   blir   f'(x) = 2ax + b
  let nyA = 2 * a;
  let nyB = b;

  // bygger ihop svaret som en sträng
  let svar = "f'(x) = ";

  if (nyA !== 0) {
    svar += nyA + "x";
    if (nyB > 0) svar += " + " + nyB;
    if (nyB < 0) svar += " - " + Math.abs(nyB);
  } else if (nyB !== 0) {
    svar += nyB;
  } else {
    svar += "0";
  }

  // innerText (inte innerHTML) gör att eventuella HTML-taggar visas som text,
  // alltså körs inte som kod. Det skyddar mot XSS.
  resultat.innerText = svar;
}
