let aInput = document.getElementById("a");
let bInput = document.getElementById("b");
let resultat = document.getElementById("resultat");

function räknaDerivata() {
  // hämta värdena användaren skrev in
  let a = Number(aInput.value);
  let b = Number(bInput.value);
  // c behöver inte hämtas eftersom derivatan av en konstant blir 0

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

  resultat.innerText = svar;
}
