var eta, kilometri;
 kilometri= prompt('inserire il numero di kilometri');

 costo= kilometri*0.21
 console.log(costo);
 document.getElementById('costo').innerHTML = costo.toFixed(2) +'€'


eta= prompt('inserire etá');

if (eta > 65) {
  sconto= costo*0.4
  console.log(sconto);
}
else if (eta < 18) {
  sconto= costo*0.2
  console.log(sconto);
}

document.getElementById('sconto').innerHTML =costo.toFixed(2) - sconto.toFixed(2) +'€'
