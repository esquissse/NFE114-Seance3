document.getElementById('changer').addEventListener('click', changer_devise, false);
document.getElementById('convertisseur').addEventListener('click', convertir, false);

function changer_devise() {
  var into_span = document.getElementById('sens_du_change');
  
  // Comme je modifie le DOM en cours de route, il faut repositionner le listener :
  if ( document.getElementById('convertisseur').value == "E -> F" ) {
    into_span.innerHTML = "<input type='button' id='convertisseur' value='F -> E'/>";
    document.getElementById('convertisseur').addEventListener('click', convertir, false);
  } else {
    into_span.innerHTML = "<input type='button' id='convertisseur' value='E -> F'/>";
    document.getElementById('convertisseur').addEventListener('click', convertir, false);
  }
}

function convertir() {
  var valeur_a_convertir = document.getElementById('valeur_de_change').value;
  if ( document.getElementById('convertisseur').value == "E -> F" ) {
    document.getElementById('resultat').innerHTML = arrondir(valeur_a_convertir * 6.55957) + ' F';
  } else {
    document.getElementById('resultat').innerHTML = arrondir(valeur_a_convertir / 6.55957) + ' €';
  }
}

function arrondir(chiffre) {
  if (chiffre.toFixed) {
    return chiffre.toFixed(2);
  } else {
    return Math.round(chiffre*100)/100;
  }
}