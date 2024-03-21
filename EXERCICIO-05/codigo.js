var num_1 = parseInt(prompt("Digite um numero"))
var num_2 = parseInt(prompt("digite mais um numero"))

var soma = num_1 + num_2

if (!(num_1 == num_2 || num_2 == num_1 && soma <20 && soma >100)){
    alert("Numeros diferentes, e " + "menor que 20 ou maior que 100")
}

else{
    alert("valores iguais")
}