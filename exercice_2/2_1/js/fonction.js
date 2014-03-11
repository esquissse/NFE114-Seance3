document.getElementById('franc_euro').addEventListener('click',convertir_franc_en_euro,false);
document.getElementById('euro_franc').addEventListener('click',convertir_euro_en_franc,false);

function convertir_franc_en_euro() {
  // je récupère la valeur en franc
  var franc = document.getElementById('franc').value;
  var euro = franc/6.55957;
  // je met la valeur de l'euro dans son input
  document.getElementById('euro').value=euro;
}

function convertir_euro_en_franc() {
  // je récupère la valeur en euro
  var euro = document.getElementById('euro').value;
  var franc = euro*6.55957;
  // je met la valeur de l'euro dans son input
  document.getElementById('franc').value=franc;
}