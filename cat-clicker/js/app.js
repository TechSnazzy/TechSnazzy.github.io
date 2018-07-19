/*
 * Add cat headings above images.
 */
$('#milo-heading').html('Milo the Cat');
$('#macy-heading').html('Macy the Cat');

/*
 * Select and bind click event handler to milo class.
 */
$("#milo-image").click(function(){
  // parse string in count class
  let count = parseInt($(".count").text());
  // increment count
  count++;
  // display count
  $(".count").text(count);
});

$("#macy-image").click(function(){
  // parse string in count class
  let count = parseInt($(".count").text());
  // increment count
  count++;
  // display count
  $(".count").text(count);
});
