//Start of Form-Control function
$(document).ready(function () {
    // Select all inputs from datepicker class
    const datePicker = $(".datepicker")

    //Create the Option labels of Account Types selects
    createAccountTypesOptions()

    //Execute validator function of DNI
    $("#clientDni").focusout(() => {
        validateDNI()
    })
    
    //Execute validator function of Name
    $("#clientName").focusout(() => {
        validateName()
    })

    //Execute validator function of Amount
    $("#amount").focusout(() => {
        validateAmount()
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
    fillForm()

})
//End of Form-Control function

//Start the Creator of accounts
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
//End the Creator of accounts

//Start the Datepicker
$(function ($) {
    //Function that we execute for the data picker, and put it in catalan
    $.datepicker.regional['ca'] = {
        closeText: 'Tancar',
        prevText: 'Prv',
        nextText: 'Seg;',
        currentText: 'Avui',
        monthNames: ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
        monthNamesShort: ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des'],
        dayNames: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
        dayNamesShort: ['Dug', 'Dln', 'Dmt', 'Dmc', 'Djs', 'Dvn', 'Dsb'],
        dayNamesMin: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        isRTL: false,
        changeMonth: true,
        changeYear: true,
        showMonthAfterYear: false,
        yearSuffix: '',
        maxDate: 0
    };

    $.datepicker.setDefaults($.datepicker.regional['ca']);
});
//End the Datepicker

//Start Filling the form
function fillForm() {
    $.get("http://127.0.0.1:3000/api/clients", function (data) {
        console.log(data)
        let clientDni = $(".clientDni")
        let clientName = $(".clientName")
        let accountTypes = $("select")
        let amount = $(".amount")
        let clientType = $(".clientType")
        let datePicker = $(".datepicker")
        let client
        console.log(datePicker)
        let i = 0
        while (i < 10) {
            let typeAccount = new AccountType(data.response[i].accountType)
            let typeClient = new ClientType(data.response[i].clientType)
            client = new Account(data.response[i].Id, typeAccount.type, typeClient.type, data.response[i].Name, data.response[i].DNI, data.
            response[i].Amount, data.response[i].entryDate)

            const selectedOption = $(accountTypes[i])
            
            clientDni[i] = clientDni.val(client.DNIClient);
            clientName[i] = clientName.val(client.fullNameClient);
            selectedOption.val(client.accountType)
            amount[i] = amount.val(`${parseFloat(client.amount)} €`);
            clientType[i] = clientType.val(client.clientType);
            datePicker[i] = datePicker.val(client.entryDate)
            i++
        }
    });
}
//End the Fill Form
