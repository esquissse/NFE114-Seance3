document.addEventListener("DOMContentLoaded", function() {
  create_table_simple(4,7);
  create_table_image(4,7);  
}, false);

function create_table_simple(nb_ligne, nb_colonne) {
  var nb_ligne = nb_ligne;
  var nb_colonne = nb_colonne;
  var tableau = "<table border='1' width='100%'>";
  for (var i=0; i < nb_ligne; i++) {
    tableau += "<tr>";
    for (var j=0; j < nb_colonne; j++) {
      tableau += "<td>(" + i + "," + j + ")</td>";
    }
    tableau += "</tr>";
  }
  tableau += "</table>";

  document.getElementById('tableau_numerique').innerHTML = tableau;
}

function create_table_image(nb_ligne, nb_colonne) {
  var nb_ligne = nb_ligne;
  var nb_colonne = nb_colonne;
  var tableau = "<table border='1' width='100%'>";
  for (var i=0; i < nb_ligne; i++) {
    tableau += "<tr>";
    for (var j=0; j < nb_colonne; j++) {
      tableau += "<td>(" + insert_image(i) + "," + insert_image(j) + ")</td>";
    }
    tableau += "</tr>";
  }
  tableau += "</table>";

  document.getElementById('tableau_image').innerHTML = tableau;
}

function insert_image(chiffre) {
  return "<img src='images/chiffres/abc_" + chiffre + "redbigw.gif'></img>";
}