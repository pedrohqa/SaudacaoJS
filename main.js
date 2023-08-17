let hora = new Date().getHours();
let saudaçao = "";

if( hora >= 5 && hora <= 11) {
    saudaçao = "Bom Dia!";
}
else if( hora >= 12 && hora <=17){
    saudaçao = "Boa Tarde!";
}
else{
    saudaçao = "Boa Noite!"
}
console.log(saudaçao)

document.getElementById("resultado").innerHTML = saudaçao
document.getElementById("hora").innerHTML = hora