/*
 * Select and bind click event handler to milo class.
 */
$("#milo").click(function(){
  // parse string in count class
  let count = parseInt($(".count").text());
  // increment count
  count++;
  // display count
  $(".count").text(count);
});
