function insert(num) {
    var other_num = document.querySelector(".guardando_dados").innerHTML;
    document.querySelector(".guardando_dados").innerHTML = other_num + num
}

function resert_value() {
    document.querySelector(".guardando_dados").innerHTML = ""
}

function back() {
    const caracter = document.querySelector(".guardando_dados").innerHTML;
    document.querySelector(".guardando_dados").innerHTML = caracter.substring(0, caracter.length -1)
}

function calculate () {
    const operacoes = document.querySelector(".guardando_dados").innerHTML;
    if (operacoes) {
        document.querySelector(".guardando_dados").innerHTML = eval(operacoes)
    }
    
}