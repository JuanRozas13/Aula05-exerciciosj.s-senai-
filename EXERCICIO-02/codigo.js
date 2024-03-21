var num = parseFloat(prompt("Digite um numero"));

porcentagem_5 = num % 5;

porcentagem_3 = num % 3;

if (porcentagem_5 == 0 || porcentagem_3 == 0 ){
    alert(num + " é divisivel por 3 ou 5");
}

else{
    alert( num + " não é divisivel por 3 ou 5")
}