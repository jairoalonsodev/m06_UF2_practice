$(document).ready(function () {
    createAccountTypesOptions()

    $(function() {
        $("#datepicker").datepicker();
    })
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

// $(function($){
//     $.datepicker.regional['es'] = {
//         closeText: 'Cerrar',
//         prevText: '&#x3C;Ant',
//         nextText: 'Sig&#x3E;',
//         currentText: 'Hoy',
//         monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
//             'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
//         monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
//             'Jul','Ago','Sep','Oct','Nov','Dic'],
//         dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
//         dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
//         dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sa'],
//         weekHeader: 'Sm',
//         dateFormat: 'dd/mm/yy',
//         firstDay: 1,
//         isRTL: false,
//         showMonthAfterYear: false,
//         yearSuffix: ''};
//     $.datepicker.setDefaults($.datepicker.regional['es']);
// });