//Start Validator of DNI
function validateDNI() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    let dni = $("#clientDni").val()//coge el dni del input
    let numero = dni.substring(0, 8)//coge los numeros del dni
    let letra = dni.slice(-1)//coge la letra del dni
    let operacion = numero % 23//operacion para calcular el dni
    //toUpperCase coge las letras en minusculas tambien
    if (letras[operacion] === letra.toUpperCase()) {
        $("#clientDni").css("border-color", "green")
    } else {
        $("#clientDni").css("border-color", "red")
    }

}
//End Validator of DNI

//Start Validator of Name
function validateName() {
    let nombre = $("#clientName").val()
    let pattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]/;
    //tengo que escribir una expresion regular para validar el email
    if (pattern.test(nombre)) {
        $("#clientName").css("border-color", "green")
    } else {
        $("#clientName").css("border-color", "red")
    }
}
//End Validator of Name

//Start Validator of Amount
function validateAmount() {
    let amount = $("#amount").val()
    let pattern = /^\d+(\.\d{1,2})?$/;
    //tengo que escribir una expresion regular para validar el email
    if (pattern.test(amount)) {
        $("#amount").css("border-color", "green")
    } else {
        $("#amount").css("border-color", "red")
    }
}
//End Validator of Amount