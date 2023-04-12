const input = document.getElementById("decimal");
const result = document.getElementById("binario");

function convertir(){
    let value = input.value;
    result.innerHTML = dectobin(value);
}


function dectobin(value){
    let binario = "";
    let resto;
    while (true) {
        resto = value % 2;
        binario += resto.toString();
        value = Math.trunc(value / 2); 
        if (value === 1 || value === 0) {
            binario += value.toString();
            break;
        }
    }
    return invertirCadena(binario);
}

function invertirCadena(cad) {
    return cad.split("").reverse().join("");
}