var rows = 6;
var cells = 6;

for (var i = 1; i <= rows; i++) {
  $('table').append("<tr></tr>");
  for (var j = 1; j <= cells; j++) {
    $('tr:last').append("<td></td>");
  };
};

$('td').on('click', function() {
  $(this).css('background', 'blue');
});
