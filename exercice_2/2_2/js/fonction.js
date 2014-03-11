document.getElementById('changer').addEventListener('click', changer_devise, false);
document.getElementById('franc_euro').addEventListener('click', convertir_franc_euro, false);
document.getElementById('euro_franc').addEventListener('click', convertir_euro_franc, false);

function changer_devise() {
  document.getElementById('sens_du_change').innerHTML = "<input type='button' id='euro_franc' value='F -> E'/>";
}