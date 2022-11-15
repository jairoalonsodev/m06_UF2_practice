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
    $(function() {
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
        1 : "Savings account",
        2 : "Investement account",
        3 : "Personal account",
        4 : "Solidary account",
        5 : "Individual Savings Account",
        6 : "Fixed deposit account",
        7 : "Tax-Free Savings Account",
    }
    $.each(selectValues, function (key, value) {
        $("select").append($('<option></option>').attr('value', key).text(value))
    })
}

$(function($){
    $.datepicker.regional['ca'] = {
        closeText: 'Tancar',
        prevText: 'Prv',
        nextText: 'Seg;',
        currentText: 'Avui',
        monthNames:['Gener','Febrer','Març','Abril','Maig','Juny','Juliol','Agost','Setembre','Octubre','Novembre','Desembre'],
        monthNamesShort: ['Gen','Feb','Mar','Abr','Mai','Jun','Jul','Ago','Set','Oct','Nov','Des'],
        dayNames: ['Diumenge','Dilluns','Dimarts','Dimecres','Dijous','Divendres','Dissabte'],
        dayNamesShort: ['Dug','Dln','Dmt','Dmc','Djs','Dvn','Dsb'],
        dayNamesMin: ['Dg','Dl','Dt','Dc','Dj','Dv','Ds'],
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
        console.log(data)
        $("#clientDni").val(data.response[0].DNI)
        $("#clientName").val(data.response[0].Name)
        $("#accountType").val(data.response[0].accountType)
        $("#amount").val(data.response[0].Amount)
        $("#clientType").val(data.response[0].clientType)
        $("#datapicker").val(data.response[0].entryDate)
    } );

}