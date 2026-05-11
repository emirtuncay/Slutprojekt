// räknar ut nollställen för en andragradsekvation med pq-formeln
// formeln: x = -p/2 +- rotenur (p/2)^2 - q

function raknaNollstallen() {
  // hämtar värdena från inputfälten
  let p = parseFloat(document.getElementById("p").value);
  let q = parseFloat(document.getElementById("q").value);
  let svar = document.getElementById("svar");

  // kollar om användaren glömt skriva nått
  if (isNaN(p) || isNaN(q)) {
    svar.textContent = "Skriv in både p och q.";
    return;
  }

  // räknar ut det som är inuti rotteknet
  let underRoten = (p / 2) * (p / 2) - q;

  if (underRoten < 0) {
    // om talet under roten är negativt finns inga reella nollställen
    svar.textContent = "Ekvationen har inga reella nollställen.";
  } else if (underRoten === 0) {
    // ett dubbelt nollställe (roten ur 0 = 0)
    let x = -p / 2;
    svar.textContent = "x = " + x + " (dubbelrot)";
  } else {
    // två nollställen
    let rot = Math.sqrt(underRoten);
    let x1 = -p / 2 + rot;
    let x2 = -p / 2 - rot;
    svar.textContent = "x₁ = " + x1 + "   x₂ = " + x2;
  }
}
