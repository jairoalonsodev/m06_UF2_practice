//Start Validator of DNI
function validateDNI() {
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    let dni = $(".clientDni")//coge el dni del input

    dni.each((key, value) => {
        let dniValue = $(value)
        let numero = dniValue.val().substring(0, 8)//coge los numeros del dni
        let letra = dniValue.val().slice(-1)//coge la letra del dni
        let operacion = numero % 23//operacion para calcular el dni
        
        //toUpperCase coge las letras en minusculas tambien
        if (letras[operacion] === letra.toUpperCase()) {
            dniValue.css("border-color", "green")
        } else {
            dniValue.css("border-color", "red")
        }
    })
    
    

}
//End Validator of DNI

//Start Validator of Name
function validateName() {
    let nombre = $(".clientName")
    let pattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]/;
    //Expresion regular para validar el nombre

    nombre.each((key, value) => {
        let nameValue = $(value)
        if (pattern.test(nameValue.val())) {
            nameValue.css("border-color", "green")
        } else {
            nameValue.css("border-color", "red")
        }
    })
    
}
//End Validator of Name

//Start Validator of Amount
function validateAmount() {
    let amount = $(".amount")
    let pattern = /^\d+(\.\d{1,2})\s€?$/;
    //Expresion regular para validar la cantidad

    amount.each((key, value) => {
        let amountValue = $(value)
        if (pattern.test(amountValue.val())) {
            amountValue.css("border-color", "green")
        } else {
            amountValue.css("border-color", "red")
        }
    })
    
}
//End Validator of Amount