//Start of Form-Control function
$(document).ready(function () {
    // Select all inputs from datepicker class
    const datePicker = $(".datepicker")

    //Create the Option labels of Account Types selects
    createAccountTypesOptions()

    //Execute DNI validator function
    $(".clientDni").focusout(() => {
        validateDNI()
    })

    //Execute Name validator function
    $(".clientName").focusout(() => {
        validateName()
    })

    //Execute Amount validator function 
    $(".amount").focusout(() => {
        validateAmount()
        validateClientType()
    })

    $("#button").click(() => {
        sendDataToServer()
    })

    //Function start DataPicker
    $(function () {
        let i = 0
        while (i < 10) {
            datePicker.datepicker();
            i++
        }
    })

    //Execute the function that fills form values from the database
    formControl()
})

//End of Form-Control function

//Start the Accounts Creator
function createAccountTypesOptions() {
    var selectValues = {
        0: "Savings account",
        1: "Investment account",
        2: "Personal account",
        3: "Solidary account",
        4: "Individual Savings Account",
        5: "Fixed deposit account",
        6: "Tax-Free Savings Account",
    }
    $.each(selectValues, function (key, value) {
        $("select").append($('<option></option>').attr("value", key).text(value))
    })
}
//End the Accounts Creator 

//Start form control function
function formControl() {
    $.get("http://127.0.0.1:3000/api/clients", function (data) {

        let clientDni = $(".clientDni")
        let clientName = $(".clientName")
        let accountTypes = $("select")
        let amount = $(".amount")
        let clientType = $(".clientType")
        let datePicker = $(".datepicker")
        let client
        let clients = []
        let i = 0

        while (i < 10) {
            let typeAccount = new AccountType(data.response[i].accountType)
            let typeClient = new ClientType(data.response[i].clientType)

            client = new Account(data.response[i].Id, typeAccount.type, typeClient.type, data.
                response[i].Name, data.response[i].DNI, data.
                    response[i].Amount, data.response[i].entryDate)
            clients.push(client)
            const selectedOption = $(accountTypes[i])

            clientDni[i] = clientDni.val(client.DNIClient);
            clientName[i] = clientName.val(client.fullNameClient);
            selectedOption.val(client.accountType)
            amount[i] = amount.val(`${parseFloat(client.amount)} ???`);
            clientType[i] = clientType.val(client.clientType);
            datePicker[i] = datePicker.val(client.entryDate)
            i++
        }
        saveAccountObj(clients)
    });
}
//End form control function


// Function to send data to server
function sendDataToServer() {
    let clientDni = $(".clientDni")
    let clientName = $(".clientName")
    let accountTypes = $("select")
    let amount = $(".amount")
    let clientType = $(".clientType")
    let datePicker = $(".datepicker")
    let client
    for (i = 0; i < 10; i++) {
        client = {
            id: i,
            dni: $(clientDni[i]).val(),
            name: $(clientName[i]).val(),
            accountType: $(accountTypes[i]).val(),
            amount: $(amount[i]).val().substring(0, $(amount[i]).val().length - 2),
            clientType: $(clientType[i]).val(),
            entryDate: $(datePicker[i]).val()
        }
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000',
            data: client,
            success: function () {
                
            }
        });
    }
    loadingMessage()
}

// show loading message function
function loadingMessage() {
    $("#mainForm").hide(3000)
    $(".loading").show(2000)
    $(".loading").hide(5000)
    $("#mainForm").show(3000)
    location.reload()
}