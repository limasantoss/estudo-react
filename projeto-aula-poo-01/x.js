var capitalizados = ["açucar", "feijão", "arroz"];
var arrayModificado = [ ]
for (var i = 0; i < capitalizados.length; i++) {
  var arrayItens = capitalizados[i].charAt(0).toUpperCase()
 
  var resto = capitalizados[i].slice(1)
  
  var combinacao = arrayItens+resto
  arrayModificado[i] = combinacao
  console.log(arrayModificado[i])
}
var teste = arrayModificado.sort(function(a,b){
  
})
