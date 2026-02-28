var ingredientes = ["mel", "água", "sal", "mostarda"];

function capitalizar(lista) {
  var modificado = [];
  for (var i = 0; i < lista.length; i++) {
    var letraInicial = lista[i].charAt(0).toUpperCase();
    var restoTexto = lista[i].slice(1);
    modificado[i] = letraInicial + restoTexto;
  }
  return modificado;
}

function ordenar(lista) {
  return lista.sort(function(a, b) {
    return a.localeCompare(b);
  });
}

var resultadoCapitalizado = capitalizar(ingredientes);
var resultadoOrdenado = ordenar(resultadoCapitalizado);

console.log(resultadoCapitalizado);
console.log(resultadoOrdenado);