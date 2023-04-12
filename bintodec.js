const input = document.getElementById("binario");
const result = document.getElementById("decimal");


function convertir(){
    var decimal = 0;
    var list = input.value.toString().split("").reverse();
    for (let i = 0; i < list.length; i++) {
        if (list[i] === "1") {
            var num =  2**i;
            decimal += num;
        }        
    }
    result.innerHTML = decimal;
}
