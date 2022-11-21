//Start DNI Validator
function validateDNI() {
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    let dni = $(".clientDni")//take the input's dni

    dni.each((key, value) => {
        let dniValue = $(value)
        let numero = dniValue.val().substring(0, 8)//take the numbers of the dni
        let letra = dniValue.val().slice(-1)//pick the letter of the dni
        let operacion = numero % 23//operation to calculate the dni

        //toUpperCase takes lowercase letters too
        if (letras[operacion] === letra.toUpperCase()) {
            dniValue.css("border-color", "green")
        } else {
            dniValue.css("border-color", "red")
        }
    })
}
//End DNI Validator

//Start Name Validator
function validateName() {
    let nombre = $(".clientName")
    let pattern = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]/;
    //Regular expression for name validation
    nombre.each((key, value) => {
        let nameValue = $(value)
        if (pattern.test(nameValue.val())) {
            nameValue.css("border-color", "green")
        } else {
            nameValue.css("border-color", "red")
        }
    })
}
//End Name validator

//Start Amount Validator
function validateAmount() {
    let amount = $(".amount")
    let pattern = /^\d+(\.\d{1,2})\s€?$/;
    //Regular expression to validate quantity
    amount.each((key, value) => {
        let amountValue = $(value)
        if (pattern.test(amountValue.val())) {
            amountValue.css("border-color", "green")
        } else {
            amountValue.css("border-color", "red")
        }
    })
}
//End Amount Validator

//Start Client Type Validator
function validateClientType() {
    let amount = $(".amount")
    amount.each((key, value) => {
        let amountValue = $(value).val().substring(0, $(value).val().length - 2)
        let clientType = $(".clientType")
        if (parseFloat(amountValue) <= 10000) {
            $(clientType[key]).val("Poor client")
        } else if (parseFloat(amountValue) >= 100001) {
            $(clientType[key]).val("Very rich client")
        } else {
            $(clientType[key]).val("Normal client")
        }
    })

}
//End Client Type Validator
