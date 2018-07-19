## Cat Clicker Application

This application is very simple. Launch the application and click the cat photo. Watch the number increment each time you click. And that's it. Endless fun.

## Resources

In case you need a refresher on events and event listeners, here are some links.

If you're writing Cat Clicker with vanilla JS (no jQuery), you'll be adding the "click" event with `elem.addEventListener()`.

```js
var elem = document.getElementById('my-elem');
elem.addEventListener('click', function(){
  //the element has been clicked... do stuff here
}, false);
```

If you're using jQuery, you'll be adding the "click" event listener with `jQuery.click()`.

```js
$('#my-elem').click(function(e) {
  //the element has been clicked... do stuff here
});
```

## Other JS Files

I added `1.js` and `2.js` to compare and show what closure can do.
