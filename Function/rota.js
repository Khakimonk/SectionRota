var $addRowBtn = $('#addRow');

$addRowBtn.click(function() {
    var data = '<tr><td><input type="checkbox" class="case"/></td>';
    var $name = $('#Name').val();
    var $sunCol1 = $('#sunCol1').val();
    var $sunCol2 = $('#sunCol2').val();
    var $monCol1 = $('#monCol1').val();
    var $monCol2 = $('#monCol2').val();
    var $tueCol1 = $('#tueCol1').val();
    var $tueCol2 = $('#tueCol2').val();
    var $wedCol1 = $('#wedCol1').val();
    var $wedCol2 = $('#wedCol2').val();
    var $thuCol1 = $('#thuCol1').val();
    var $thuCol2 = $('#thuCol2').val();
    var $friCol1 = $('#friCol1').val();
    var $friCol2 = $('#friCol2').val();
    var $satCol1 = $('#satCol1').val();
    var $satCol2 = $('#satCol2').val();
    var $totHours = $('#totHours').val();
    data += '<td colspan="2">' + $name + '</td><td class="rota_spacer"></td><td>' + $sunCol1 + '</td><td>' + $sunCol2 + '</td><td>' + $monCol1 + '</td><td>' + $monCol2 + '</td><td>' + $tueCol1 + '</td><td>' + $tueCol2 + '</td><td>' + $wedCol1 + '</td><td>' + $wedCol2 + '</td><td>' + $thuCol1 + '</td><td>' + $thuCol2 + '</td><td>' + $friCol1 + '</td><td>' + $friCol2 + '</td><td>' + $satCol1 + '</td><td>' + $satCol2 + '</td><td>' + $totHours + '</td></tr><tr id="inputRow"><td><input type="checkbox" class="case"/></td><td colspan="2"><input type="text" id="Name"/></td><td class="rota_spacer"></td><td><input type="text" size="5" id="sunCol1"/></td><td><input type="text" size="5" id="sunCol2"/></td><td><input type="text" size="5" id="monCol1"/></td><td><input type="text" size="5" id="monCol2"/></td><td><input type="text" size="5" id="tueCol1"/></td><td><input type="text" size="5" id="tueCol2"/></td><td><input type="text" size="5" id="wedCol1"/></td><td><input type="text" size="5" id="wedCol2"/></td><td><input type="text" size="5" id="thuCol1"/></td><td><input type="text" size="5" id="thuCol2"/></td><td><input type="text" size="5" id="friCol1"/></td><td><input type="text" size="5" id="friCol2"/></td><td><input type="text" size="5" id="satCol1"/></td><td><input type="text" size="5" id="satCol2"/></td><td><input type="text" size="5" id="totHours"/></td></tr>';
    $('#inputRow').remove();
    $('#mainRota').append(data);
});

$("#deleteRow").on('click', function() {
	$('.case:checkbox:checked').parents("tr").remove();

});
