document.getElementById('lanceur_syracuse').addEventListener('click', lancer_la_suite, false);

function lancer_la_suite() {
  var chiffre = document.getElementById('chiffre').value;
  compteur = 0; // Je force le compteur en variable globale pour le réinit à chaque clic.
  message = ""; // Je force la réinit du message à chaque clic.

  if ( chiffre != "" ) {
    la_recursive(chiffre);
  } else {
    alert ("vous devez entrer un chiffre avant de cliquer !");
  }
}

function la_recursive(valeur) {
  if ( valeur != 1) {
    if ( valeur % 2 == 0 ) {
      message += "On obtient le terme " + valeur/2 + "<br>";
      compteur++;
      la_recursive(valeur/2);
    } else {
      message += "On obtient le terme " + (valeur*3+1) + "<br>";
      compteur++;
      la_recursive(3*valeur+1);
    }
  } else {
    message += "On doit appliquer " + compteur + " fois la transformation avant d'arriver à 1.<br>";
    document.getElementById('le_resultat').innerHTML = message;
  }
}