var num_1 = parseInt(prompt("Digite um numero"))
var num_2 = parseInt(prompt("Digite um numero"))
var num_3 = parseInt(prompt("Digite um numero"))


// if (num_1 >0 && num_2 >0 && num_3 >0){    
//     if (num_1 >100 || num_2 >100 || num_3 >100){
//         alert("todos positivos e pelo menos um deles é maior que 100" )
//     }
//     else{
//         alert("Todos são positivos porém nenhum deles é maior que 100")
//     }
//     }else{
//         alert("Um desses são negativos")
// }

if (num_1 >0 && num_2 >0 && num_3 >0 && num_1 >100 || num_2 >100 || num_3 >100){    
        alert("todos positivos e pelo menos um deles é maior que 100" )
    } else if(num_1 <=0 || num_2 <=0 || num_3 <=0){
        alert("Um desses são negativos ou 0")
    }
    else{
        alert("Todos são positivos porém nenhum deles é maior que 100")
    }
