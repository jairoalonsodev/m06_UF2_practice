$(document).ready(function () {
    createAccountTypesOptions()
    $("#clientDni").focusout(() => {
        validateDNI()
    })
    $("#clientName").focusout(() => {
        validateName()
    })
    $("#amount").focusout(() => {
        validateAmount()
    })
    $(function () {
        $("#datepicker").datepicker();
        $("#datepicker2").datepicker();
        $("#datepicker3").datepicker();
        $("#datepicker4").datepicker();
        $("#datepicker5").datepicker();
        $("#datepicker6").datepicker();
        $("#datepicker7").datepicker();
        $("#datepicker8").datepicker();
        $("#datepicker9").datepicker();
        $("#datepicker10").datepicker();

    })

    fillForm()

})

function createAccountTypesOptions() {
    var selectValues = {
        "Savings account": "Savings account",
        "Investement account": "Investement account",
        "Personal account": "Personal account",
        "Solidary account": "Solidary account",
        "Individual Savings Account": "Individual Savings Account",
        "Fixed deposit account": "Fixed deposit account",
        "Tax-Free Savings Account": "Tax-Free Savings Account",
    }
    $.each(selectValues, function (key, value) {
        $("select").append($('<option></option>').attr('value', key).text(value))
    })
}

$(function ($) {
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

function fillForm() {
    $.get("http://127.0.0.1:3000/api/clients", function (data) {
        let clientDni = $(".clientDni")
        let clientName=$(".clientName")
        let accountType = $(".accountType option")
        let amount = $(".amount")
        let clientType = $(".clientType")
        let i = 0
        while(i < 10) {
            console.log(accountType.val())
            clientDni[i] = clientDni.val(data.response[i].DNI);
            clientName[i] = clientName.val(data.response[i].Name);
            if(accountType.val() === data.response[i].accountType) {
                $(`option:${data.response[i].accountType}`).attr("selected", "selected");
            }
            amount[i] = amount.val(parseFloat(data.response[i].Amount));
            clientType[i] = clientType.val(data.response[i].clientType);
            i++
        }
    });

}