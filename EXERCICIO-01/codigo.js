var num_1 = parseFloat(prompt("Digite um número"));

var num_2 = parseFloat(prompt("Digite mais um numero"));

if (num_1 >10 && num_2 >10){
    alert(num_1 + " e " + num_2 + " São maior que 10");
}

else if (num_1 >10 && num_2 <10){
    alert(num_2 + " é menor que 10 ")
}

else if (num_1 <10 && num_2 >10){
    alert(num_1 + " é menor que 10 ")
}

else if (num_1 <=10 && num_2 <=10) {
    alert(num_1 + " e " + num_2 + " São menor ou igual a 10")
}